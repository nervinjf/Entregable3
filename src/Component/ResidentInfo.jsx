import React from 'react';
import useFetch from '../Hooks/useFetch';
import axios from 'axios';
import ResidentItems from './ResidentItems';

const ResidentInfo = () => {
    const { location, setType, type, setLocation } = useFetch([])


    console.log(location)

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${type}`)
            .then(res => setLocation(res.data))

    }
    return (
        <>
            <div className='container-info'>
                <div className="move-input">
                   <input type="text" value={type} onChange={e => setType(e.target.value)} />
                <button onClick={searchType}>Search</button> 
                </div>
                <div className='move-info-data'>
                    <div className='move-data'>
                        <h4><b>Nombre:</b></h4>
                        <h3>{location.name}</h3>
                    </div>
                    <div className='move-data'>
                        <h4><b>Tipo:</b></h4>
                        <h3>{location.type}</h3>
                    </div>
                    <div className='move-data'>
                        <h4><b>Dimension:</b></h4>
                        <h3>{location.dimension}</h3>
                    </div>
                    <div className='move-data'>
                        <h4><b>Poblacion:</b></h4>
                        <h3>{location.residents?.length}</h3>
                    </div>
                </div>


            </div>
            <div className='container'>
                {
                    location.residents?.map(resident => (
                        <div>
                            <ResidentItems url={resident} key={resident} />
                        </div>


                    ))}
            </div>
        </>

    );
};

export default ResidentInfo;