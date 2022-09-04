
const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "?api_key=c6b78e19f7ba833c205511b80032a27c"

export default function getTrendMoviesPics(){
    return fetch(`${API_URL}/trending/movie/day${API_KEY}`)
        .then(async response => await response.json())
        .then(data => {return data})
}