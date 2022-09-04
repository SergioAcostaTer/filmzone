import { useParams } from "react-router-dom"
import Header from "./Header";

import netflix from '../source/netflix.jpg'
import prime from '../source/primevideo.png'
import hbo from '../source/hbo.jpg'
import hulu from '../source/hulu.png'
import disney from '../source/disney.png'
import dazn from '../source/dazn.jpg'
import { useEffect, useState } from "react";





const ProviderDetail = () => {

    const { name } = useParams();
    const [pic, setPic] = useState();


    const providers = [
        {
            name: "Netflix",
            src: netflix,
            color: "red"
        },
        {
            name: "Amazon Prime",
            src: prime,
            color: "blue"
        },
        {
            name: "HBOMax",
            src: hbo,
            color: "purple"
        },
        {
            name: "Hulu",
            src: hulu,
            color: "cyan"
        },
        {
            name: "Disney Plus",
            src: disney,
            color: "black"
        },
        {
            name: "DAZN",
            src: dazn,
            color: "blue"
        },
    
    ]

    
    useEffect(() => {
        for (let i = 0; i < providers.length; i++) {
            if(name == providers[i].name){
                setPic(providers[i].src)
            }
        }
    
    }, []);

   

    return(
        <>
            <Header></Header>

            <section className="banner">
                <img src={pic}></img>
            </section>
            <h1>{name}</h1>
        </>
    )
}

export default ProviderDetail