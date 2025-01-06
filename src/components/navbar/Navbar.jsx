import React from 'react'
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='header'>
            <div className='header-title'>
                <h1>Portfolio</h1>
            </div>
            <div className='header-content'>
                <ul className='header-li'>
                    <li>
                        <Link to='home' smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li>
                        <Link to='project' smooth={true} duration={500}>Project</Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={500}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;