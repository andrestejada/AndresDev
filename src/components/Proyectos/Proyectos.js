import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import CardProyectos from './CardProyectos'
const ProyectosContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  padding: 1em;

  @media (max-width: 766px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const Proyectos = () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulProyectos {
        nodes {
          nombre
          descripcin {
            descripcin
          }
          url
          id
          preview {
            gatsbyImageData
          }
        }
      }
    }
  `)
  const data = query.allContentfulProyectos.nodes
  return (
    <ProyectosContainer>
           {
               data.map( (p)=>(
                   <CardProyectos
                        key={p.id}
                        nombre={p.nombre}
                        img={p.preview}
                        descripcion={p.descripcin.descripcin}
                        url={p.url}
                   />
               ))
           } 
    </ProyectosContainer>
  )
}

export default Proyectos
