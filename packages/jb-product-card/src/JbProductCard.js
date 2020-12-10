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
    };
  }

  constructor() {
    super();
    this.productTitle = '';
    this.productDescription = '';
    this.productImage = '';
    this.productAlign = 'horizontal';
  }

  render() {
    return html`
      <div class="jb-product-card__main-container">
        <iron-image
          class="jb-product-card__main-container__image"
          sizing="contain"
          fade
          src=${this.productImage}
        ></iron-image>
        <div class="jb-product-card__main-container__data-container">
          <p class="jb-product-card__main-container__data-container__title">
            ${this.productTitle}
          </p>
          <p
            class="jb-product-card__main-container__data-container__description"
          >
            ${this.productDescription}
          </p>
          <div class="jb-product-card__main-container__data-container__footer">
            <p class="jb-product-card__main-container__data-container__footer__left">
              12:44:22
            </p>
            <jb-button class="jb-product-card__main-container__data-container__footer__right"
            secondary
            buttontext="FREE">
            </jb-button>
          </div>
        </div>
      </div>
    `;
  }
}
