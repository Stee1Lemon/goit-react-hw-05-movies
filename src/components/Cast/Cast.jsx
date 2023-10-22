import { fetchMovieCredits, fetchActorImage } from 'api/apiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastInfo } from './CastStyles';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [confLink, setConfLink] = useState([]);

  useEffect(() => {
    async function showCast() {
      try {
        const castData = await fetchMovieCredits(movieId);
        const confLinkData = await fetchActorImage();
        setCast(castData.cast);
        setConfLink(confLinkData);
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
              <img
                src={`${confLink?.base_url}w185${actor.profile_path}`}
                alt={actor.name}
              />
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
