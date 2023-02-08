import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchingMovies } from 'services/api';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    getSearchingMovies(query).then(response =>
      setMovies(response.data.results).catch(error => console.log(error))
    );
  }, [query]);

  const handleSubmitForm = event => {
    event.preventDefault();
    const value = event.target.elements.query.value;
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <section>
      <SearchBox onSubmit={handleSubmitForm} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </section>
  );
}
