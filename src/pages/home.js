import React from "react";
import "./css/home.css";
import Typed from "react-typed";
// import {Col, Fade} from "reactstrap";

class Home extends React.Component {
  render() {
    return <div id = "Home">
    <div id = "center-wrapper">
      <Typed id='Home-Typed' strings={['Full-Stack Developer</br>Wonjae Lee']}typeSpeed={200}></Typed></div>
      </div>
  }
}

export default Home