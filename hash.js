import { Switch } from "./index.js";

export class HashSwitch extends Switch {
  constructor() {
    super();
    this.handleHashChange = this.handleHashChange.bind(this);
    this.handleHashChange();
  }

  handleHashChange() {
    const path = location.hash.slice(1);
    this.updateMatch(path);
  }

  connectedCallback() {
    window.addEventListener("hashchange", this.handleHashChange);
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this.handleHashChange);
  }
}

if (window.customElements.get("hash-switch") == null) {
  window.HashSwitch = HashSwitch;
  window.customElements.define("hash-switch", HashSwitch);
}
