import { html, css, LitElement, unsafeCSS } from 'lit-element';
import {ifDefined} from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/notification-icons.js';
import '@polymer/iron-icons/image-icons.js';
import style from './JbInput.scss';

export class JbInput extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      label: { type: String },
      rightIcon: { type: String },
      leftIcon: { type: String },
      placeholder: { type: String },
      inputType: { type: String },
      value: { type: String },
      infoMessageIcon: { type: String },
      infoMessage: { type: String },
      disabled: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.label = '';
    this.infoMessage = '';
    this.value = '';
    this.rightIcon = '';
    this.leftIcon = '';
    this.inputType = "text";
    this.infoMessageIcon = 'error';
  }

  render() {
    return html`
      ${this._labelTemplate} ${this._inputTemplate} ${this._infoMessageTemplate}
    `;
  }

  get _inputTemplate() {
    return html`
      <div class="jb-input-container">
        ${this._inputIconTemplate(this.leftIcon, 'left')}
        
        <input class="jb-input-container__input"
              placeholder=${ifDefined(this.placeholder ? this.placeholder : undefined)}
              type=${this.inputType}
              value=${this.value}
              ?disabled=${this.disabled}
              @keyup=${this._handleChange}>
        ${this._inputIconTemplate(this.rightIcon, 'right')}
      </div>
    `;
  }

  get _infoMessageTemplate() {
    return this.infoMessage
      ? html`<p>${this.infoMessage}</p>
          <iron-icon icon=${this.infoMessageIcon}></iron-icon>`
      : html``;
  }

  get _labelTemplate() {
    return this.label
      ? html`<p class="jb-input-label">${this.label}</p>`
      : html``;
  }

  _inputIconTemplate(icon, type) {
    return icon
      ? html`<iron-icon
          class="jb-input-container__icon jb-input-container__icon-${type}"
          icon=${icon}
          @click=${() => this._handleClick(`jb-input-icon-${type}-clicked`)}
          @keydown=${() => this._handleClick(`jb-input-icon-${type}-clicked`)}
        ></iron-icon>`
      : html``;
  }

  _handleChange(evt) {
    this.value = evt.target.value;
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
        detail: evt.target.value,
      })
    );
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
