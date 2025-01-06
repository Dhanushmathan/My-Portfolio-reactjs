import React from 'react'
import { Element, Link } from 'react-scroll';
import './HomeSection.css';
import HomeImage from '/assets/img/mathan.png';

const HomeSection = () => {
    return (
        <>
            <hr />
            <Element id='home' name='home' className='home-card'>
                <div className='home-container'>
                    <div className='home-img'>
                        <img src={HomeImage} alt="dhanushmathan" />
                    </div>
                    <div className='home-content'>
                        <h1>Mr.Dhanush <span>Mathan</span></h1>
                        <p>A Freelence Web and Frentend Developer</p>
                        <a href="#">
                            <button className='btn download-btn'>Download CV</button>
                        </a>
                        <Link to='projects' smooth={true} duration={500}>
                            <button className='btn works-btn'>My Works</button>
                        </Link>
                    </div>
                </div>
            </Element>
        </>
    )
}

export default HomeSection;