import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./css/project.css"

const projects = [
  {
    "name" : "New Creation Evangelism Flyer",
    "picture" : "evangelism.png", 
    "description" : "Thai and Korean, SwiftUI"
  },
  
  {
    "name" : "Transfer assistant Console",
    "picture" : "transfer-assistant.png", 
    "description" : "It was truely a fun activity"
  },
]

class Project extends React.Component {
  state = {

  }

  render() {
    return (
      <Container id = "Projects">
        <div className = "Header">Projects</div>
        {projects.map(project => (
          <Row>
            <img src ={require("./img/" + project.picture).default} alt = ""/>
              <Col>
                <div><b>{project.name}</b></div>
                <div>{project.description}</div>
              </Col>
          </Row>
        ))}
      </Container>
    )
  }
}

export default Project
