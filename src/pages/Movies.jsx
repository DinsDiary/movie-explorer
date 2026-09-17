import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError('');

      try {
        if (searchTerm.trim() === '') {
          const response = await fetch('https://api.tvmaze.com/shows');

          if (!response.ok) {
            throw new Error('Failed to fetch movies');
          }

          const data = await response.json();

          setMovies(data);
          return;
        }

        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${searchTerm}`,
        );

        if (!response.ok) {
          throw new Error('Search failed');
        }

        const data = await response.json();

        const searchResults = data.map(item => item.show);

        setMovies(searchResults);
      } catch (error) {
        setError('Something went wrong. Please try again.');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchTerm]);

  return (
    <main className="movies-page">
      <div className="movies-header">
        <h1>Explore Movies & TV Shows</h1>

        <p>Discover popular movies and TV shows from around the world.</p>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search for a movie or TV show..."
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />

        <button>Search</button>
      </div>
      <section className="movie-grid">
        {loading ? (
          <p>Loading movies...</p>
        ) : error ? (
          <p>{error}</p>
        ) : movies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDetails={() => setSelectedMovie(movie)}
            />
          ))
        )}
      </section>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </main>
  );
}

export default Movies;
