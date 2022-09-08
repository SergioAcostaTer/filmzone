import { useEffect, useState } from "react";
// import search from "../services/Search"
import { useNavigate } from "react-router-dom";
import getSearchPreview from "../services/getSearchPreview";

const SearchBar = () => {
  const [keyword, setKeyword] = useState();

  const handleOnChange = (evt) => {
    setKeyword(evt.target.value);
    // console.log(keyword)
    if (keyword) {
      getSearchPreview(keyword).then((data) => console.log(data));
    }
  };

  const navigate = useNavigate();

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    // console.log(keyword)
    // search(keyword).then(e => console.log(e))

    // evt.target.value = "undefined" ? "" : navigate(`/search/${keyword}`);

    navigate(`/search/${keyword}`);
  };

  return (
    <>
      <form className="searchform" onSubmit={handleOnSubmit}>
        <input
          className="searchbar"
          onChange={handleOnChange}
          type={"text"}
          value={keyword}
        ></input>
        <button className="button">
          <i class="bi bi-search"></i>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
