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
      loading: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.buttonText = '';
    this.buttonIcon = '';
    this.loading = false;
  }

  render() {
    return html`
      <button class="jb-button-main" @click=${this.__increment}>
        ${this._loaderTemplate}
        <p class="jb-button-main__text">${this.buttonText}</p>
        ${this.constructor._itemIconTemplate(this.buttonIcon)}
      </button>
    `;
  }

  get _loaderTemplate() {
    return this.loading
      ? html`<span class="jb-button-main__loader"></span>`
      : html``;
  }

  static _itemIconTemplate(icon) {
    return icon
      ? html`<iron-icon class="jb-button-main__icon" icon=${icon}></iron-icon>`
      : html``;
  }
}
