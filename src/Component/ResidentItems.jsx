import axios from 'axios';
import React, { useEffect, useState} from 'react';

const ResidentItems = ({ url }) => {

    const [ characters, setCharacters ] = useState({})
    const [ led, setLed ] = useState(".")

    useEffect(() =>{
        axios.get(`${url}`)
        .then(res => setCharacters(res.data))
    }, [])

    console.log(characters)

    return (
        <div>
            <div className='container-character'>
            <div className="container-img">
            <img src={characters.image} alt="" />
            <p><span className='hola'><i class="fa-solid fa-circle" style={{color: characters.status === "Alive" ? " chartreuse" : characters.status === "Dead" ? "red" : "gray"}}></i></span> {characters.status}</p>
            </div>   
            <div className='move-info-character'>
            <h2>{characters.name}</h2>
            <h4><span>RAZA:</span></h4>
            <h3>{characters.species}</h3>
            <h4><span>ORIGEN:</span> </h4>
            <h3>{characters.origin?.name}</h3>
            <h4><span>APARICION EN EPISODIOS:</span></h4>
            <h3>{characters.episode?.length}</h3>
            </div>
            </div>
        </div>
    );
};
export default ResidentItems;