import React from "react";
import {Container, Nav, NavItem} from "reactstrap";
import "./css/navi.css"
import Scrollchor from 'react-scrollchor';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import About from './about.js'
import Project from './project.js';
import Work from './work.js';
import Home from './home.js'

class Navi extends React.Component {

  render() {
    return (
      <Container id = "Navi">
        <Router>
            {/* <Link to= "/Home">Home</Link> */}
            <Link to = "/About">About</Link>
            <Link to = "/Work">Work</Link>
            <Link to = "/Project">Project</Link>
            <Switch>
            {/* <Route path="/Home">
                <Home />
            </Route> */}
            <Route path="/About">
                <About />
            </Route>
            <Route path="/Work">
                <Work />
            </Route>
            <Route path="/Project">
                <Project />
            </Route>
            </Switch>
        </Router>
      </Container>
    )
  }
}

export default Navi