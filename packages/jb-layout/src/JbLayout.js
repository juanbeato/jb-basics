import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
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
        <app-drawer-layout>
          <app-header-layout>
            <!-- <app-header class="jb-layout__header" 
              condenses 
              fixed 
              shadow 
              effects="blend-background resize-title waterfall" slot="header">
              <app-toolbar>
                <div condensed-title>
                  <div class="jb-layout__header__condensed-title">
                    <slot name="header-condensed-title">
                    </slot>
                  </div>
                </div>
              </app-toolbar>
              <app-toolbar>
                <div main-title>
                  <div class="jb-layout__header__main-title">
                    <slot name="header-main-title">
                    </slot>
                  </div>
                </div>
              </app-toolbar>
            </app-header> -->
            <div class="jb-layout__main">
              <slot name="main">
              </slot>
            </div>
            <div class="jb-layout__footer">
              <slot name="footer"></slot>
            </div>
          </app-header-layout>
        </app-drawer-layout>
      </div>
    `;
  }
}
