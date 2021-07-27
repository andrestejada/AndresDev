import React from 'react'
import { GatsbyImage , getImage } from 'gatsby-plugin-image'


const CardProyectos = ({ nombre, img, descripcion, url }) => {
    const picture = getImage(img.gatsbyImageData)
  return (
        <div className='card-container'>
            <GatsbyImage image={picture} className='img-cursos' alt={nombre}/>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            
            <a
                className='btn btn-primary'
                href={url}
                target='_blank'
                rel='noreferrer'
            >Ver Proyecto</a>
        </div>
  )
}

export default CardProyectos
