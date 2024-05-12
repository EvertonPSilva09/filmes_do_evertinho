let movieId = null;
if (typeof window !== "undefined") {
  const urlParams = new URLSearchParams(window.location.search);
  movieId = urlParams.get("movie_id");
}
const apiKey = "SUA-KEY";

async function getMovieDetails(movieId) {
  if (!movieId) return null;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`
  );
  return await response.json();
}

export default function renderMovieDetails(movie) {
  const movieDetailsHtml = showMovieDetails(movie);
  document.getElementById(
    "movie-details"
  ).innerHTML = `<div class="row">${movieDetailsHtml}</div>`;
}

function showMovieDetails(movie) {
  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById("movie-description").textContent = movie.overview;
  document.getElementById(
    "movie-poster"
  ).src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
}

async function getMoviesRecomendations(movieId) {
  if (!movieId) return null;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=pt-BR`
  );
  const data = await response.json();
  return data;
}

function fillRecomendationsDetails(movie_recomendation, index) {
  const cards = document.getElementsByClassName(
    "card movie-recomendation-card"
  );
  if (cards[index]) {
    const card = cards[index];
    const imageElement = card.querySelector(".movie-recomendation-image");
    const titleElement = card.querySelector(".movie-recomendation-title");
    const popularityElement = card.querySelector(
      ".movie-recomendation-popularity"
    );
    const releaseDateElement = card.querySelector(
      ".movie-recomendation-release-date"
    );

    if (imageElement) {
      imageElement.src = `https://image.tmdb.org/t/p/w500${movie_recomendation.poster_path}`;
    } else {
      console.log(`Image element not found in card ${index}`);
    }

    if (titleElement) {
      titleElement.textContent = movie_recomendation.title;
    } else {
      console.log(`Title element not found in card ${index}`);
    }

    if (popularityElement) {
      popularityElement.textContent =
        "Popularidade: " + movie_recomendation.popularity;
    } else {
      console.log(`Popularity element not found in card ${index}`);
    }

    if (releaseDateElement) {
      releaseDateElement.textContent =
        "Data de lançamento: " + movie_recomendation.release_date;
    } else {
      console.log(`Release date element not found in card ${index}`);
    }
  }
}

function handleMovieRecommendations(response) {
  const recommendations = response.results;
  recommendations.forEach((movie_recomendation, index) => {
    fillRecomendationsDetails(movie_recomendation, index);
  });
}

if (movieId) {
  getMoviesRecomendations(movieId).then(handleMovieRecommendations);
  getMovieDetails(movieId).then((movie) => showMovieDetails(movie));
}
