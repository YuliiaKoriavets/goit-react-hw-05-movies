import { NavLink, Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink key="home" to="/" end>
            Home
          </NavLink>
          <NavLink key="movies" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
