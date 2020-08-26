import "./components/app-main-content-list.js"
import "./components/app-main-content-search.js"

function main() {

    // Element
    const inputSearchElement = document.querySelector("#search");
    const detailFilmModalElement = document.querySelector("#detail-film-modal");

    const baseUrl = "https://api.themoviedb.org/3/";
    const apiKey = "?api_key=ab72e946e2982c87dddc81279ced2ea0"
    const imageUrl = "https://image.tmdb.org/t/p/w500"

    const searchMovieByName = (name) => {
        if (name == 0) {
            getPopularMovie();
            return;
        }

        const xhr = new XMLHttpRequest();
        //menetapkan callback jika response sukses dan error
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                homePageRenderSearch(responseJson.results);
            }
        }

        xhr.onerror = function() {
            showResponseMessage();
        }

        xhr.open("GET", `${baseUrl}search/tv${apiKey}&query=${name}`);

        xhr.send();
    }

    const homePageRenderSearch = (movies) => {
        const mainContent = document.getElementById("content");
        const mainContentSearchElement = document.createElement("app-main-content-search");
        mainContentSearchElement.movies = movies;

        if (mainContent.querySelector("app-main-content-search") == null) {
            mainContent.replaceChild(mainContentSearchElement, document.querySelector("app-main-content-list"));
        } else {
            mainContent.replaceChild(mainContentSearchElement, document.querySelector("app-main-content-search"));
        }


        const buttons = document.querySelectorAll(".hoverable");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                alert('hellow 2');
            })
        })
    }

    const getPopularMovie = () => {
        const xhr = new XMLHttpRequest();

        //menetapkan callback jika response sukses dan error
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                homePageRender(responseJson.results);
            }
        }

        xhr.onerror = function() {
            showResponseMessage();
        }


        xhr.open("GET", `${baseUrl}tv/popular${apiKey}`);

        xhr.send();
    };

    const homePageRender = (movies) => {
        const mainContent = document.getElementById("content");

        const mainContentListElement = document.createElement("app-main-content-list");
        mainContentListElement.movies = movies;

        if (mainContent.querySelector("app-main-content-list") == null) {
            mainContent.appendChild(mainContentListElement);
        } else if (mainContent.querySelector("app-main-content-search") == null) {
            mainContent.replaceChild(mainContentListElement, document.querySelector("app-main-content-list"));
        } else {
            mainContent.replaceChild(mainContentListElement, document.querySelector("app-main-content-search"));
        }

        // document.getElementById("content").appendChild(mainContentListElement);

        const buttons = document.querySelectorAll(".hoverable");

        buttons.forEach(button => {
            button.addEventListener("click", event => {
                // $('.detail-film-modal').modal('show');
                $('#detail-film-modal').modal('show');

                // alert('hellow');
                // const movieId = event.target.id;
                // removeBook(movieId);
            })
        })
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {

        inputSearchElement.addEventListener("keypress", function(e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                searchMovieByName(inputSearchElement.value);
            }
        });

        getPopularMovie();
    });
}

export default main;