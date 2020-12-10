import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/av-icons.js';
import style from './JbButton.scss';

export class JbButton extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      buttonText: { type: String },
      buttonIcon: { type: String },
    };
  }

  constructor() {
    super();
    this.buttonText = '';
    this.buttonIcon = '';
  }

  render() {
    return html`
      <button class="jb-button-main" @click=${this.__increment}>
        ${this.constructor._itemIconTemplate(this.buttonIcon)}
        <p class="jb-button-main__text">${this.buttonText}</p>
      </button>
    `;
  }

  static _itemIconTemplate(icon) {
    return icon
      ? html`<iron-icon class="jb-button-main__icon" icon=${icon}></iron-icon>`
      : html``;
  }
}
