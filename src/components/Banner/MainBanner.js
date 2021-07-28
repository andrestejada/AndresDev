import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage ,getImage } from 'gatsby-plugin-image'


const MainBanner = () => {
        const data = useStaticQuery(graphql`
        query{
            allContentfulHome{
                nodes{
                        principalPicture{
                            gatsbyImageData
                }
            }
          }
        }         
        `)

        
        const img = getImage(data.allContentfulHome.nodes[0].principalPicture.gatsbyImageData)
    return (
        <div>
            <GatsbyImage image={img} alt='imagen-de-portada' />
        </div>
    )
}

export default MainBanner
