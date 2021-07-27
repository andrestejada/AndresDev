import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const Layout = ({children}) => {
    return (
        <>
        <Helmet>            
            <title>Andres Eduardo Tejada</title>
        </Helmet>
        <Navbar/>
        {children }
        <Footer/>
        </>
    )
}

export default Layout
