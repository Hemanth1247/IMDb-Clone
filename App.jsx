import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FavoritesPage from "./FavoritesPage";
import MovieDetails from "./MovieDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
