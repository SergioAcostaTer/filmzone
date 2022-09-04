import { useState } from "react";
import { Link } from "react-router-dom"


const Movie = (prop) => {

    const [isFocus, setIsFocus] = useState(false);

    return(
        <>
             
        
            <Link to={`/${prop.id}`} key={prop.id}>
                <div onMouseEnter={() => setIsFocus(true)} onMouseLeave={() => setIsFocus(false)} className={isFocus ? 'focus movie' : `notfocus movie`}>
                    <label className="label"><i class="bi bi-star-fill"></i><span className="rate">{prop.rate}</span><span className="smallrate">/10</span></label>
                    <img src={prop.image} alt={prop.alt}></img>
                </div>
            </Link>
           
  
        </>
    )
}

export default Movie