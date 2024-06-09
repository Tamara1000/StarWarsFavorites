import React from "react";
import posterMapping from "@/services/posterMapping"; // Import the poster mapping

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
  if (!movie) return null;

  // Determine the poster image
  const posterImage = posterMapping[movie.episode_id];

  return (
    <div
      className="movie-details-wrapper"
      style={{
        backgroundImage: `url(${posterImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#333", // Fallback color
      }}
    >
      <h2>{movie.title}</h2>
      <button onClick={() => onFavoriteToggle(movie)}>
        {favorites.some((fav) => fav.episode_id === movie.episode_id)
          ? "Dislike"
          : "Like"}
      </button>
      <p>
        <strong>Episode:</strong> {movie.episode_id}
      </p>
    </div>
  );
}

export default MovieDetails;
