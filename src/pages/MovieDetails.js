import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../services/getTrendMoviesPics";
import Header from "../components/Header";
import accessMovieData from "../services/accessMovieData";

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    accessMovieData(id).then((data) => setDetails(data));
  }, []);

  console.log(details);

  const date = details ? details.release_date : "";
  return (
    <>
      <Header></Header>

      <div className="global-container">
        <div className="film-container">
          <h1 className="title">{details.title}</h1>

          <div>
            <h2 className="subtitle">
              Titulo original: {details.original_title}
            </h2>
            <ul>
              <li>{details.original_title}</li>
              {/* <li>{details.tagline}</li> */}
              <li>{date}</li>
            </ul>
          </div>

          <div className="media">
            <div className="pictures">
              <img
                src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
              ></img>
              <img
                src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
