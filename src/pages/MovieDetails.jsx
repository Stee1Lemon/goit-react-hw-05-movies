import { fetchMovieDetails, getImage } from 'api/apiService';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { AdditionalInfo, MovieInfo } from './MovieDetailsStyles';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
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
        <Link to={locationRef.current.state?.from ?? '/'}>
          <button type="button">Go back</button>
        </Link>
        {movie && (
          <MovieInfo>
            <img src={getImage(movie.poster_path, 300)} alt="" />
            <div>
              <h2>{movie.title}</h2>
              <p>User score: {parseFloat(movie.vote_average).toFixed(1)}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>
                {movie.genres.map(genre => {
                  return `${genre.name} `;
                })}
              </p>
            </div>
          </MovieInfo>
        )}

        <AdditionalInfo>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </AdditionalInfo>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
