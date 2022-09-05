// import { useState, useEffect } from "react";
// // import { API_KEY, API_URL } from "./Slider";
// // import Movie from "./Movie";
// import getTrendMoviesPics from "../services/getTrendMoviesPics";

// const MoviesOfProviders = () => {

//     let moviesID = [];
//     let moviesData = [];

//     // const [moviesProviders, setmoviesProviders] = useState([])

//     useEffect(() => {
//         getTrendMoviesPics()
//         .then(data => {
//             if (data.results) {
//                 for (let i = 0; i < data.results.length; i++) {
//                     moviesID.push(data.results[i].id)
//                 }
//             }
//         })

//         console.log(moviesID)

//         // for (let i = 0; i < moviesID.length; i++) {
//         //     fetch(`${API_URL}/movie/${moviesID[i]}${API_KEY}&page=1`)
//         //     .then(async response => await response.json())
//         //     .then(dataa => {
//         //         if(dataa){
//         //             moviesData.push(dataa)  
//         //         }
//         //     })  

            
//         // }
//     }, []);

//     console.log(moviesData)

//     return(
//         <div className="movie-container">
//             {mainMovies.map(e => (
//             <Movie rate={e.vote_average} id={e.id} image={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt={e.original_title}></Movie>
//             ))}
//         </div>
//     )
// }


// export default MoviesOfProviders