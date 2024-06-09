import React from "react";
import posterMapping from "@/services/posterMapping";

function MovieItem({ movie, onMovieSelect }) {
  const posterUrl = posterMapping[movie.episode_id];

  return (
    <div className="movie-item-wrapper" onClick={() => onMovieSelect(movie)}>
      <img src={posterUrl} alt={movie.title} />
      <p>{movie.title}</p>
    </div>
  );
}

export default MovieItem;
