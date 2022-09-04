import { useParams } from "react-router-dom"

import { useEffect, useState } from "react";
import Header from "../components/Header";
import search from "../services/Search";






const SearchResults = () => {

    const { query } = useParams();
    
    
    search(query).then(e => console.log(e))


    return(
        <>
            <Header></Header>
            <h1>{query}</h1>
        </>
    )
}

export default SearchResults