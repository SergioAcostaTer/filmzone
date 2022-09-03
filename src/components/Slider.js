import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';

export const API_URL = "https://api.themoviedb.org/3"
export const API_KEY = "?api_key=c6b78e19f7ba833c205511b80032a27c"


const Slider = () => {

    const [trendMoviesData, setTrendMoviesData] = useState([])

    const images = []

    useEffect(() => {
        fetch(`${API_URL}/trending/movie/day${API_KEY}`)
        .then(async response => await response.json())
        .then(data => setTrendMoviesData(data))
    }, []);

    if (trendMoviesData.results){
        for (let i = 0; i < 4; i++) {
            // console.log(trendMoviesData.results[i].backdrop_path)
            images.push({
                original: 'https://image.tmdb.org/t/p/original'+trendMoviesData.results[i].backdrop_path,
            })
        }
    };
       
    return(
        <>
            <ImageGallery showFullscreenButton={false} slideInterval={10000} slideDuration={1000} autoPlay={true} showThumbnails={false} items={images} />
       </>
    )
}

export default Slider