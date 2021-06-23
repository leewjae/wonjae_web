import About from './pages/about.js'
import Project from './pages/project.js';
import Work from './pages/work.js';
import Navi from './pages/navi.js';
import './App.css';

const sections = ["About, Work, Project, Skill, Contact"]

function App() {
  return (
    <>
        <Navi/>
        <About to = {sections[0]}/>
        <Work to = {sections[1]}/>
    </>
  );
}

export default App;
