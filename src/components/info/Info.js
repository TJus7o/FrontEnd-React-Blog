import React from 'react'
import './Info.css'
import Image1 from '../../assets/logo.png'

function Info() {
    return (
        <div name='conj' className='info'>
            <div className="container">
                <div className="left">
                    <h2>Conheça a nossa empresa</h2>
                    <p>A Merkle é uma empresa líder na gestão da experiência do cliente orientada por dados (CXM), especializada na entrega de experiências únicas e personalizadas do cliente através de plataformas e dispositivos.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Image1} alt="/" style={{ marginRight: '1rem' }} />
                            </div>  
                        </div>
  
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">A MALTA DE LISBOA É QUE É FIXE</h4>
                        <p className="timer">AQUI NÃO HÁ FINOS!</p>
                        <p className="offers">IMPERIAL ONLY</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Info
