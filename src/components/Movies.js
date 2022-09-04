import { useState, useEffect } from "react";
import Movie from "./Movie";
import getTrendMoviesPics from "../services/getTrendMoviesPics"

const Movies = () => {

    const [mainMovies, setMainMovies] = useState([])

    useEffect(() => {
        getTrendMoviesPics("day").then(result => setMainMovies(result))
    }, []);

    console.log(mainMovies)

    return(
        <div className="movie-container">
            {
            mainMovies.slice(0, 50).map(e => (
            <Movie key={e.id} rate={e.vote_average} id={e.id} image={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt={e.original_title}></Movie>
            ))
            }
        </div>
    )
}


export default Movies