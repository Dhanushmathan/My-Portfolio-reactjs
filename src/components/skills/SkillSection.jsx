import React from 'react'
import { Element } from 'react-scroll';
import './SkillSection.css'

const SkillSection = () => {
    return (
        <Element id='skills' className='skill-card'>
            <div className='skill-card-title'>
                <h1>My <span>Skills</span> </h1>
                <p>Here are the skills I've mastered to create amazing projects and slove challenges!.</p>
            </div>
            <div className='skill-container'>
                <div className='skill-content'>
                    <div>
                        <img src="/assets/img/uiux logo.jpg" alt="uiux" />
                    </div>
                    <h3>UI/UX</h3>
                    <p>I have extensive experience in creating user-friendly and visually appealing interfaces.
                        My skills include wireframing, prototyping, and user testing to ensure the best user experience.</p>
                </div>
                <div className='skill-content'>
                    <div>
                        <img src="/assets/img/web design.png" alt="web design" />
                    </div>
                    <h3>Web Design</h3>
                    <p>I specialize in creating responsive and aesthetically pleasing web designs.
                        My expertise includes HTML, CSS, JavaScript, and various web design tools to build modern and interactive websites.</p>
                </div>
                <div className='skill-content'>
                    <div>
                        <img src="/assets/img/social media.svg" alt="social media" />
                    </div>
                    <h3>Social Media</h3>
                    <p>I have a strong background in managing social media platforms and creating engaging content.
                        My skills include content creation, social media strategy, and analytics to boost online presence and engagement</p>
                </div>
            </div>
            <div className='skill-container'>
                <div className='skill-content'>
                    <div>
                        <img src="/assets/img/web development.png" alt="web development" />
                    </div>
                    <h3>Web Development</h3>
                    <p>I have extensive experience in developing robust and scalable web applications.
                        My skills include working with various programming languages and frameworks such as JavaScript, React, Node.js, and more to build efficient and high-performing web solutions.</p>
                </div>
                <div className='skill-content'>
                    <div>
                        <img src="/assets/img/mobile apps.webp" alt="mobile apps" />
                    </div>
                    <h3>Mobile Apps</h3>
                    <p>A mobile app is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers.</p>
                </div>
                <div className='skill-content'>
                    <div>
                        <img src="/assets/img/github_logo.webp" alt="github" />
                    </div>
                    <h3>Github</h3>
                    <p>I am proficient in using GitHub for version control and collaboration.
                        My skills include creating and managing repositories, branching, merging, and utilizing GitHub Actions for continuous integration and deployment.</p>
                </div>
            </div>
        </Element>
    )
}

export default SkillSection;