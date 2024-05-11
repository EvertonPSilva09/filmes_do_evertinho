const apiKey = "SUA-KEY";

async function fetchMovies(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return console.error("Erro:", error);
  }
}

export function searchMovies(query, language) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${encodeURIComponent(
    query
  )}`;
  return fetchMovies(url);
}

export function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;
  return fetchMovies(url);
}
