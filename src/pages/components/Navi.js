import React from "react";
import {Row} from "reactstrap"
import {BrowserRouter as Router, Link} from "react-router-dom"
const Navi = () => {
    return (
            <Row id = "navigationBar">
            <div id = "Home" className = "routerItem">
                <Link to = "/">Home</Link>
            </div>
            <div id = "about" className = "routerItem">
                <Link to = "/about">About</Link>
            </div>
            <div id = "Work" className = "routerItem">
                <Link to = "/work">Work</Link>
            </div>
            <div id = "Project" className = "routerItem">
                <Link to = "/project">Project</Link>
            </div>
            <div id = "Blog" className = "routerItem">
                <Link to = "/blog">Blog</Link>
            </div>
            </Row>
    )
}

export default Navi