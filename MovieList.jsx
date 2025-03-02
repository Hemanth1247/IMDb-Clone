import { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = ({ onAddFavorite }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMovies = async () => {
    try {
      const API_KEY = "e7d5fd45";
      const response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={fetchMovies}>Search</button>

      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} onAddFavorite={onAddFavorite} />
          ))
        ) : (
          <p>No movies found. Try a different search!</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
