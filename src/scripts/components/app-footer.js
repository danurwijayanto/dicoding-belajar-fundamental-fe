class AppFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <div class="row">
              <div class="col s6">
                <h5 class="white-text">Created by : </h5>
                <p class="grey-text text-lighten-4">Danur Wijayanto</p>
              </div>
              <div class="col s6">
                <h5 class="white-text">Contact me : </h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">facebook</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">linkedin</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        <div class="footer-copyright">
            <div class="container">
                Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
        </div>
        `;
    }
}

customElements.define("app-footer", AppFooter);