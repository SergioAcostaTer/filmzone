import { useState, useEffect } from "react";
import Movie from "./Movie";
import getTrendMoviesPics from "../services/getTrendMoviesPics";
import printLinks from "../services/getRentLinks";

const Movies = () => {
  const finalMovies = [];
  const [mainMovies, setMainMovies] = useState([]);

  useEffect(() => {
    getTrendMoviesPics("day").then((result) => setMainMovies(result));
    // mainMovies?.map(e=>{
    //     // getRentLinks(e.id).then(data => console.log(data))
    //     console.log(e)

    // })

    // getRentLinks(mainMovies).then(data => console.log(data.results.US.link))
  }, []);

  console.log(finalMovies);

  return (
    <div className="movie-container">
      {mainMovies?.slice(0, 50).map((e) => (
        <Movie
          key={e.id}
          rate={e.vote_average}
          id={e.id}
          image={`https://image.tmdb.org/t/p/original${e.poster_path}`}
          alt={e.original_title}
        ></Movie>
      ))}
    </div>
  );
};

export default Movies;
