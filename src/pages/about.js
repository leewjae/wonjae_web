import React from "react";
import './css/about.css';
import {Container, Row} from 'reactstrap'

let intro_message = `Hello I am Wonjae Lee. I am studying computer
 science in Diablo Valley College. I will transfer to 4-year-institution
 in Fall 2021. Currently living in South Korea`;

class About extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Container id = "About">
        <div className = "Header">About me</div>
          <Row className = "Profile">
            <img src={require('./img/wonjaelee.jpg').default} alt = ""/>

            <div id = "intro-message">{intro_message}</div>
          </Row>
        </Container>
    )
  }
}

export default About