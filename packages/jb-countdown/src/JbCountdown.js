import { html, css, LitElement, unsafeCSS } from 'lit-element';
import style from './JbCountdown.scss';

const moment = require('moment');

export class JbCountdown extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      now: { type: Number },
      then: { type: Number },
      date: { type: String },
      label: { type: String },
      dateFormat: { type: String },
      formatTimeTillDate: { type: String },
      hideLabels: { type: Boolean },
      countDownLabels: { type: Object },
    };
  }

  constructor() {
    super();
    this.now = moment();
    this.hideLabels = false;
    this.label = '';
    this.countDownLabels = {
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.formatTimeTillDate = this.getThenDate();
    this.interval = setInterval(() => {
      this.formatTimeTillDate = this.getThenDate();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return html`
      <div class="jb-countdown-container">
        ${this.getLabelTemplate} ${this.getDateTemplate}
      </div>
    `;
  }

  getThenDate() {
    const timeTillDate = moment(moment(this.date, this.dateFormat) - moment());
    const formatTimeTillDate = {
      days: {
        label:
          this.countDownLabels && this.countDownLabels.days
            ? this.countDownLabels.days
            : '',
        value: timeTillDate.format('DD'),
      },
      hours: {
        label:
          this.countDownLabels && this.countDownLabels.hours
            ? this.countDownLabels.hours
            : '',
        value: timeTillDate.format('HH'),
      },
      minutes: {
        label:
          this.countDownLabels && this.countDownLabels.minutes
            ? this.countDownLabels.minutes
            : '',
        value: timeTillDate.format('mm'),
      },
      seconds: {
        label:
          this.countDownLabels && this.countDownLabels.seconds
            ? this.countDownLabels.seconds
            : '',
        value: timeTillDate.format('ss'),
      },
    };
    return formatTimeTillDate;
  }

  get getDateTemplate() {
    let template = html``;
    if (this.formatTimeTillDate) {
      template = this.hideLabels
        ? html`<p class="jb-countdown-container__date">
            ${Object.values(this.formatTimeTillDate) &&
            Object.values(this.formatTimeTillDate).length
              ? Object.values(this.formatTimeTillDate)
                  .map(item => item.value)
                  .join(':')
              : ''}
          </p>`
        : html`<div class="jb-countdown-container__date">
            ${Object.keys(this.formatTimeTillDate).map(item => {
              return html`<div class="jb-countdown-container__date__item">
                <p class="jb-countdown-container__date__item__value">
                  ${this.formatTimeTillDate[item].value}
                </p>
                <p class="jb-countdown-container__date__item__label">
                  ${this.formatTimeTillDate[item].label}
                </p>
              </div>`;
            })}
          </div>`;
    }
    return template;
  }

  get getLabelTemplate() {
    return this.label
      ? html`<p class="jb-countdown-container__label">${this.label}</p>`
      : html``;
  }
}
