import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import BackLink from 'components/BackLink';
import { getMovieById } from 'services/api';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <section>
      <BackLink >Go back</BackLink>
      {movie && (
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2></h2>
            <p></p>
            <h3></h3>
            <p></p>
            <h4></h4>
            <p></p>
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
        </div>
      )}
    </section>
  );
}
