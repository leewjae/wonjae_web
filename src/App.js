import About from './pages/about.js'
import Home from './pages/home.js'
import Project from './pages/project.js';
import Skill from './pages/skill.js';
import Work from './pages/work.js';
import Contact from './pages/contact.js';
import Navi from './pages/navi.js';
import './App.css';

const sections = ["Home, About, Work, Project, Skill, Contact"]

function App() {
  return (
    <>
        {/* <Navi className = "section"/> */}
        <Home className = "section" to = {sections[0]}/>
        <About className = "section" to = {sections[1]}/>
        <Work className = "section" to = {sections[2]}/>
        {/* <Project className = "section" to = {sections[3]}/> */}
        <Skill className = "section" to = {sections[4]}/>
        <Contact className = "section" to = {sections[5]}/>
    </>
  );
}

export default App;
