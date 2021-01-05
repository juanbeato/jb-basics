import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/notification-icons.js';
import style from './JbDate.scss';

const moment = require('moment');

export class JbDate extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      date: { type: String },
      format: { type: String },
      icon: { type: String },
      language: { type: String },
    };
  }

  constructor() {
    super();
    this.date = '';
    this.format = '';
    this.icon = '';
    this.language = 'es-en';
    moment.locale(this.language);
  }

  render() {
    return html`
      <div class="jb-date__main-container">
        ${this.constructor._itemIconTemplate(this.icon)}
        ${this.constructor._dateTemplate(this.date, this.format)}
      </div>
    `;
  }

  static _dateTemplate(date, format) {
    let formatDate = moment(date).format(format);
    if (formatDate) {
      formatDate = formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
    }

    return html`<p class="jb-date__main-container__text">${formatDate}</p>`;
  }

  static _itemIconTemplate(icon) {
    return icon
      ? html`<iron-icon
          class="jb-date__main-container__icon"
          icon=${icon}
        ></iron-icon>`
      : html``;
  }
}
