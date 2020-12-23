import React from "react";
import './css/about.css';

let intro_message = "Hello I am Wonjae Lee. I am studying computer science in Diablo Valley College";

class About extends React.Component {

  render() {
    return (
      <div id = "About">
        <div className = "container">
          <img src={require('./img/wonjaelee.jpg').default} alt = ""/>
          <p>{intro_message}</p>
        </div>
      <h1>Hello I am Wonjae Lee</h1>
      </div>
    )
  }
}

export default About