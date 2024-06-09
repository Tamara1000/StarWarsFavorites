import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const fetchMovies = async () => {
  const response = await api.get("films/");
  const movies = response.data.results;

  // Sort movies by episode_id
  movies.sort((a, b) => a.episode_id - b.episode_id);

  return movies;
};
