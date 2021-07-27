import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from "gatsby"
import { FaInstagram , FaLinkedinIn ,FaGithub } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <nav>
            <div className='nav-container' >
                <div className='logo-container' >
                    <p>Andres Tejada</p>
                </div>
                    <TiThMenu 
                        size='1em'
                        className='burger-menu'
                        onClick={ ()=>setOpenMenu(!openMenu) } 
                    />                
                <div 
                    className='menu-container'
                    style={ openMenu ? {display:'block'}:null } 
                >
                    <ul className='menu-box' >
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/certificados' >Certificados</Link>
                        </li>
                        <li>
                            <Link to='/proyectos'>Proyectos</Link>
                        </li>
                        <li>
                            <Link to='/habilidades'>Habilidades</Link>
                        </li>
                    </ul>
                </div>
                
                <div className='social-container'>
                    <a href='https://github.com/andrestejada' target='_blank' rel="noreferrer" >
                        <FaGithub/>
                    </a>
                    <a href='https://www.linkedin.com/in/andres-tejada-017b78202/' target='_blank' rel="noreferrer" >
                        <FaLinkedinIn/>                    
                    </a>
                    <a href='https://www.instagram.com/andrestejada05/' target='_blank' rel="noreferrer" >
                        <FaInstagram/>
                    </a>
                    
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
