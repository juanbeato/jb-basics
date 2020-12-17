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
      subTitle: { type: String },
      description: { type: String },
      image: { type: String },
      view: { type: String },
      time: { type: String },
      price: { type: String },
      buttonText: { type: String },
      isLoading: { 
        type: Boolean,
        reflect: true 
      },
      viewTemplates: { type: Object }
    };
  }

  constructor() {
    super();
    this.title = '';
    this.subTitle = '';
    this.description = '';
    this.image = '';
    this.view = 'horizontal';
    this.time = '';
    this.price = '';
    this.buttonText = '';
    this.isLoading = true;
    this.viewTemplates = {
      'vertical': 'standard',
      'horizontal': 'standard',
      'banner': 'banner'
    }
    initSkeleton();
  }

  render() {
    return html`
      <div class="jb-product-card__main-container"> 
        ${this['_' + this._getTemplateType(this.view) + 'Template']}
      </div>
    `
  }

  get _standardTemplate() {
    return html`
      ${this._getImageTemplate}
      <div class="jb-product-card__main-container__data-container">
        ${this._paragraphTemplate(this.title, 'title')}
        ${this._paragraphTemplate(this.description, 'description')}
        <div class="jb-product-card__main-container__data-container__footer">
          ${this._timeTemplate(this.time)}
          ${this._priceTemplate(this.price)}
        </div>
      </div>
    `;
  }

  get _bannerTemplate() {
    return html`
      ${this._getImageTemplate}
      <div class="jb-product-card__main-container__data-container">
        ${this._paragraphTemplate(this.title, 'title')}
        ${this._paragraphTemplate(this.subTitle, 'subTitle')}
      </div>
    `
  }

  get _getImageTemplate() {
    return html`
      <div class="jb-product-card__main-container__image__container">
        <img ?hidden=${this.isLoading} class="jb-product-card__main-container__image__container__img" 
            src=${this.image}
            @load=${() => this.isLoading = false}>
        ${this._imageSkeletonTemplate}
      </div>
    `
  }

  get _imageSkeletonTemplate() {
    const skeletonConfig = Object.assign({ width: '100%' }, 
      this.view === 'horizontal' ? { height: '100%' } : {}
    )
    return this.isLoading
      ? html`${ this._skeletonTemplate(skeletonConfig) }`
      : html``
  }

  _paragraphTemplate(text, type) {
    return text
      ? html`
        <div class="jb-product-card__main-container__data-container__${type}">
          ${ this.isLoading 
            ? (type === 'description' ? this._skeletonTemplate({ count: 3 }) : this._skeletonTemplate({ width: '50%' }))
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
        ? this._skeletonTemplate({ width: '50%' })
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
          ? this._skeletonTemplate({ width: '50%' })
          : unsafeHTML(`<p class="jb-product-card__main-container__data-container__footer__left__text">
              ${time}
            </p>`)}
      </div>`
      : html``
  }

  _skeletonTemplate(config) {
    return unsafeHTML(`<nb-skeleton
      ${config.width ? `width="${config.width}"` : ''}
      ${config.height ? `height="${config.height}"` : ''}
      ${config.count ? `count="${config.count}"` : ''}
    ></nb-skeleton>`)
  }

  _getTemplateType(view) {
    return this.viewTemplates[view];
  }
}
