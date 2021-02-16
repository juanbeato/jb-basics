import { html, css, LitElement, unsafeCSS } from 'lit-element';
import style from './JbCountdown.scss';

const moment = require('moment');
moment.locale('es-en');

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
      id: { type: String },
      now: { type: Number, hasChanged: () => false },
      then: { type: Number, hasChanged: () => false},
      date: { type: String },
      label: { type: String },
      dateFormat: { type: String },
      formatTimeTillDate: { type: String },
      humanize: { type: Boolean },
      countDownLabels: { type: Object },
    };
  }

  constructor() {
    super();
    this.now = moment();
    this.humanize = false;
    this.label = '';
    this.countDownLabels = {
      years: 'years',
      months: 'months',
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
    };
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has('date') || changedProperties.has('dateFormat')) {
      if (this.date && this.dateFormat) {
        this.initializeCountdown();
      }
    }
    if (changedProperties.has('formatTimeTillDate')) {
      return super.shouldUpdate(changedProperties);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  initializeCountdown() {
    const thenDate = this.getThenDate();
    this.formatTimeTillDate = thenDate.formatDate;

    if (thenDate && thenDate.duration && thenDate.duration.valueOf() > 0) {
      this.interval = setInterval(() => {
        this.formatTimeTillDate = this.getThenDate().formatDate;
      }, 1000);
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
    let formatDate;
    const duration = moment.duration(moment(this.date, this.dateFormat).diff(moment()));
    const durationData = duration._data;
    const { years = '', months = '', days = '', hours = '', minutes = '', seconds = '' } = durationData;

    const formatTimeTillDate = duration.valueOf() > 0 ? Object.assign({}, 
      years ? { years } : {},
      months ? { months } : {},
      days ? { days } : {},
      { hours, minutes, seconds }
    ) : { hours: 0, minutes: 0, seconds: 0 };

    if (!this.humanize) {
      formatDate = Object.keys(formatTimeTillDate).map(item => {
        return {
          type: item,
          label: this.countDownLabels && this.countDownLabels[item]
                  ? this.countDownLabels[item]
                  : '',
          value: formatTimeTillDate[item] < 10 
                  ? formatTimeTillDate[item].toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) 
                  : formatTimeTillDate[item].toString()
        }
      });
    } else {
      formatDate = Object.keys(formatTimeTillDate).map(item => `${formatTimeTillDate[item]}${item.slice(0, 1)}`).join(' ');
    }

    if (duration.valueOf() <= 1000) {
      clearInterval(this.interval);
      this.dispatchEvent(new CustomEvent('jb-countdown-finished', {
        bubbles: true,
        composed: true,
        detail: this.id,
      }));
    }

    return {
      formatDate,
      duration
    }
  }

  get getDateTemplate() {
    let template = html``;
    if (this.formatTimeTillDate) {
      template = this.humanize 
                  ? html`<div class="jb-countdown-container__date">
                    <div class="jb-countdown-container__date__item">
                        <p class="jb-countdown-container__date__item__value">
                          ${this.formatTimeTillDate}
                        </p>
                    </div>
                  </div>` 
                  : html`<div class="jb-countdown-container__date">
                          ${this.formatTimeTillDate.map(item => {
                            return html`<div class="jb-countdown-container__date__item">
                              <p class="jb-countdown-container__date__item__value">
                                ${item.value}
                              </p>
                              <p class="jb-countdown-container__date__item__label">
                                ${item.label}
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
