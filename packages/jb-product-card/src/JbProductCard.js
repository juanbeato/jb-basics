import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@polymer/iron-image/iron-image.js';
import '@juanbeato/jb-button';
import style from './JbProductCard.scss';

export class JbProductCard extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String },
      view: { type: String },
      time: { type: String },
      price: { type: String },
      buttonText: { type: String }
    };
  }

  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.image = '';
    this.view = 'horizontal';
    this.time = '';
    this.price = '';
    this.buttonText = '';
  }

  render() {
    return html`
      <div class="jb-product-card__main-container">
        <div class="jb-product-card__main-container__image__container">
          <img class="jb-product-card__main-container__image__container__img" src=${this.image}>
        </div>
        <div class="jb-product-card__main-container__data-container">
          ${this.constructor._paragraphTemplate(this.title, 'title')}
          ${this.constructor._paragraphTemplate(this.description, 'description')}
          <div class="jb-product-card__main-container__data-container__footer">
            ${this.constructor._timeTemplate(this.time)}
            ${this._priceTemplate(this.price)}
          </div>
        </div>
      </div>
    `;
  }

  static _paragraphTemplate(text, type) {
    return text
      ? html`
        <p class="jb-product-card__main-container__data-container__${type}">
            ${text}
        </p>`
      : html``
  }

  _priceTemplate(price) {
    return price
      ? html`<p class="jb-product-card__main-container__data-container__footer__right">${price}</p>`
      : html`<jb-button class="jb-product-card__main-container__data-container__footer__right"
        secondary
        buttontext=${this.buttonText}></jb-button>`;
  }

  static _timeTemplate(time) {
    return time
      ? html`<p class="jb-product-card__main-container__data-container__footer__left">
        ${time}
      </p>`
      : html``
  }
}
