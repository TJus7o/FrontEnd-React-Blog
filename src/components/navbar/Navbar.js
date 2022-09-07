import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'



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
                <Link to='/About.js' smooth={true} duration={500} ><li>About</li></Link>
            </ul>
                <div><button>Subscribe</button></div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='/Home.js' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='/About.js' smooth={true} duration={500} ><li>About</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                    <button>Subscribe</button>
                    
                    </div>
                    <div className="social-icons">
                        <FaTwitter className='icon' />
                        <FaLinkedin className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
