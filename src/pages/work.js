import React from "react";
import "./css/work.css"
import {Col, Row, Container} from "reactstrap"

const experiences = [
  {
    'id' : 1,
    'icon' : 'nccslogo.png',
    'place' : 'New Creation Christian School, Yongin, South Korea',
    'title' : 'Supervisor, Lecturer',
    'description' : ' I started this job at August, 2020. I am teaching computer science, calculus, and physics'
  },

  {
    'id' : 2,
    'icon' : 'dvhackers.png',
    'place' : 'DV Hackers, Pleasant Hill, California',
    'title' : 'Vice President, Project Manager',
    'description' : 'VP, Leading machine learning group',
  },

  {
    'id' : 3,
    'icon' : 'dvcmathclub.png',
    'place' : 'DVC Math Club, Pleasant Hill, California',
    'title' : 'President',
    'description' : 'president, leading weekly meeting, weekly math',
  },
  
]

class Work extends React.Component {

  render() {
    return (

      <Container id = "Work">
        <h1>Work/ Experiences</h1>
        {experiences.map(experience =>(
              <Row key = {experience.id}>
              <img className = "Work-Logo" src={require('./img/' + experience.icon).default} alt = 'Not loaded'/>
                <Col key = {experience.id}>
                  <div className = "Work-Place">{experience.place}</div>
                  <div className = "Work-Title">{experience.title}</div>
                  <div className = "Work-Description">{experience.description}</div>
                </Col>
              </Row>
        ))  
        }
    </Container>
    )
  }
}

export default Work

