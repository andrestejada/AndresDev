import React, { useState } from 'react'
import './ProgressBar.scss'
const ProgressBar = ({nombre,porcentaje,Icon,color}) => {
    const [style, setStyle] = useState({})

    setTimeout(()=>{
        setStyle({
            opacity: 1,
			width: `${porcentaje}%`
        })
    },1000)
    return (
        
        <>
        <section className='card-container text-center' >
                <Icon size='3em' color={color} />
                <h3>{nombre}</h3>
                <div className='progress' >
                     <div 
                        className='progress-done'
                        style={style}
                    >{`${porcentaje}%`}</div>  
                 </div>
        </section>
        </>
    )
}

export default ProgressBar
