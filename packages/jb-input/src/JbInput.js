import { html, css, LitElement, unsafeCSS } from 'lit-element';
import {ifDefined} from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
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
        ${this.constructor._inputIconTemplate(this.leftIcon)}
        
        <input class="jb-input-container__input"
              placeholder=${ifDefined(this.placeholder ? this.placeholder : undefined)}
              type=${this.inputType}
              value=${this.value}
              @keyup=${this._handleChange}>
        ${this.constructor._inputIconTemplate(this.rightIcon)}
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
      ? html`<p clas="jb-input-label">${this.label}</p>`
      : html``;
  }

  static _inputIconTemplate(icon) {
    return icon
      ? html`<iron-icon
          class="jb-input-container__icon"
          icon=${icon}
        ></iron-icon>`
      : html``;
  }

  _handleChange(evt) {
    this.value = evt.target.value;
    this.dispatchEvent(
      new CustomEvent('jb-input-value-updated', {
        bubbles: true,
        composed: true,
        detail: evt.target.value,
      })
    );
  }
}
