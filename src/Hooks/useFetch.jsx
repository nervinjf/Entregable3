import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react'

const useFetch = () => {

    const randomIndex = Math.floor(Math.random() * 16)

    const [ location, setLocation ] = useState({});
    const [ type, setType ] = useState("");

    useEffect(() =>{

        axios.get(`https://rickandmortyapi.com/api/location/${randomIndex}`)
        .then(res => setLocation(res.data))

    },[]);


    return { location, setType, type, setLocation }

}

export default useFetch;