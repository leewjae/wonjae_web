import React, {useEffect} from "react";
import './css/about.css';
import {Container, Row, Col} from 'reactstrap'

let intro_message = `Hello! I'm Wonjae Lee. 
I am studying electrical engineering and computer science at UC Berkeley. 
I am studying web development using React JS and iPhone application development using SwiftUI by my own. 
I am currently studying computer security (CS 161), database system (CS186), and circuit design (EECS16B)  at
UC Berkeley. I have interests on developing user friendly UI/UX and software. 
Please click the Contact Me button at the top for detailed questions about me. Thank you!`;

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (

        <Container id = "About" className = "section">
        <Row className = "Profile">
            <Col className = "profile-column">
                <img src={require('./img/wonjaelee.jpg').default} alt = ""/>
                <div className = "intro-short"> <h2><b>Wonjae Lee</b></h2></div>
                <div className = "intro-short"> <h4>Senior EECS Student at UC Berkeley</h4></div>
                <div className = "intro-short"> <a href = "https://eecs.berkeley.edu/"><h4>UC Berkeley</h4></a></div>
            </Col>
                <div className = "intro-message"><strong>About Me:</strong> {intro_message}</div>
        </Row>
        </Container>
    )
}

export default About