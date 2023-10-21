import { fetchTrend } from 'api/apiService';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);

  useEffect(() => {
    async function fetchTrendFilms() {
      try {
        const data = await fetchTrend();
        const films = await data.results;
        setTrendFilms(films);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendFilms();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <MovieList movies={trendFilms} />
    </main>
  );
};

export default Home;
