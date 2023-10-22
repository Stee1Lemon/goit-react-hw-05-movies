import { fetchMovieByName } from 'api/apiService';
import { MovieList } from '../MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from './SearchMovieStyles';

export const SearchMovie = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function showList() {
      try {
        const data = await fetchMovieByName(query);
        const dataResult = await data.results;
        setSearchMovies(dataResult);
      } catch (error) {
        console.log(error.message);
      }
    }
    showList();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.query.value;
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Find movie</button>
      </SearchForm>
      {searchMovies && <MovieList movies={searchMovies} />}
    </>
  );
};
