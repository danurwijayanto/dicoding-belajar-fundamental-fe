class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo center">
          <img src="./src/img/logo.svg" alt="The Movie Database (TMDb)" width="154" height="20">
        </a>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>`;
    }
}

customElements.define("app-bar", AppBar);