import { useState } from "react";
import MovieCard from "./MovieCard";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <h2>My Favorite Movies </h2>

      {favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onRemoveFavorite={removeFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      ) : (
        <p className="empty-message">No favorite movies added yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
