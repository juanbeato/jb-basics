import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import style from './JbHeader.scss';

export class JbHeader extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      leftText: { type: String },
      leftIcon: { type: String },
      rightText: { type: String },
      rightIcon: { type: String },
    };
  }

  constructor() {
    super();
    this.leftText = '';
    this.leftIcon = '';
    this.rightText = '';
    this.rightIcon = '';
  }

  render() {
    return html`
      <div class="jb-header">
        ${this._containerTemplate('left')} ${this._containerTemplate('right')}
      </div>
    `;
  }

  _containerTemplate(type) {
    return html`
      <div class="jb-header__${type}-container">
        <slot name=${type}>
          ${this.constructor._itemTextTemplate(this[`${type}Text`], type)}
          ${this.constructor._itemIconTemplate(this[`${type}Icon`], type)}
        </slot>
      </div>
    `;
  }

  static _itemIconTemplate(icon, type) {
    return icon
      ? html`<iron-icon
          class="jb-header__${type}-container__icon"
          icon=${icon}
        ></iron-icon>`
      : html``;
  }

  static _itemTextTemplate(text, type) {
    return text
      ? html`<p class="jb-header__${type}-container__text">${text}</p>`
      : html``;
  }
}
