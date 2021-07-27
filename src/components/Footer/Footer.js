import React from 'react'
import './Footer.scss'

const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <footer>
            <div className='footer-container' >
                <p>Andrés Eduado Tejada | Todos los derecho reservados  &copy; {year}</p>
            </div>
        </footer>
    )
}

export default Footer
