import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import style from './JbMenu.scss';

export class JbMenu extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      items: { type: Array },
      selected: { type: Number },
      clickEvent: { type: String },
    };
  }

  constructor() {
    super();
    this.items = [];
    this.selected = 0;
    this.clickEvent = 'jb-menu-item-clicked';
  }

  render() {
    return html`
      <nav class="jb-menu-container">
        ${this.items.map(
          (item, index) =>
            html`${this._itemTemplate(item, index, index === this.selected)}`
        )}
      </nav>
    `;
  }

  _itemTemplate(item, index, selected) {
    return html`
      <div
        class="jb-menu-container__item${selected ? '-isSelected' : ''}"
        @click=${() => this._handleClick(index)}
        @keydown=${() => this._handleClick(index)}
      >
        ${this.constructor._itemIconTemplate(item.icon)}
        ${this.constructor._itemTextTemplate(item.text)}
      </div>
    `;
  }

  static _itemIconTemplate(icon) {
    return icon
      ? html`<iron-icon
          class="jb-menu-container__item__icon"
          icon=${icon}
        ></iron-icon>`
      : html``;
  }

  static _itemTextTemplate(text) {
    return text
      ? html`<p class="jb-menu-container__item__text">${text}</p>`
      : html``;
  }

  _handleClick(index) {
    this.selected = index;
    this.dispatchEvent(
      new CustomEvent(this.clickEvent, {
        bubbles: true,
        composed: true,
        detail: index,
      })
    );
  }
}
