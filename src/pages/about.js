import React from "react";
import './css/about.css';
import {Container, Row} from 'reactstrap'

let intro_message = `Hello I am Wonjae Lee. I am researching in the area of
electrical engineering and computer science at University
of California at Berkeley. Currently living in South Korea.
I am interested in improving people's lives better. I am currently
preoccupied with making personal website and making iPhone Applications.
I have experiences in making iPhone application using SwiftUI. Furthermore, I
will be studying artificial intelligence and virtual reality in UC Berkeley.
Any questions or thoughts, please click the contact me button above. Thank you! `;

class About extends React.Component {

  render() {
    return (

        <Container id = "About" className = "section">
        <div className = "Header">About me</div>
          <Row className = "Profile">
                <img src={require('./img/wonjaelee.jpg').default} alt = ""/>
                {/* <img src={require('./img/CAL_ACCEPTED.png').default} alt = ""/> */}
          </Row>
          <div id = "intro-message">{intro_message}</div>
        </Container>
    )
  }
}

export default About