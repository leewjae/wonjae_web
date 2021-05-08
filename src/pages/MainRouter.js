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
            <Row id = "navigationBar">
            <div id = "about" className = "routerItem">
            <Link to = "/about">About</Link>
            </div>
            <div id = "Work" className = "routerItem">
            <Link to = "/work">Work</Link>
            </div>
            <div id = "Project" className = "routerItem">
            <Link to = "/project">Project</Link>
            </div>
            <div id = "Blog" className = "routerItem">
            <Link to = "/blog">Blog</Link>
            </div>
            </Row>


            {/* Switch Section  */}
            <Switch>
            <Route path="/about" component ={About} />
            <Route path="/work" component ={Work} />
            <Route path="/project" component ={Project} />
            <Route exact path="/blog" component ={Blog} />
            </Switch>
        </Router>
      </Container>
    )
  }
}

export default MainRouter