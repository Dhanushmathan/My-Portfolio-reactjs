import React from 'react'
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/home/HomeSection';
import SkillSection from './components/skills/SkillSection';
import ProjectSection from './components/projects/ProjectSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <SkillSection />
      <ProjectSection />
    </div>
  )
}

export default App;