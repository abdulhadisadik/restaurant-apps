class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
        <p>Abdul Hadi Sadik | 2023</p>
        </footer>          
          `;
  }
}

customElements.define("footer-bar", FooterBar);
