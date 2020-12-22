import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import style from './JbRating.scss';

export class JbRating extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      rate: {
        type: Number,
        converter: {
          fromAttribute: value => {
            const subtractedValue = value - 1;
            return subtractedValue;
          },
        },
      },
      overItem: { type: Number },
      readOnly: { type: Boolean },
      showRate: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.overItem = -1;
  }

  render() {
    return html` <div class="jb-rating-container">
      <div class="jb-rating-container__icons">
        ${[...Array(5)].map((item, index) => {
          const itemFilled = this._isFilled(index);
          return html`<iron-icon
            class="jb-rating-container__icons__item__icon${itemFilled
              ? '-filled'
              : ''}"
            icon="${itemFilled ? 'star' : 'star-border'}"
            @mouseenter="${() => this._handleOver(index)}"
            @mouseleave="${() => this._resetSelection()}"
            @click="${() => this._handleClick(index)}"
          ></iron-icon>`;
        })}
      </div>
      <div class="jb-rating-container__rate">
        ${this.constructor._getViewRate(
          this.rate || this.rate === 0 ? this.rate : this.overItem
        )}
      </div>
    </div>`;
  }

  shouldUpdate(changedProperties) {
    if (
      (this.rate || this.rate === 0) &&
      changedProperties.has('overItem') &&
      (changedProperties.get('overItem') ||
        changedProperties.get('overItem') === 0)
    ) {
      return false;
    }
    return super.shouldUpdate(changedProperties);
  }

  _handleOver(index) {
    if (!this.readOnly && (index || index === 0)) {
      this.overItem = index;
    }
  }

  _handleClick(index) {
    if (!this.readOnly && (index || index === 0)) {
      this.rate = index;
    }
  }

  _resetSelection() {
    this.overItem = !this.rate && this.rate !== 0 ? -1 : this.rate;
  }

  _isFilled(index) {
    return !!(
      index <= (this.rate || this.overItem) ||
      (this.rate === 0 && index <= this.rate)
    );
  }

  static _getViewRate(rate) {
    const rateValue = rate || rate === 0 ? rate + 1 : 0;
    return rateValue;
  }
}
