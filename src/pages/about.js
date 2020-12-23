import React from "react";
import './css/about.css';
// import {Col, Row} from 'reactstrap'

let intro_message = "Hello I am Wonjae Lee. I am studying computer science in Diablo Valley College";

class About extends React.Component {

  render() {
    return (
      <div id = "About">
        <div className = "Profile">
          <img src={require('./img/wonjaelee.jpg').default} alt = ""/>
          <p>{intro_message}</p>
        </div>
      </div>
    )
  }
}

export default About