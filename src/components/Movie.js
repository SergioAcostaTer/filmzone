



const Movie = (prop) => {

    
    return(
        <>
             
            
                <div className='movie'>
                    <img src={prop.image} alt={prop.alt}>
                    </img>
                </div>
           
  
        </>
    )
}

export default Movie