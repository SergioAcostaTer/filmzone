import Panel from "./Panel"

import netflix from '../source/netflix.jpg'
import prime from '../source/primevideo.png'
import hbo from '../source/hbo.jpg'
import hulu from '../source/hulu.png'
import disney from '../source/disney.png'
import dazn from '../source/dazn.jpg'



const Panels = (prop) => {

    const providers = [
        {
            name: "Netflix",
            src: netflix
        },
        {
            name: "Amazon Prime",
            src: prime
        },
        {
            name: "HBOMax",
            src: hbo
        },
        {
            name: "Hulu",
            src: hulu
        },
        {
            name: "Disney Plus",
            src: disney
        },
        {
            name: "DAZN",
            src: dazn
        },
    
    ]
    
       
    return(
        <>
            <div className='panels'>
                <ul className='listPanels'>
                    {providers.map(provider => (
                        <Panel image={provider.src} alt={provider.name} id={provider.name}></Panel>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Panels