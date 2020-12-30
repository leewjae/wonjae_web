import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./css/skill.css"
const languages =[
  {
    'name' : 'Python',
    'rating' : '★ ★ ★ ',
  },

  {
    'name' : 'C++',
    'rating' : '★ ★ ★ ',
  },

  {
    'name' : 'Java',
    'rating' : '★ ★',
  },

  {
    'name' : 'Swift',
    'rating' : '★ ★ ★',
  },

  {
    'name' : 'JavaScript',
    'rating' : '★'
  },
]

class Skill extends React.Component {
  state = {

  }

  render() {
    return (
      <Container id = "Skills">
                <div className = "Header">Skills</div>
        <Row className = "skill">
          {languages.map(language => (
            <>
            <Col className = "skillname">{language.name} </Col>
            <Col className = "skillrate">{language.rating}</Col>
            </>
          ))}
        </Row>
      </Container>
    )
  }
}

export default Skill
