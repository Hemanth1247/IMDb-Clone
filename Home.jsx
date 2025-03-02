import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const Home = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [randomMovies, setRandomMovies] = useState([]);
  const navigate = useNavigate();

  const addFavorite = (movie) => {
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  useEffect(() => {
    const fetchRandomMovies = async () => {
      const movieTitles = [
        "Inception",
        "Interstellar",
        "The Dark Knight",
        "The Matrix",
        "Titanic",
        "Avengers",
        "Gladiator",
        "The Godfather",
        "Forrest Gump",
        "Pulp Fiction"
      ];

      const API_KEY = "e7d5fd45";
      const requests = movieTitles.map((title) =>
        axios.get(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
      );

      try {
        const responses = await Promise.all(requests);
        const validMovies = responses
          .map((res) => res.data)
          .filter((movie) => movie && movie.Response !== "False"); // Exclude invalid responses

        setRandomMovies(validMovies);
      } catch (error) {
        console.error("Error fetching random movies:", error);
      }
    };

    fetchRandomMovies();
  }, []);

  return (
    <div className="home-container">
      {/* Header */}
      <div className="header">
        <h1 className="app-title">Binge Pick</h1>
        <button className="favorites-btn" onClick={() => navigate("/favorites")}>
          Favorites
        </button>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <h2>Find Your Next Favorite Movie</h2>
        <MovieList onAddFavorite={addFavorite} />
      </div>

      {/* Random Movies Grid */}
      <h2 className="popular-title">Popular Picks</h2>
      <div className="movies-grid">
        {randomMovies.length > 0 ? (
          randomMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} onAddFavorite={addFavorite} />
          ))
        ) : (
          <p className="no-movies-message">Hello There!.</p>
        )}
      </div>

      {/* Quote at the bottom */}
      <p className="binge-quote">Ready, Set, Binge!</p>
    </div>
  );
};

export default Home;
