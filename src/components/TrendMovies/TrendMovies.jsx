export const TrendMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        console.log(movie);
        return (
          <li key={movie.id}>
            {movie.name || movie.original_title || movie.original_name}
          </li>
        );
      })}
    </ul>
  );
};
