import React from "react";
import {Container, Nav, NavItem} from "reactstrap";
import "./css/navi.css"
import Scrollchor from 'react-scrollchor';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const Example = () => {
    return (
        <h1>Hi!!!</h1>
    )
}

const Bye = () => {
    return (
        <h1>Bye!!</h1>
    )
}

class Navi extends React.Component {

  render() {
    return (
      <Container id = "Navi">
        <Nav id = "NavItemList">
        <Router>
            <Link to= "/example">Sample</Link>
            <Link to = "/bye">bye</Link>
            <Switch>
            <Route path="/example">
                <Example />
            </Route>
            <Route path="/bye">
                <Bye />
            </Route>
            </Switch>
        </Router>
          <NavItem>
            <Scrollchor to = "#Home" className = "Nav-link">Home</Scrollchor>
          </NavItem>
          <NavItem>
          <Scrollchor to = "#About" className = "Nav-link">About</Scrollchor>
          </NavItem>
          <NavItem>
          <Scrollchor to = "#Work" className = "Nav-link">Work</Scrollchor>
          </NavItem>
          <NavItem>
          <Scrollchor to = "Projects" className = "Nav-link">Projects</Scrollchor>
          </NavItem>
          {/* <NavItem>
          <Scrollchor to = "#Skills" className = "Nav-link">Skills</Scrollchor>
          </NavItem>
          <NavItem>
          <Scrollchor to = "#Contact" className = "Contact">Contact</Scrollchor>
          </NavItem> */}
          <NavItem>
              <a href= "https://www.instagram.com/alarmcl0k/" target="_blank" rel="noreferrer">Contact Me</a>
          </NavItem>
          <NavItem>
              <a href= "https://github.com/leewjae" target="_blank" rel="noreferrer">GitHub</a>
          </NavItem>
        </Nav>
      </Container>
    )
  }
}

export default Navi