import { useState, useEffect } from "react";
// import { API_KEY, API_URL } from "./Slider";
import Movie from "./Movie";
import getTrendMoviesPics from "../services/getTrendMoviesPics";
import getProviders from "../services/getProviders";

const MoviesOfProviders = () => {
  const [moviesProviders, setMoviesProviders] = useState([]);

  useEffect(() => {
    getTrendMoviesPics("day").then((data) => setMoviesProviders(data));
  }, []);

  // console.log(moviesProviders)

  // const filtered = moviesProviders.filter(([key, value]) => value === 'string');

  return (
    <div className="movie-container">
      {moviesProviders.slice(0, 50).map((e) => (
        <Movie
          rate={e.vote_average}
          id={e.id}
          image={`https://image.tmdb.org/t/p/original${e.poster_path}`}
          alt={e.original_title}
        ></Movie>
      ))}
    </div>
  );
};

export default MoviesOfProviders;
