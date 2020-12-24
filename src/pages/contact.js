import React from "react";
import { Container, Row } from "reactstrap";

class Contact extends React.Component {
  state = {

  }

  render() {
    return (
      
      <Container id = "Contact">
        <div className = "Header">Contact Me</div>
        <Row> 
          GitHub
          <a href = "https://github.com/leewjae" target ="_blank" rel = "noreferrer">: https://github.com/leewjae</a>
        </Row>

        <Row> 
          Instagram 
          <a href = "https://www.instagram.com/alarmcl0k/" target ="_blank" rel = "noreferrer">: https://www.instagram.com/alarmcl0k/</a>
        </Row>
      </Container>
    )
  }
}

export default Contact
