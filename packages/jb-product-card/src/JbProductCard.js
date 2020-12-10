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
      productTitle: { type: String },
      productDescription: { type: String },
      productImage: { type: String },
      productAlign: { type: String },
      productTime: { type: String },
      productPrice: { type: String },
      buttonText: { type: String }
    };
  }

  constructor() {
    super();
    this.productTitle = '';
    this.productDescription = '';
    this.productImage = '';
    this.productAlign = 'horizontal';
    this.productTime = '';
    this.productPrice = '';
    this.buttonText = '';
  }

  render() {
    return html`
      <div class="jb-product-card__main-container">
        <iron-image
          class="jb-product-card__main-container__image"
          sizing="cover"
          fade
          src=${this.productImage}
        ></iron-image>
        <div class="jb-product-card__main-container__data-container">
          ${this.constructor._paragraphTemplate(this.productTitle, 'title')}
          ${this.constructor._paragraphTemplate(this.productDescription, 'description')}
          <div class="jb-product-card__main-container__data-container__footer">
            ${this.constructor._timeTemplate(this.productTime)}
            ${this._priceTemplate(this.productPrice)}
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
