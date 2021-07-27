import * as React from "react"
import Layout from '../components/Layout'
import Cursos from '../components/cursos/Cursos'

const certificados = () => {
    return (
        <Layout>
            <h1>Hechale un vistado a mis certificados</h1>
            
            <Cursos/>
        </Layout>
    )
}

export default certificados
