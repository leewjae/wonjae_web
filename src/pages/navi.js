import React from "react";
import {Container, Nav, NavItem, Button,Row} from "reactstrap";
import "./css/navi.css"
import Scrollchor from 'react-scrollchor';

class Navi extends React.Component {

  render() {
    return (
      <Container id = "Navi">
        <Nav id = "NavItemList">
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
              <a href= "https://www.instagram.com/alarmcl0k/" target="_blank">Contact Me</a>
          </NavItem>
          <NavItem>
              <a href= "https://github.com/leewjae" target="_blank">GitHub</a>
          </NavItem>
        </Nav>
      </Container>
    )
  }
}

export default Navi