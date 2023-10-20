import { fetchMovieByName } from 'api/apiService';
import { MovieList } from '../MovieList/MovieList';
import { useState } from 'react';

export const SearchMovie = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const findMovie = e => {
    e.preventDefault();
    async function showList() {
      try {
        const data = await fetchMovieByName(inputValue);
        const dataResult = await data.results;
        setSearchMovies(dataResult);
        setInputValue('');
      } catch (error) {
        console.log(error.message);
      }
    }
    showList();
  };

  return (
    <>
      <form onSubmit={findMovie}>
        <input
          type="text"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit">Find movie</button>
      </form>
      {searchMovies && <MovieList movies={searchMovies} />}
    </>
  );
};
