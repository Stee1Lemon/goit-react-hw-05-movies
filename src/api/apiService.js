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

