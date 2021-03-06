import { useStaticQuery ,graphql} from 'gatsby'
import React from 'react'
import Estudios from '../estudios/Estudios';
import './AboutMe.scss'

const AboutMe = () => {
    const query = useStaticQuery(graphql`
    query {
        allContentfulAboutme {
          nodes {
            aboutMe {
              aboutMe
            }
          }
        }
      }      
    `);
    
    return (
        <div className='about-container' >
            <h2>Acerca de mi</h2>
            <div className='about-box' >
                <p>{query.allContentfulAboutme.nodes[0].aboutMe.aboutMe}</p>
            </div>
            <Estudios/>
        </div>
    )
}

export default AboutMe
