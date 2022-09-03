


const Panel = (prop) => {

    
    return(
        <>
            
            <li className='listPanels-li' key={prop.id}>
                <a>
                    <div className='panel'>
                        <img src={prop.image} alt={prop.alt}></img>
                    </div>
                </a>
            </li>
           
        </>
    )
}

export default Panel  