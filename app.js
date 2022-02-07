class Kaunto extends HTMLElement {
  constructor() {
    super();
    const className = this.getAttribute("class");
    const count = this.getAttribute("to");

    const template = document.createElement("template");
    template.innerHTML = `<span class="${className}">${count}</span>`;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    let i = 0;
    const timer = setInterval(() => {
      ++i;
      if (i === parseInt(count)) clearInterval(timer);
      this.shadowRoot.children[0].innerText = i;
    }, 0.00001);
  }
}

window.customElements.define("kaunto-up", Kaunto);
