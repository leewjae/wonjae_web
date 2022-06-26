import React from "react"
import {Container, Row, Col} from "reactstrap";
import "./css/home.css"

const Home = () => {

    return (<>
            <div className={"greetings"}>Hello, My name is Wonjae Lee!</div>
            <Row className={"HomeNavigationImageContainerRow"}>
                    <img src = {require("./img/EECS-logo.png")} className={"HomeNavigationImage"}/>
                    <img src = {require("./img/EECS-logo.png")} className={"HomeNavigationImage"}/>
                    <img src = {require("./img/EECS-logo.png")} className={"HomeNavigationImage"}/>
            </Row>
    </>)
}

export default Home