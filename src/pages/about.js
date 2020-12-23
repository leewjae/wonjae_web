import React from "react";
import './css/about.css';
import {Container, Row} from 'reactstrap'

let intro_message = "Hello I am Wonjae Lee. I am studying computer science in Diablo Valley College tttttttttfadfadfafadfafafadsfadfads";

class About extends React.Component {

  render() {
    return (
      <div id = "About">
        <h1>About me</h1>
        <Container>
          <Row className = "Profile">
            <img src={require('./img/wonjaelee.jpg').default} alt = ""/>
            <div id = "intro-message">{intro_message}</div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About