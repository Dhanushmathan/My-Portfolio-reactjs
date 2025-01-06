import { Element } from 'react-scroll';
import clientProject from '../../data/project.json';
import ProjectCard from '../ui/ProjectCard';
import '../projects/ProjectSection.css';

const ProjectSection = () => {

    console.log(clientProject);

    return (
        <Element id='project' name='project' className='project-card'>
            <div className='project-title'>
                <h1>My <span>Projects</span></h1>
                <p>Here's what I've been building! Check out my favourite projects below.</p>
            </div>
            <div className='project-content'>
                {
                    clientProject.map((card, index) => {
                        return (
                            <ProjectCard key={index} img={card.img} title={card.title} link={card.link} desc={card.desc} />
                        )
                    })
                }
            </div>
        </Element>
    )
}

export default ProjectSection;