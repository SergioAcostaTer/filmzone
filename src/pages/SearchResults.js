import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import search from "../services/Search";
import Movie from "../components/Movie";

import { Button } from "@mui/material";

const SearchResults = () => {
  const [results, setResults] = useState([]);

  const { query } = useParams();

  useEffect(() => {
    search(query).then((e) => {
      // setResults(undefined)
      console.log(e);
      e.sort((a, b) => a.vote_counter - b.vote_counter);
      // e.filter((e) => e.vote_counter > 2)
      setResults(e);
    });
  }, [query]);

  console.log(results, query);

  return (
    <>
      <Header></Header>
      <div className="movie-container">
        {results ? (
          results
            .slice(0, 20)
            .map((e) => (
              <Movie
                key={e.id}
                rate={e.vote_average}
                id={e.id}
                image={`https://image.tmdb.org/t/p/original${e.poster_path}`}
                alt={e.original_title}
              ></Movie>
            ))
        ) : (
          <Button size="large" loading variant="outlined"></Button>
        )}
      </div>
    </>
  );
};

export default SearchResults;
