import { fetchMovieDetails, fetchPoster } from 'api/apiService';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        const moviePoster = await fetchPoster(movieDetails.poster_path);
        setMovie(movieDetails);
        console.log(moviePoster);
        console.log(movieDetails);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <main>
      <div>
        <img src="" alt="" />
        <h2></h2>
        <p>User score: </p>
        <h3>Overview</h3>
        <p></p>
        <h3>Genres</h3>
        <p></p>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
