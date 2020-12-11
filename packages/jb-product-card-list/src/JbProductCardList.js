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
    };
  }

  constructor() {
    super();
    this.cards = [];
    this.itemView = '';
  }

  render() {
    return html`
      <div class="jb-product-card-list-container">
        ${this.cards.map(
          card =>
            html`${unsafeHTML(`<jb-product-card class="jb-product-card-list-container__item"
                  ${card.image ? `image="${card.image}"` : ''}
                  ${card.title ? `title="${card.title}"` : ''}
                  ${card.description ? `description="${card.description}"` : ''}
                  view=${this.itemView}
                  ${card.price ? `price="${card.price}"` : ''}
                  ${card.time ? `time="${card.time}"` : ''}
                  ${
                    card.buttonText ? `buttontext="${card.buttonText}"` : ''
                  }></jb-product-card>`)}`
        )}
      </div>
    `;
  }
}
