import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./css/project.css"

const projects = [
  {
    "name" : "New Creation Evangelism Flyer",
    "picture" : "evangelism.png", 
    "description" : `Flyer with the contents of 
    Word of Faith. Simply designed, and this is my 
    first SwiftUI project. Published in Korean and Thai.
    Available on the AppStore.`,
    "link" : `https://apps.apple.com/kr/
    app/%EC%83%88%EB%A1%9C%EC%9A%B4-%ED%
    94%BC%EC%A1%B0%EB%AC%BC-%EC%A0%84%EB%
    8F%84%EC%A7%80/id1533426135#?platform=iphone`
  },
  
  {
    "name" : "Transfer assistant Console",
    "picture" : "transfer-assistant.png", 
    "description" : `This was my first computer science project.
    I coded everything in C++. I was able to learn what the collaboration
    in computer science is in this project. `,
    "link" : ""
  },
]

function zoomIn(event) {
  event.target.style.width = "52%" ;
  event.target.style.height = "22%";
  event.target.style.transition = "all 0.3s";
}

function zoomOut(event) {
  event.target.style.width = "50%" ;
  event.target.style.height = "20%";
  event.target.style.transition = "all 0.3s";
}

class Project extends React.Component {
  state = {
    zoomIn: false
  }

  render() {
    return (
      <Container id = "Projects" className = "section">
        <div className = "Header">Projects</div>
        {projects.map(project => (
          <Row>
            <img src ={require("./img/" + project.picture).default}
              onMouseEnter = {zoomIn}
              onMouseLeave = {zoomOut}
              onClick = {zoomOut}
             alt = ""/>
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
