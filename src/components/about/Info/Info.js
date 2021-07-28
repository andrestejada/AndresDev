import React from 'react'
import './Info.scss';
import {FaGithub , FaPhone,FaMapMarkerAlt ,FaEnvelope,FaInstagram ,FaLinkedin } from 'react-icons/fa'
import { useStaticQuery ,graphql} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Pasatiempos from '../../Pasatiempos/Pasatiempos';

const Info = () => {
    const query = useStaticQuery(graphql`
    query {
        contentfulAboutme {
          nombre
          fotoDePerfil {
            gatsbyImageData
          }
        }
      }
    `);

    const data = query.contentfulAboutme
    const image = getImage(data.fotoDePerfil.gatsbyImageData)
    return (
        <div className='info-container' >
            <h2>Informacion Personal</h2>
            <div className='info-box'>
                <div className='img-container' >
                    <GatsbyImage image={image} alt='foto-de-perfil' className='info-img'/>
                </div>
                <h3>{data.nombre}</h3>
                <div className='info-section' >
                    <FaEnvelope/>
                    <p>aneduardotejada@gmail.com </p>
                </div>
                <div className='info-section' >
                    <FaPhone/>
                    <p>{'(+57) 316 532 7601'}</p>
                </div>
                <div className='info-section' >
                    <FaMapMarkerAlt/>
                    <p>Cali, Colombia</p>
                </div>
            <div className='social-media-box' >
                <div> <a href='https://github.com/andrestejada' target='_blank'rel="noreferrer"> <FaGithub/></a> </div>
                <div> <a href='https://www.instagram.com/andrestejada05/' target='_blank'rel="noreferrer" > <FaInstagram/></a> </div>
                <div> <a href='https://www.linkedin.com/in/andres-tejada-017b78202/'target='_blank'rel="noreferrer" > <FaLinkedin/> </a></div>
            </div>
            </div>
            <Pasatiempos/>
        </div>
    )
}

export default Info
