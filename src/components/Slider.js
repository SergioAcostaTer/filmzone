import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import getTrendMoviesPics from "../services/getTrendMoviesPics";

const Slider = () => {
  const [trendMoviesData, setTrendMoviesData] = useState(false);

  const images = [];

  useEffect(() => {
    getTrendMoviesPics("day").then((result) => setTrendMoviesData(result));
  }, []);

  if (trendMoviesData) {
    for (let i = 0; i < 4; i++) {
      images.push({
        original:
          "https://image.tmdb.org/t/p/original" +
          trendMoviesData[i].backdrop_path,
      });
    }
  }

  return (
    <>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={8000}
        slideDuration={1000}
        autoPlay={false}
        showThumbnails={false}
        items={images}
      />
    </>
  );
};

export default Slider;
