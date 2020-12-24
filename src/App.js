import About from './pages/about.js'
import Home from './pages/home.js'
import Project from './pages/project.js';
import Skill from './pages/skill.js';
import Work from './pages/work.js';
import Contact from './pages/contact.js';
import './App.css';

const sections = ["Home, About, Work, Project, Skill, Contact"]

function App() {
  return (
    <>
        <Home to = {sections[0]}/>
        <About to = {sections[1]}/>
        <Work to = {sections[2]}/>
        <Project to = {sections[3]}/>
        <Skill to = {sections[4]}/>
        <Contact to = {sections[5]}/>
    </>
  );
}

export default App;
