const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('movie_id');
const apiKey = "SUA-KEY";

async function getMovieDetails(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`);
  return await response.json();
}

export default function renderMovieDetails(movie) {
  const movieDetailsHtml = showMovieDetails(movie);
  document.getElementById(
    "movie-details"
  ).innerHTML = `<div class="row">${movieDetailsHtml}</div>`;
}

function showMovieDetails(movie) {
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-description').textContent = movie.overview;
  document.getElementById('movie-poster').src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
}

getMovieDetails(movieId).then(movie => showMovieDetails(movie));
