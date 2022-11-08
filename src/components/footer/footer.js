import React from 'react'
import {FaLinkedin, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'

import './footer.css'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>BLOG</h3>
                    <div className="social">
                        <a href='/'>
                        <FaLinkedin className='icon'/>
                        </a>
                        <a href='/'>
                        <FaTwitter className='icon' />
                        </a>
                        <a href='/'>
                        <FaYoutube className='icon' />
                        </a>
                        <a href='/'>
                        <FaInstagram className='icon' />
                        </a>
                    
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <a href='/'>
                            <li >About</li>
                            </a>
                            <a href=''>
                            <li>Partnerships</li>
                            </a>
                            <a href=''>
                            <li>Careers</li>
                            </a>
                            <a href=''>
                            <li>Advertising</li>
                            </a>
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
