import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./css/project.css"

const projects = [
  {
    "name" : "Transfer assistant Console",
    "picture" : "transfer-assistant.png", 
    "description" : "It was truely a fun activity"
  }
]

class Project extends React.Component {
  state = {

  }

  render() {
    return (
      <Container id = "Projects">
        <h1>Projects</h1>
        {projects.map(project => (
          <Row>
            <img src ={require("./img/" + project.picture).default} alt = ""/>
              <Col>
                <div>{project.name}</div>
                <div>{project.description}</div>
              </Col>
          </Row>
        ))}
      </Container>
    )
  }
}

export default Project
