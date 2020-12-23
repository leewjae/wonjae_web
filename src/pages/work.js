import React from "react";
import "./css/work.css"
import {Col, Row, Container} from "reactstrap"

const experiences = [
  {
    'link' : 'http://nccs.or.kr/',
    'id' : 1,
    'icon' : 'nccslogo.png',
    'place' : 'New Creation Christian School, Yongin, South Korea',
    'title' : 'Supervisor, Lecturer',
    'description' : ' I started this job at August, 2020. I am teaching computer science, calculus, and physics'
  },

  {
    'link' : 'http://www.dvhackers.com/',
    'id' : 2,
    'icon' : 'dvhackers.png',
    'place' : 'DV Hackers, Pleasant Hill, California',
    'title' : 'Vice President, Project Manager',
    'description' : 'VP, Leading machine learning group',
  },

  {
    'link' : 'https://www.instagram.com/dvcmathclub/',
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
                  <a href = {experience.link} target='_blank' rel="noreferrer" className = "Work-Place">{experience.place}</a>
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

