


function showMovieDetails(movie) {
  return `
    <div class="card mb-3">
      <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" class="card-img-top" alt="${movie.title}">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.overview}</p>
        <p class="card-text"><small class="text-muted">Data de lançamento: ${movie.release_date}</small></p>
        <p class="card-text"><small class="text-muted">Classificação: ${movie.vote_average} / 10 (${movie.vote_count} votos)</small></p>
        <p class="card-text"><small class="text-muted">Idioma original: ${movie.original_language}</small></p>
        <p class="card-text"><small class="text-muted">Popularidade: ${movie.popularity}</small></p>
        <p class="card-text"><small class="text-muted">Elenco principal: ${movie.cast}</small></p>
      </div>
    </div>
  `;
}

export default function renderMovieDetails(movie) {
  const movieDetailsHtml = showMovieDetails(movie);
  document.getElementById(
    "movie-details"
  ).innerHTML = `<div class="row">${movieDetailsHtml}</div>`;
}
