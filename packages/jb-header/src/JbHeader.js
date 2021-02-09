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
      centerText: { type: String },
      leftText: { type: String },
      leftIcon: { type: String },
      rightText: { type: String },
      rightIcon: { type: String },
    };
  }

  constructor() {
    super();
    this.centerText = '';
    this.leftText = '';
    this.leftIcon = '';
    this.rightText = '';
    this.rightIcon = '';
  }

  render() {
    return html`
      <div class="jb-header">
        ${this._containerTemplate('left')} ${this._containerTemplate('center')} ${this._containerTemplate('right')}
      </div>
    `;
  }

  _containerTemplate(type) {
    return html`
      <div class="jb-header__${type}-container">
        <slot name=${type}>
          ${this._itemTextTemplate(this[`${type}Text`], type)}
          ${this._itemIconTemplate(this[`${type}Icon`], type)}
        </slot>
      </div>
    `;
  }

  _itemIconTemplate(icon, type) {
    return icon
      ? html`<iron-icon
          class="jb-header__${type}-container__icon"
          icon=${icon}
          @click=${() => this._handleClick(`jb-header-icon-${type}-clicked`)}
          @keydown=${() => this._handleClick(`jb-header-icon-${type}-clicked`)}
        ></iron-icon>`
      : html``;
  }

  _itemTextTemplate(text, type) {
    return text
      ? html`<p class="jb-header__${type}-container__text"
          @click=${() => this._handleClick(`jb-header-text-${type}-clicked`)}
          @keydown=${() => this._handleClick(`jb-header-text-${type}-clicked`)}>${text}</p>`
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
