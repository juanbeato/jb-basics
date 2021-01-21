import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import style from './JbDropdown.scss';

export class JbDropdown extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      openIcon: { type: String },
      closeIcon: { type: String },
      label: { type: String },
      dropdownLabel: { type: String },
      options: { type: Array },
      selected: { type: Number },
      opened: { type: Boolean },
      clickEvent: { type: String },
    };
  }

  constructor() {
    super();
    this.dropdownLabel = '';
    this.label = '';
    this.closeIcon = 'expand-less';
    this.openIcon = 'expand-more';
    this.clickEvent = 'jb-dropdown-item-selected';
  }

  render() {
    return html`
      ${this.constructor._labelTemplate(this.label)}
      <div class="jb-dropdown__container">
        <div
          class="jb-dropdown__container__btn"
          @click=${this._toggleList}
          @keydown=${this._toggleList}
        >
          <p class="jb-dropdown__container__btn__text">
            ${this._getDropdownLabel()}
          </p>
          <iron-icon
            class="jb-dropdown__container__btn__icon"
            icon=${this.opened ? this.closeIcon : this.openIcon}
          ></iron-icon>
        </div>
        <div class="jb-dropdown__container__list" ?hidden=${!this.opened}>
          ${this.options &&
          this.options.map(
            (item, index) =>
              html`${this._listItemTemplate(
                item,
                index,
                index === this.selected
              )}`
          )}
        </div>
      </div>
    `;
  }

  static _labelTemplate(label) {
    return label ? html`<p class="jb-dropdown__label">${label}</p>` : html``;
  }

  _getDropdownLabel() {
    return this.options &&
      this.options.length &&
      (this.selected || this.selected === 0) &&
      this.options[this.selected]
      ? this.options[this.selected].text
      : this.dropdownLabel;
  }

  _listItemTemplate(item, index, selected) {
    return html`<div
      class="jb-dropdown__container__list__item 
      ${selected ? 'selected' : ''}"
      @click=${() => this._updateSelected(item, index)}
      @keydown=${() => this._updateSelected(item, index)}
      ?selected=${selected}
    >
      ${item.text}
    </div>`;
  }

  _toggleList() {
    this.opened = !this.opened;
  }

  _updateSelected(item, index) {
    this.selected = index;
    this._toggleList();
    this._handleClick(item, index);
  }

  _handleClick(item, index) {
    this.selected = index;
    this.dispatchEvent(
      new CustomEvent(this.clickEvent, {
        bubbles: true,
        composed: true,
        detail: {
          item,
          index,
        },
      })
    );
  }
}
