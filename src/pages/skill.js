import React from "react";
import { Container, Row } from "reactstrap";

const languages =[
  {
    'name' : 'Python',
    'rating' : '★ ★ ★ ',
  },

  {
    'name' : 'C++',
    'rating' : '★ ★ ★ ★ ',
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
  }
]

class Skill extends React.Component {
  state = {

  }

  render() {
    return (
      <Container id = "Skills">
        <div className = "Header">Skills</div>
        <Row>
          {languages.map(language => (
            <Row>{language.name} {language.rating} </Row>
          ))}
        </Row>
      </Container>
    )
  }
}

export default Skill
