import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@juanbeato/jb-button';
import style from './JbModal.scss';

export class JbModal extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {
      config: { type: Object },
      opened: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.config = {};
  }

  render() {
    return html`
      <div class="jb-modal-container">
        <div
          class="jb-modal-container__bg"
          @click=${this.close}
          @keydown=${this.close}
        ></div>
        <div class="jb-modal-container__data">
          <p class="jb-modal-container__data__title">${this.config.title}</p>
          <p class="jb-modal-container__data__description">
            ${this.config.description}
          </p>
          <div class="jb-modal-container__data__buttons">
            ${this._buttonTemplate(
              this.config.acceptBtnText,
              this.config.id,
              'primary'
            )}
            ${this._buttonTemplate(
              this.config.cancelBtnText,
              this.config.id,
              'secondary'
            )}
          </div>
        </div>
      </div>
    `;
  }

  _buttonTemplate(text, id, type) {
    return text
      ? html`<jb-button
          class="jb-modal-container__data__buttons__item"
          ?primary=${type === 'primary'}
          ?secondary=${type === 'secondary'}
          buttontext=${text}
          @click=${() => this._handleClick(id, type)}
        ></jb-button>`
      : html``;
  }

  open(config = {}) {
    if (Object.keys(config).length) {
      this.config = config;
    }
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  _handleClick(id, type) {
    this.dispatchEvent(
      new CustomEvent(`jb-modal-${id}-${type}-btn-clicked`, {
        bubbles: true,
        composed: true,
      })
    );
    this.close();
  }
}
