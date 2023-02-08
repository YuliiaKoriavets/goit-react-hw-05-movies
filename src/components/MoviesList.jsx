import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
