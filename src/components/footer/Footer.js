import React from 'react'
import './Footer.css'
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram   } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>BLOG</h3>
                    <div className="social">
                        <FaLinkedin className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaInstagram className='icon' />
                    
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>                       
                            <li>Policy</li>
                            <li>Privacy</li>   
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
