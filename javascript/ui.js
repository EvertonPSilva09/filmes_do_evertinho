function createMovieCard(movie) {
  return `
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="card h-100">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="card-img-top">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title mb-auto" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${movie.title}</h5>
          <p class="card-text mb-auto">${movie.overview}</p>
          <p class="mt-auto"><small style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Data de lançamento: ${movie.release_date}</small></p>
          <p class="mt-auto"><small style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Classificação: ${movie.vote_average} / 10 (${movie.vote_count} votos)</small></p>
          <a class="btn btn-outline-success" href="../movie_detail/detail.html?movie_id=${movie.id}">Detalhes</a>
          </div>
      </div>
    </div>
  `;
}

export function renderMovies(movies, containerId) {
  const movieCards = movies.map(createMovieCard).join("");
  document.getElementById(
    containerId
  ).innerHTML = `<div class="row">${movieCards}</div>`;
}
