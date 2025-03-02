import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, onAddFavorite, onRemoveFavorite, isFavorite }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p><b>Genre:</b> {movie.Genre || "N/A"}</p>
      <p><b>IMDB Rating:</b> {movie.imdbRating || "N/A"}</p>

      {isFavorite ? (
        <button className="remove-btn" onClick={() => onRemoveFavorite(movie.imdbID)}>
          Remove from Favorites ❌
        </button>
      ) : (
        <button onClick={() => onAddFavorite(movie)}>
          Add to Favorites ⭐
        </button>
      )}

      <button onClick={() => navigate(`/details/${movie.imdbID}`)}>
        View Details 📽️
      </button>
    </div>
  );
};

export default MovieCard;
