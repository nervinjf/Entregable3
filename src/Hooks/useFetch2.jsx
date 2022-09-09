import React from 'react';
import axios from 'axios';
import React, { useEffect, useState} from 'react';

const useFetch2 = () => {

 const [ resident, setResident ] = useState({})
    useEffect(() =>{
        axios.get(`${url}`)
        .then(res => setResident(res.data))
    }, [])

    console.log(resident)

    return { resident }
};

export default useFetch2;
