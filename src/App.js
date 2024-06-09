import React, { useState, useEffect } from "react";
import MovieList from "@/components/MovieList/MovieList";
import MovieDetails from "@/components/MovieDetails/MovieDetails";
import "./index.css";
import "./App.css";
import posterMapping from "@/services/posterMapping";

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some((fav) => fav.episode_id === movie.episode_id)) {
      setFavorites(
        favorites.filter((fav) => fav.episode_id !== movie.episode_id)
      );
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  // Determine the poster image
  const posterImage = selectedMovie
    ? posterMapping[selectedMovie.episode_id]
    : null;

  return (
    <div
      className="App"
      style={{
        "--background-image": posterImage ? `url(${posterImage})` : "none",
      }}
    >
      <MovieDetails
        movie={selectedMovie}
        favorites={favorites}
        onFavoriteToggle={handleFavorite}
      />
      <MovieList onMovieSelect={handleMovieSelect} />
    </div>
  );
}

export default App;
