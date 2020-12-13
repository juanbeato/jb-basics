import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@polymer/iron-image/iron-image.js';
import '@juanbeato/jb-button';
import {defineCustomElements as initSkeleton} from  'skeleton-webcomponent-loader/loader/index.js';
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
      buttonText: { type: String },
      isLoading: { type: Boolean }
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
    this.isLoading = true;
    initSkeleton();
  }

  render() {
    return html`
      <div class="jb-product-card__main-container"> 
        <div class="jb-product-card__main-container__image__container">
          <img ?hidden=${this.isLoading} class="jb-product-card__main-container__image__container__img" 
              src=${this.image}
              @load=${() => this.isLoading = false}>
          ${this._imageTemplateSkeleton}
        </div>
        <div class="jb-product-card__main-container__data-container">
          ${this._paragraphTemplate(this.title, 'title')}
          ${this._paragraphTemplate(this.description, 'description')}
          <div class="jb-product-card__main-container__data-container__footer">
            ${this._timeTemplate(this.time)}
            ${this._priceTemplate(this.price)}
          </div>
        </div>
      </div>
    `;
  }

  get _imageTemplateSkeleton() {
    return this.isLoading
      ? html`${ this.view === 'horizontal' 
        ? unsafeHTML(`<nb-skeleton width="100%" height="100%"></nb-skeleton>`)
        : unsafeHTML(`<nb-skeleton width="100%"></nb-skeleton>`)}` 
      : html``
  }

  _paragraphTemplate(text, type) {
    return text
      ? html`
        <div class="jb-product-card__main-container__data-container__${type}">
          ${ this.isLoading 
            ? (type === 'description' ? unsafeHTML('<nb-skeleton count="3"></nb-skeleton>') : unsafeHTML('<nb-skeleton width="50%"></nb-skeleton>'))
            : unsafeHTML(`<p class="jb-product-card__main-container__data-container__${type}__text">
                  ${text}
              </p>`)
          }
        </div>`
      : html``
  }

  _priceTemplate(price) {
    return html`
      <div class="jb-product-card__main-container__data-container__footer__right">
      ${ this.isLoading 
        ? unsafeHTML(`<nb-skeleton width="50%"></nb-skeleton>`)
        : (price
          ? unsafeHTML(`<p class="jb-product-card__main-container__data-container__footer__right__text">${price}</p>`)
          : unsafeHTML(`<jb-button class="jb-product-card__main-container__data-container__footer__right__button"
            secondary
            buttontext=${this.buttonText}></jb-button>`))}
      </div>`
  }

  _timeTemplate(time) {
    return time
      ? html`
      <div class="jb-product-card__main-container__data-container__footer__left">
        ${ this.isLoading 
          ? unsafeHTML('<nb-skeleton width="50%"></nb-skeleton>')
          : unsafeHTML(`<p class="jb-product-card__main-container__data-container__footer__left__text">
              ${time}
            </p>`)}
      </div>`
      : html``
  }
}
