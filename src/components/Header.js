import { Link } from "react-router-dom"
import SearchBar from "./Searchbar"



const Header = () => {

    return(
        <>
        <header className={"header"}>
            <SearchBar></SearchBar>
            
        </header>

            <ul className="menu">
                <Link to={"/"}><li>Movies</li></Link>
                <Link to={"/"}><li>TV Shows</li></Link>
                <Link to={"/"}><li>People</li></Link>
                <Link to={"/"}><li>News</li></Link>
            </ul>
        </>
        
    )
}

export default Header