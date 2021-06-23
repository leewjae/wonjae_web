import React from "react";
import './css/about.css';
import {Container, Row, Col} from 'reactstrap'

let intro_message = `Hello, I'm Wonjae Lee. 
I am studying electrical engineering and computer science at UC Berkeley. 
I have good adaptability to work in various countries around the world, and I live in the United States.
I am studying web development using React JS and iPhone application development using SwiftUI by my own. 
I am currently taking compsci 70: Discrete Mathematics and Probability Theory at
UC Berkeley. I'm planning to focus on machine learning and artificial intelligence at UC Berkeley. 
Please click the Contact Me button at the top for detailed questions about me. Thank you!`;

class About extends React.Component {

  render() {
    return (

        <Container id = "About" className = "section">
          <Row className = "Profile">
              <Col className = "profile-column">
                <img src={require('./img/wonjaelee.jpg').default} alt = ""/>
                <div className = "intro-short"> <h2><b>Wonjae Lee</b></h2></div>
                <div className = "intro-short"> <h4>Junior, Department of EECS</h4></div>
                <div className = "intro-short"> <a href = "https://eecs.berkeley.edu/"><h4>UC Berkeley</h4></a></div>
              </Col>
                <div className = "intro-message"><strong>About Me:</strong> {intro_message}</div>
          </Row>
        </Container>
    )
  }
}

export default About