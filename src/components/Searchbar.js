import { useEffect, useState } from "react"
// import search from "../services/Search"
import {useNavigate} from 'react-router-dom';


const SearchBar = () => {

    const [keyword , setKeyword] = useState()

    // useEffect(() => {
    // }, [])

    const handleOnChange = evt => {
        setKeyword(evt.target.value)
        // console.log(keyword)
    }

    const navigate = useNavigate();


    const handleOnSubmit = evt => {
        // evt.preventDefault()
        // console.log(keyword)
        // search(keyword).then(e => console.log(e))
        navigate(`/search/${keyword}`);
    }


    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input onChange={handleOnChange} type={"text"} value={keyword} ></input>
            </form>
        </>
    )
}

export default SearchBar