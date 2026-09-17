import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO MOVIE EXPLORER</p>

        <h1>Discover Your Next Favorite Show</h1>

        <p className="hero-description">
          Explore movies and TV shows, discover new stories, and find something
          great to watch.
        </p>
        <Link to="/movies" className="hero-button">
          Explore Movies
        </Link>
      </div>
    </section>
  );
}

export default Hero;
