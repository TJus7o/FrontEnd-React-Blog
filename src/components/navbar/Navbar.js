import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom";



import './Navbar.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>BLOG</h2>
            </div>
            <ul className="nav-menu">
                <Link to='/' smooth={true} duration={500} ><li>Home</li></Link>
                <a href='https://merkleinc.ch/en' ><li>About</li></a>
            </ul>
                <div><button>Subscribe</button></div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='/' smooth={true} duration={500} ><li>Home</li></Link>
                <a href='https://merkleinc.ch/en' ><li>About</li></a>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                   
                    </div>
                    <div className="social-icons">
                        <a href='https://twitter.com/MerkleDACH'>
                        <FaTwitter className='icon' />
                        </a>
                        <a href='https://www.linkedin.com/company/merkle-dach/mycompany/'>
                        <FaLinkedin className='icon' />
                        </a>
                        <a href='https://www.youtube.com/c/MerkleDACH'>
                        <FaYoutube className='icon' />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
