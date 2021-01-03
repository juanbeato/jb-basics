import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@juanbeato/jb-product-card';
import style from './JbProductCardList.scss';

export class JbProductCardList extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      cards: { type: Array },
      itemView: { type: String },
      skeletonConfig: { type: Object },
    };
  }

  constructor() {
    super();
    this.cards = [];
    this.itemView = '';
    this.skeletonConfig = {
      items: 3,
      itemConfig: {
        image: '',
        title: 'skeletonTitle',
        price: 'skeletonPrice',
      },
    };
  }

  render() {
    return html`
      <div class="jb-product-card-list-container">
        ${this.cards && this.cards.length
          ? this.cards.map(card => this._productCardTemplate(card))
          : [...Array(this.skeletonConfig.items)].map(() =>
              this._productCardTemplate(this.skeletonConfig.itemConfig, true)
            )}
      </div>
    `;
  }

  _productCardTemplate(card, mockCard) {
    return html`${unsafeHTML(`<jb-product-card class="jb-product-card-list-container__item"
        ${card.image ? `image="${!mockCard ? card.image : ''}"` : ''}
        ${card.id ? `cardid="${card.id}"` : ''}
        ${card.title ? `title="${card.title}"` : ''}
        ${card.subTitle ? `subtitle="${card.subTitle}"` : ''}
        ${card.description ? `description="${card.description}"` : ''}
        ${card.countdown ? `countdown='${JSON.stringify(card.countdown)}'` : ''}
        ${card.date ? `date='${JSON.stringify(card.date)}'` : ''}
        view=${this.itemView}
        ${card.price ? `price="${card.price}"` : ''}
        ${card.time ? `time="${card.time}"` : ''}
        ${
          card.buttonText ? `buttontext="${card.buttonText}"` : ''
        }></jb-product-card>`)}`;
  }
}
