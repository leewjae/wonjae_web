import React from "react";
import {Container, Nav, NavItem} from "reactstrap";
import "./css/MainRouter.css"
import Scrollchor from 'react-scrollchor';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import About from './about.js'
import Project from './project.js';
import Work from './work.js';
import Home from './home.js'
import Blog from './blog.js'
import {Row} from 'reactstrap'

class MainRouter extends React.Component {

  render() {
    return (
      <Container id = "Router">
        <Router>

            {/* naviagtion section */}
            <Row>
            <div id = "about" class = "routerItem">
            <Link to = "/About">About</Link>
            </div>
            <div id = "Work" class = "routerItem">
            <Link to = "/Work">Work</Link>
            </div>
            <div id = "Project" class = "routerItem">
            <Link to = "/Project">Project</Link>
            </div>
            <div id = "Blog" class = "routerItem">
            <Link to = "/Blog">Blog</Link>
            </div>
            </Row>


            {/* Switch Section  */}
            <Switch>
            <Route path="/About">
                <About />
            </Route>
            <Route path="/Work">
                <Work />
            </Route>
            <Route path="/Project">
                <Project />
            </Route>
            <Route path="/Blog">
                <Blog />
            </Route>
            </Switch>
        </Router>
      </Container>
    )
  }
}

export default MainRouter