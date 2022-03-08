import React from "react";
import {Row} from "reactstrap"
import {BrowserRouter as Router, Link} from "react-router-dom"
import "../css/navi.css"
const Navi = () => {
    return (
            <Row id = "navigationBar">
                <div id = "about" className = "navigation-item">
                    <Link to = "/">About</Link>
                </div>
                <div id = "work" className = "navigation-item">
                    <Link to = "/work">Work</Link>
                </div>
                <div id = "blog" className = "navigation-item">
                    <Link to = "/blog">Blog</Link>
                </div>
                <div id = "login" className = "navigation-item">
                    <Link to = "/login">Log in</Link>
                </div>
                <div id = "resume" className = "navigation-item">
                    <a href='../files/leewjae_resume.pdf'>résumé</a>
                </div>
            </Row>
    )
}

export default Navi