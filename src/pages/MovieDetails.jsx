import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import BackLink from 'components/BackLink';
import { getMovieById } from 'services/api';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    try{
    getMovieById(Number(movieId)).then(response => {
      console.log(response.data)
    setMovie(response.data)});
  } catch (error) {
    console.log(error);
  }
  }, [movieId]);

  if (!movie) {
    return null
  }

  const backLinkHref = location.state?.from ?? '/'

  const {original_title, release_date, vote_average, overview, genres } = movie;

 const getGenresString = genres => {
  const genresArr =[]
  genres.map(genre => genresArr.push(genre.name))
  return genresArr.join(' ')
 }

 const releaseYear = release_date.slice(0, 4)

  return (
    <section>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {movie && (
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>{original_title} ({releaseYear})</h2>
            <p>User score:</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{getGenresString(genres)}</p>
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
