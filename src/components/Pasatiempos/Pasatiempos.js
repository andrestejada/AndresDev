import React from 'react'
import {MdDirectionsBike,MdLocalMovies,} from 'react-icons/md'
import {GiCook,GiCommercialAirplane} from 'react-icons/gi'

const Pasatiempos = () => {
    return (
        <div>
            <h2>Mis Pasatiempos</h2>
            <div className='card-container pasatiempos'>
                <p><MdDirectionsBike/> Montar Bicicleta </p>
                <p> <GiCook/> Cocinar</p>
                <p><MdLocalMovies/> Ver series y peliculas</p>
                <p><GiCommercialAirplane/> Viajar</p>
            </div>
        </div>
    )
}

export default Pasatiempos
