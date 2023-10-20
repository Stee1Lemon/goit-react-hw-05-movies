import { fetchTrend } from 'api/apiService';
import { TrendMovies } from 'components/TrendMovies/TrendMovies';
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

  return <TrendMovies movies={trendFilms} />;
};

export default Home;
