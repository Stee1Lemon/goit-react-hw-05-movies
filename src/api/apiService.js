const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTY1ZThjZmEzYTU5MTE3MTRlMTE2ZGZkNmVlNjIxNCIsInN1YiI6IjY1MzEwOGJiMTEwOGE4MDBhYzc1MzgyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Ls_rD1Q4gtKlbPSi-Ur5NHe_VHhKmw2WTzzKtH2Lzg',
  },
};

export async function fetchTrend() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
  const dataFilms = await response.json();
  return dataFilms;
}

export async function fetchMovieByName(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  const dataFilms = await response.json();
  return dataFilms;
}

export async function fetchMovieDetails(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  const dataFilm = await response.json();
  return dataFilm;
}

export async function fetchMovieCredits(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  const dataFilm = await response.json();
  return dataFilm;
}

export async function fetchMovieReviews(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
    options
  );
  const dataFilm = await response.json();
  return dataFilm;
}

export const getImage = (url, size) =>
  url
    ? `https://image.tmdb.org/t/p/w${size.toString()}${url}`
    : `https://placehold.jp/e6e7f4/242424/300x300.png?text=Image%20not%20found`;
