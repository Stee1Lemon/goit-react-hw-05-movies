import { fetchMovieReviews } from 'api/apiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function showReviews() {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    showReviews();
  }, [movieId]);

  return (
    <section>
      <ul>
        {reviews.length < 1 ? (
          <li>
            <p>There were no reviews to find</p>
          </li>
        ) : (
          reviews?.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default Reviews;
