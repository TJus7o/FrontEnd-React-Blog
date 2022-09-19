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
                        <a href='https://www.linkedin.com/company/merkle-dach/mycompany/'>
                        <FaLinkedin className='icon'/>
                        </a>
                        <a href='https://twitter.com/MerkleDACH'>
                        <FaTwitter className='icon' />
                        </a>
                        <a href='https://www.youtube.com/c/MerkleDACH'>
                        <FaYoutube className='icon' />
                        </a>
                        <a href='https://www.instagram.com/merkledach/'>
                        <FaInstagram className='icon' />
                        </a>
                    
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <a href='https://merkleinc.ch/en'>
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
