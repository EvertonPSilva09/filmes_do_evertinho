import { searchMovies, getPopularMovies } from "./javascript/api.js";
import { renderMovies, renderCarousel } from "./javascript/ui.js";

document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.getElementById("search-input").value;
  const language = document.getElementById("language-select").value;
  searchMovies(query, language).then((movies) =>
    renderMovies(movies, "movies")
  );
});

getPopularMovies().then((movies) => {
  renderMovies(movies, "movies");
  renderCarousel(movies.slice(0, 5), "#movie-carousel .carousel-inner");
});
