import { useState } from 'react';
import '../ui/ProjectCard.css';

const ProjectCard = ({ link, title, desc, img }) => {

    const [show, setShow] = useState(false);

    return (
        <a href={link} target='_blank'>
            <div className='project' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                {show ? (
                    <div className='project-content'>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ) : (
                    <img src={img} alt="default" width='200' height='200' />
                )}
            </div>
        </a>
    )
}

export default ProjectCard