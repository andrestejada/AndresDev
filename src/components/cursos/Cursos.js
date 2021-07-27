import React from 'react'
import { useStaticQuery ,graphql } from 'gatsby'
import CursoCard from './CursoCard'
import styled from 'styled-components'
const CursosContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1em;
    padding: 1em;

    @media (max-width:766px){
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width:400px){
        grid-template-columns: repeat(1,1fr);
    }
`

const Cursos = () => {
    const query = useStaticQuery(graphql`
    query{
        allContentfulCertificados{
            nodes{
                nombre      
                escuela
                fechaFinalizacion
                fotoCertificado{
                gatsbyImageData
          }
        }
      }
    }
    `)
    
    const data =query.allContentfulCertificados.nodes
    return (
        <CursosContainer>
            {
                data.map( c=>(
                    <CursoCard
                        nombre={c.nombre}
                        fecha={c.fechaFinalizacion}
                        escuela={c.escuela}
                        img={c.fotoCertificado}
                    />
                ))
            }
        </CursosContainer>
    )
}

export default Cursos
