import React from 'react'
import Image1 from '../../assets/logo.png'
import { Link } from "react-router-dom";

import './info2.css'

function Info() {
    return (
        <div name='conj' className='info'>
            <div className="container">
                <div className="left">
                    <h2>Conheça a nossa empresa</h2>
                    <p>A Merkle é uma empresa líder na gestão da experiência do cliente orientada por dados (CXM), especializada na entrega de experiências únicas e personalizadas do cliente através de plataformas e dispositivos.</p>
                        <div className="box">
                            <div>
                                <a href='https://merkleinc.ch/en' >
                                <img src={Image1} alt="/" style={{ marginRight: '1rem' }} width='100%' />
                                </a>
                            </div>  
                        </div> 
                </div>
                
            </div>
        </div>
    )
}

export default Info
