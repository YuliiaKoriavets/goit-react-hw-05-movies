import { Link } from 'react-router-dom';

export default function MoviesList({ movies, state }) {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${id}`} state={state}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
