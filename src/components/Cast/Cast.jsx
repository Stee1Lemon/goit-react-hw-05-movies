import { fetchMovieCredits, getImage } from 'api/apiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastInfo } from './CastStyles';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function showCast() {
      try {
        const castData = await fetchMovieCredits(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    showCast();
  }, [movieId]);

  return (
    <section>
      <ul>
        {cast?.map(actor => {
          return (
            <CastInfo key={actor.id}>
              <img src={getImage(actor.profile_path, 185)} alt={actor.name} />
              <div>
                <p>{actor.name}</p>
                <p>Character: {actor.character} </p>
              </div>
            </CastInfo>
          );
        })}
      </ul>
    </section>
  );
};

export default Cast;
