import { html, css, LitElement, unsafeCSS } from 'lit-element';
import {ifDefined} from 'lit-html/directives/if-defined';
import '@juanbeato/jb-button';
import style from './JbModal.scss';

export class JbModal extends LitElement {
  static get styles() {
    return [css`${unsafeCSS(style)}`];
  }

  static get properties() {
    return {
      config: { type: Object },
      opened: { 
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.config = {};
  }

  render() {
    return html`
      <div class="jb-modal-container">
        <div class="jb-modal-container__bg"
        @click=${this.close}></div>
        <div class="jb-modal-container__data">
          <p class="jb-modal-container__data__title">${this.config.title}</p>
          <p class="jb-modal-container__data__description">${this.config.description}</p>
          <div class="jb-modal-container__data__buttons">
            ${this._buttonTemplate(this.config.acceptBtnText, 'primary')}
            ${this._buttonTemplate(this.config.cancelBtnText, 'secondary')}
          </div>
        </div>
      </div>
    `;
  }

  _buttonTemplate(text, type) {
    return text 
      ? html`<jb-button
        class="jb-modal-container__data__buttons__item"
        ?primary=${type === 'primary'}
        ?secondary=${type === 'secondary'}
        buttontext=${text}
        @click=${() => this._handleClick(type)}></jb-button>`
      : html``
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  _handleClick(type) {
    this.dispatchEvent(
      new CustomEvent(`jb-modal-${type}-btn-clicked`, {
        bubbles: true,
        composed: true
      })
    );
    this.close();
  }
}
