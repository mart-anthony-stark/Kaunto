class Kaunto extends HTMLElement {
  constructor() {
    super();
    const className = this.getAttribute("class");
    const tag = this.getAttribute("tag");

    const template = document.createElement("template");
    template.innerHTML = ``;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
