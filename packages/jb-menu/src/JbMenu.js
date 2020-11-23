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
    };
  }

  constructor() {
    super();
    this.items = [];
  }

  render() {
    return html`
      <nav class="jb-menu-container">
        ${this.items.map(
          item => html`
            <div class="jb-menu-container__item">
              ${this._itemIconTemplate(item.icon)}
              ${this._itemTextTemplate(item.text)}
            </div>
          `
        )}
      </nav>
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
}
