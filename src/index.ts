import { APP_NAME } from './application/config/constants';
import { getNodeAttributes } from './utils/shadow-dom';
import { render, unmount, createRoot, Root } from './main';

class Application extends HTMLElement {
  private readonly root: Root;
  private readonly shadow: ShadowRoot;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.root = createRoot(this.shadowRoot as ShadowRoot);
    this.shadow = this.shadowRoot as ShadowRoot
  }

  static get observedAttributes() {
    return ['initial', 'title'];
  }

  render() {
    const config = getNodeAttributes(this);
    render(this.root, this.shadow, config);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  disconnectedCallback() {
    unmount(this.shadow);
  }
}

customElements.define(APP_NAME, Application);
