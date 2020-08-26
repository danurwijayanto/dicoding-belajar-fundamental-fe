class AppMainContentList extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        let div = '';

        let i = 0;
        let j = 2;
        this._movies.forEach(movie => {
            const fullImageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
            const movieDescription = (movie.overview).substring(0, 250) + ".... Read more";

            if (i % 3 === 0 || i == 0) div += "<div class='row'>";
            div += `
            <div class="col s12 m4 hoverable" id="${movie.id}">
                <div class="icon-block">
                    <div style="padding: 25px">
                        <img class="responsive-img" src="${fullImageUrl}" alt="Fan Art">  
                        <h5 class="center">${movie.name}</h5>
                        <p class="light">${movieDescription}</p>
                    </div>
                </div>
            </div>
            `;

            if (j == i || i === 2 || ((this._movies).length - 1) === i) {
                j += 3
                div += "</div>";

            }

            this.innerHTML = div;
            i++;
        });
    }
}

customElements.define("app-main-content-list", AppMainContentList);