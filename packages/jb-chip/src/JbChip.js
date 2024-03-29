import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import style from './JbChip.scss';

export class JbChip extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      text: { type: String },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.text = '';
    this.icon = 'close';
  }

  render() {
    return html`
      <div class="jb-chip-container">
        <p class="jb-chip-container__text">${this.text}</p>
        ${this._itemIconTemplate(this.icon)}
      </div>
    `;
  }

  _itemIconTemplate(icon) {
    return icon
      ? html`<iron-icon
          class="jb-chip-container__icon"
          icon=${icon}
          @click=${() => this._handleClick(`jb-chip-icon-clicked`)}
          @keydown=${() => this._handleClick(`jb-chip-icon-clicked`)}
        ></iron-icon>`
      : html``;
  }

  _handleClick(eventName, detail = {}) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail,
      })
    );
  }
}
