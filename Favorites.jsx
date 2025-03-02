import MovieCard from "./MovieCard";

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorite Movies</h2>
      <div className="movies-grid">
        {favorites.length > 0 ? (
          favorites.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
