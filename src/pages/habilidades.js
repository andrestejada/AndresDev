import React from 'react'
import styled from 'styled-components'
import  Layout  from '../components/Layout'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import {FaHtml5,FaCss3,FaJs,FaReact,FaBootstrap,FaSass,FaNodeJs} from 'react-icons/fa'
import {SiRedux , SiGatsby,SiFirebase} from 'react-icons/si'

const ProgressBarContainer = styled.div`
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
const habilidades = () => {
    return (
        <Layout>
            <h1>Habilidades</h1>
            <ProgressBarContainer>
                <ProgressBar
                    nombre='HTML'
                    porcentaje='80'
                    Icon={FaHtml5}
                    color='#dd4b25'
                />
                <ProgressBar
                    nombre='CSS'
                    porcentaje='82'
                    Icon={FaCss3}
                    color='#2862e9'
                />
                <ProgressBar
                    nombre='JavaScript'
                    porcentaje='70'
                    Icon={FaJs}
                    color='#efd81d'
                />
                <ProgressBar
                    nombre='React'
                    porcentaje='80'
                    Icon={FaReact}
                    color='#5ed3f3'
                />
                <ProgressBar
                    nombre='Redux'
                    porcentaje='75'
                    Icon={SiRedux}
                    color='#764abc'
                />
                <ProgressBar
                    nombre='Bootstrap'
                    porcentaje='72'
                    Icon={FaBootstrap}
                    color='#8552d0'
                />
                <ProgressBar
                    nombre='NodeJs'
                    porcentaje='56'
                    Icon={FaNodeJs}
                    color='#7fc728'
                />
                <ProgressBar
                    nombre='Scss'
                    porcentaje='56'
                    Icon={FaSass}
                    color='#c76395'
                />
                <ProgressBar
                    nombre='Gatsby'
                    porcentaje='70'
                    Icon={SiGatsby}
                    color='#633194'
                />
                <ProgressBar
                    nombre='Firebase'
                    porcentaje='70'
                    Icon={SiFirebase}
                    color='#f7be00'
                />
                
            </ProgressBarContainer>
        </Layout>
    )
}

export default habilidades
