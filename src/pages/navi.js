import React from "react";
import {Container, Nav, NavItem} from "reactstrap";
import "./css/navi.css"
import Scrollchor from 'react-scrollchor';

class Navi extends React.Component {

  render() {
    return (
      <Container id = "Navi">
        <Nav id = "NavItemList">
          <NavItem>
          <Scrollchor to = "#About" className = "Nav-link">About</Scrollchor>
          </NavItem>
          <NavItem>
          <Scrollchor to = "#Work" className = "Nav-link">Work</Scrollchor>
          </NavItem>
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