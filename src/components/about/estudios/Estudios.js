import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import './Estudios.scss'

const Estudios = () => {
    return (
        <div>
            <h2>Estudios Destacados</h2>
            <div
                className='card-container'
            >
                <div className='study-box' >
                    <StaticImage src='../../../images/compensar-logo.jpg' alt='autonoma'/>
                    <div className='study-text'>
                        <h3>Fundación Univarsitaria Compensar</h3>
                        <p>Programa : <span>Ingenieria de Software</span></p>
                    </div>
                </div>
                <div className='study-box' >
                    <StaticImage src='../../../images/logo-autonoma.jpg' alt='autonoma'/>
                    <div className='study-text'>
                        <h3>Univeridad autonoma De Occidente</h3>
                        <p>Programa : <span>Tecnologo en gestión Emprearial</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Estudios
