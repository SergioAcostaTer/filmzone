import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./Slider";
import Movie from "./Movie";

const Movies = () => {

    const [mainMovies, setMainMovies] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/trending/movie/week${API_KEY}&page=1`)
        .then(async response => await response.json())
        .then(data => {setMainMovies(data.results)})


        
    }, []);

    console.log(mainMovies)

    return(
        <div className="movie-container">
            {mainMovies.map(e => (
            <Movie image={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt={e.original_title}></Movie>
            ))}
        </div>
    )
}


export default Movies