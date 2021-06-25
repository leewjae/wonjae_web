import React, {useState} from "react";
import "./css/Router.css"
import About from './about.js'
import Work from './work.js';
import Blog from './blog.js'
import PageNotFound from './PageNotFound.js'
import Navi from './components/Navi.js'
import PostDetail from './components/PostDetail'
import Login from './login.js'
import { authService, firebaseInstance } from "../fbase";
import {Container, Col} from "reactstrap"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Box} from "grommet";

const AppRouter = () => {

    const [userObj, setUserObj] = useState(null);

    return (
        <>
        <Container id = "Router">
          <Router>
            {/* naviagtion section */}
            <Navi />
            {/* Log in section */}
                
            {/* Switch Section  */}
            <Container id = "content">
            <Switch>
                <Route exact path= "/" component ={About} />
                <Route path= "/work" component ={Work} />
                <Route exact path= "/blog">
                    <Blog userObj = {userObj}/>
                </Route>
                <Route path= "/blog/:id" component={PostDetail} userObj = {userObj}/>
                <Route path = "/login">
                    <Login userObj = {userObj} setUserObj={setUserObj}/>
                </Route>
                <Route component = {PageNotFound} />
            </Switch>
            </Container>
          </Router>
        </Container>
        </>
      )
}
export default AppRouter