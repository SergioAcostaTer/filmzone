import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { API_KEY, API_URL } from "./Slider";


const MovieDetails = () =>{
    const [details, setDetails] = useState([])
    const {id} = useParams()


    useEffect(() => {
        fetch(`${API_URL}/movie/${id}${API_KEY}`)
        .then(async response => await response.json())
        .then(data => {setDetails(data)})

    }, []);

    console.log(details)
    
    return (
        <>
            <Header></Header>
            <h1>{details.original_title}</h1>
            <h2>{details.vote_average}/10</h2>

        </>
    )
}

export default MovieDetails