function MovieCard({ movie, onDetails }) {
  return (
    <div className="movie-card">
      {movie.image?.medium ? (
        <img src={movie.image.medium} alt={movie.name} />
      ) : (
        <div className="image-placeholder">No Image Available</div>
      )}

      <div className="movie-card-content">
        <h2>{movie.name}</h2>

        <p>Release Date: {movie.premiered || 'N/A'}</p>

        <p>Rating: {movie.rating?.average || 'N/A'}</p>

        <button onClick={onDetails}>See Details</button>
      </div>
    </div>
  );
}

export default MovieCard;
