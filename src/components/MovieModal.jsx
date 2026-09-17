function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="movie-modal" onClick={event => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {movie.image?.original || movie.image?.medium ? (
          <img
            src={movie.image.original || movie.image.medium}
            alt={movie.name}
          />
        ) : (
          <div className="image-placeholder">No Image Available</div>
        )}

        <div className="modal-content">
          <h2>{movie.name}</h2>

          <p>Rating: {movie.rating?.average || 'N/A'}</p>

          <p>Release Date: {movie.premiered || 'N/A'}</p>

          <div
            dangerouslySetInnerHTML={{
              __html: movie.summary || 'No summary available.',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
