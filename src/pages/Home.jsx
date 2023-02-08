import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState();

  useEffect(() => {
    getTrendingMovies().then(response =>
      setTrendingMovies(response.data.results)
    );
  }, []);

  // getTrendingMovies().then(response => console.log(response.data.results))

  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies &&
          trendingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link>{title}</Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
