/* eslint class-methods-use-this: ["error", { "exceptMethods": ["_skeletonTemplate"] }] */
import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@polymer/iron-image/iron-image.js';
import '@juanbeato/jb-button';
import '@juanbeato/jb-countdown';
import { defineCustomElements as initSkeleton } from 'skeleton-webcomponent-loader/loader/index.js';
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
      countDown: { type: Object },
      image: { type: String },
      view: { type: String },
      time: { type: String },
      price: { type: String },
      buttonText: { type: String },
      isLoading: {
        type: Boolean,
        reflect: true,
      },
      viewTemplates: { type: Object },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.subTitle = '';
    this.description = '';
    this.countDown = {};
    this.image = '';
    this.view = 'horizontal';
    this.time = '';
    this.price = '';
    this.buttonText = '';
    this.isLoading = true;
    this.viewTemplates = {
      vertical: 'standard',
      horizontal: 'standard',
      banner: 'banner',
    };
    initSkeleton();
  }

  render() {
    return html`
      <div class="jb-product-card__main-container">
        ${this[`_${this._getTemplateType(this.view)}Template`]}
      </div>
    `;
  }

  get _standardTemplate() {
    return html`
      ${this._getImageTemplate}
      <div class="jb-product-card__main-container__data-container">
        ${this._paragraphTemplate(this.title, 'title')}
        ${this._paragraphTemplate(this.description, 'description')}
        ${this._countDownTemplate(this.countDown)}
        <div class="jb-product-card__main-container__data-container__footer">
          ${this._timeTemplate(this.time)} ${this._priceTemplate(this.price)}
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
    `;
  }

  get _getImageTemplate() {
    return html`
      <div class="jb-product-card__main-container__image__container">
        <img
          ?hidden=${this.isLoading}
          class="jb-product-card__main-container__image__container__img"
          src=${this.image}
          alt=${this.title}
          @load=${() => this._updateLoading(false)}
        />
        ${this._imageSkeletonTemplate}
      </div>
    `;
  }

  get _imageSkeletonTemplate() {
    let skeletonConfig = { width: '100%' };
    if (this.view === 'horizontal') {
      skeletonConfig = { ...skeletonConfig, height: '100%' };
    }
    return this.isLoading
      ? html`${this._skeletonTemplate(skeletonConfig)}`
      : html``;
  }

  _paragraphTemplate(text, type) {
    let template = html``;
    if (text) {
      const skeletonTemplate =
        type === 'description'
          ? this._skeletonTemplate({ count: 3 })
          : this._skeletonTemplate({ width: '50%' });
      template = html` <div
        class="jb-product-card__main-container__data-container__${type}"
      >
        ${this.isLoading
          ? skeletonTemplate
          : unsafeHTML(`<p class="jb-product-card__main-container__data-container__${type}__text">
                ${text}
            </p>`)}
      </div>`;
    }
    return template;
  }

  _priceTemplate(price) {
    let template = unsafeHTML(`<jb-button class="jb-product-card__main-container__data-container__footer__right__button"
                              secondary
                              buttontext=${this.buttonText}></jb-button>`);
    if (price) {
      template = unsafeHTML(
        `<p class="jb-product-card__main-container__data-container__footer__right__text">${price}</p>`
      );
    }
    return html` <div
      class="jb-product-card__main-container__data-container__footer__right"
    >
      ${this.isLoading ? this._skeletonTemplate({ width: '50%' }) : template}
    </div>`;
  }

  _timeTemplate(time) {
    return time
      ? html` <div
          class="jb-product-card__main-container__data-container__footer__left"
        >
          ${this.isLoading
            ? this._skeletonTemplate({ width: '50%' })
            : unsafeHTML(`<p class="jb-product-card__main-container__data-container__footer__left__text">
              ${time}
            </p>`)}
        </div>`
      : html``;
  }

  _countDownTemplate(countDown) {
    return Object.keys(countDown).length
      ? html`<div
          class="jb-product-card__main-container__data-container__countdown"
        >
          ${this.isLoading
            ? this._skeletonTemplate({ width: '50%' })
            : unsafeHTML(`<jb-countdown class="jb-product-card__main-container__data-container__countdown__text"
                        date=${countDown.date} 
                        dateformat=${countDown.dateFormat} 
                        hidelabels=${countDown.hideLabels}></jb-countdown>`)}
        </div>`
      : html``;
  }

  _skeletonTemplate(config) {
    return unsafeHTML(`<nb-skeleton
      ${config.width ? `width="${config.width}"` : ''}
      ${config.height ? `height="${config.height}"` : ''}
      ${config.count ? `count="${config.count}"` : ''}
    ></nb-skeleton>`);
  }

  _getTemplateType(view) {
    return this.viewTemplates[view];
  }

  _updateLoading(value) {
    this.isLoading = value;
  }
}
