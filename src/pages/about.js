import React from "react";
import './css/about.css';
import {Container, Col} from 'reactstrap'

let intro_message = `Hello I am Wonjae Lee. I am studying computer
 science in Diablo Valley College. I will transfer to 4-year-institution
 in Fall 2021. Currently living in South Korea.
 I love playing bass guitar, and I own Moollon's 5-string bass.
 I started to play bass since 18. I started to study React.js recently.
 I did learn of Javascript before, but this is my first time publishing my 
 personal website! `;

class About extends React.Component {

  render() {
    return (
        <Container id = "About" className = "section">
        <div className = "Header">About me</div>
          <Col className = "Profile">
            <img src={require('./img/wonjaelee.jpg').default} alt = ""/>
            <div id = "intro-message">{intro_message}</div>
          </Col>
        </Container>
    )
  }
}

export default About