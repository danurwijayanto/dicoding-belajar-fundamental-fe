import "./components/app-main-content-list.js"

function main() {
    // Element
    const inputSearchElement = document.querySelector("#search");

    const baseUrl = "https://api.themoviedb.org/3/";
    const apiKey = "?api_key=ab72e946e2982c87dddc81279ced2ea0"
    const imageUrl = "https://image.tmdb.org/t/p/w500"

    const searchMovieByName = (name) => {
        alert('fungsi');
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
        const mainContentListElement = document.createElement("app-main-content-list");
        mainContentListElement.movies = movies;

        document.getElementById("content").appendChild(mainContentListElement);
        // const listMovieElement = document.querySelector("#movie-list");
        // listMovieElement.innerHTML = "";

        // movies.forEach(movie => {
        //     const fullImageUrl = imageUrl + movie.poster_path;
        //     const movieDescription = (movie.overview).substring(0, 250) + ".... Read more";
        //     listMovieElement.innerHTML += `
        //     <div class="col s4 m4">
        //     <div class="icon-block">
        //     <img class="responsive-img" src="${fullImageUrl}" alt="Fan Art">  
        //                 <h5 class="center">${movie.name}</h5>

        //                 <p class="light">${movieDescription}</p>
        //             </div>
        //         </div>
        //     `;
        // });

        const buttons = document.querySelectorAll(".hoverable");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                alert('hellow');
                // const movieId = event.target.id;
                // removeBook(movieId);
            })
        })
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {

        // const inputBookId = document.querySelector("#inputBookId");
        // const inputBookTitle = document.querySelector("#inputBookTitle");
        // const inputBookAuthor = document.querySelector("#inputBookAuthor");
        // const buttonSave = document.querySelector("#buttonSave");
        // const buttonUpdate = document.querySelector("#buttonUpdate");

        // buttonSave.addEventListener("click", function () {
        //     const book = {
        //         id: Number.parseInt(inputBookId.value),
        //         title: inputBookTitle.value,
        //         author: inputBookAuthor.value
        //     };
        //     insertBook(book)
        // });

        // buttonUpdate.addEventListener("click", function () {
        //     const book = {
        //         id: Number.parseInt(inputBookId.value),
        //         title: inputBookTitle.value,
        //         author: inputBookAuthor.value
        //     };

        //     updateBook(book)
        // });
        getPopularMovie();
    });

    inputSearchElement.addEventListener("keypress", function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            searchMovieByName(inputSearchElement.value);
        }
    });
}

export default main;