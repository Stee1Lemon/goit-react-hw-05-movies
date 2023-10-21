import { fetchMovieDetails, fetchPoster } from 'api/apiService';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [moviePoster, setMoviePoster] = useState('');

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        const moviePoster = await fetchPoster(movieDetails.poster_path);
        setMoviePoster(moviePoster);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <main>
      <section>
        <div>
          <img src={moviePoster} alt="" />
          <h2>{movie?.title}</h2>
          <p>User score: {parseFloat(movie?.vote_average).toFixed(1)}</p>
          <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie?.genres?.map(genre => {
              return `${genre.name} `;
            })}
          </p>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
