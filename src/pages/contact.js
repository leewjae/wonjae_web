import React from "react";
import { Container, Row } from "reactstrap";
import "./css/contact.css"

class Contact extends React.Component {
  state = {

  }

  render() {
    return (
      
      <Container id = "Contact" className = "section">
        <div className = "Header">Contact Me</div>
        <Row> 
          GitHub
          <a href = "https://github.com/leewjae" target ="_blank" rel = "noreferrer">: https://github.com/leewjae</a>
        </Row>

        <Row> 
          Instagram 
          <a href = "https://www.instagram.com/alarmcl0k/" target ="_blank" rel = "noreferrer">: https://www.instagram.com/alarmcl0k/</a>
        </Row>
          
        <Row>
          Email
          <a href = "mailto:wonjaelee99@gmail.com">: wonjaelee99@gmail.com</a>
        </Row>
      </Container>
    )
  }
}

export default Contact
