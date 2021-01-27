import { html, css, LitElement, unsafeCSS } from 'lit-element';
import style from './JbLayout.scss';

export class JbLayout extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(style)}
      `,
    ];
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <div class="jb-layout">
        <div class="jb-layout__main">
          <slot name="main"></slot>
        </div>
        <div class="jb-layout__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
