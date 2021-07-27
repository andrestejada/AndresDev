import { GatsbyImage , getImage } from 'gatsby-plugin-image'
import React from 'react'
import './Cursos.scss'


const CursoCard = ({ nombre, fecha, escuela, img }) => {

  const picture = getImage(img.gatsbyImageData)
  
  return (
  <div className='card-container' >
      <GatsbyImage image={picture} className='img-cursos' alt={nombre} />
      <h3>{nombre}</h3>
      <p>Fecha de finalización:<span>{fecha}</span> </p>
      <p>Institución: <span>{escuela}</span></p>
      <a
        className='btn btn-primary'
        href={picture.images.fallback.src}
        target='_blank'
        rel='noreferrer'
      >Ver Certificado</a>
  </div>
  )
}

export default CursoCard
