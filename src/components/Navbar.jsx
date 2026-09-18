import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <h2>Movie Explorer</h2>
      </div>

      <div>
        <Link to="/">Home</Link>

        <Link to="/movies">Movies</Link>

        <Link to="/movies" className="nav-explore-button">
          Explore Movies
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
