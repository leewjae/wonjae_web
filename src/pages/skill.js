import React from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import "./css/skill.css"

function proficiency_converter(input) {
  if (input < 39) {
    return "Newbie";
  } else if (input < 59) {
    return "Intermediate";
  } else if (input < 79) {
    return "Good";
  } else {
    return "Proficient"
  }
}

function color_converter(input) {
  if (input < 39) {
    return "danger";
  } else if (input < 59) {
    return "warning";
  } else if (input < 79) {
    return "info";
  } else {
    return "success"
  }
}

const languages =[
  {
    'name' : 'C++',
    'rating' : '85',
  },

  {
    'name' : 'Python',
    'rating' : '60',
  },

  {
    'name' : 'Swift',
    'rating' : '60',
  },

  {
    'name' : 'Java',
    'rating' : '40',
  },

  {
    'name' : 'JavaScript',
    'rating' : '20',
  },
]

class Skill extends React.Component {
  state = {

  }

  render() {
    return (
      <Container id = "Skills">
                <div className = "Header">Skills</div>
        <Col className = "skill">
          {languages.map(language => (
            <>
            <Col>
            <Row>
              <Col className = "skillname">{language.name}: {proficiency_converter(language.rating)}</Col>
            </Row>        
            <Progress animated color = {color_converter(language.rating)} value = {language.rating}/> 
            </Col>
            </>
          ))}
        </Col>
      </Container>
    )
  }
}

export default Skill
