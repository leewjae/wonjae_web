import React, {useState} from "react";
import "./css/Router.css"
import Home from './Home.js'
import About from './About.js'
import Work from './work.js';
import Blog from './Blog.js'
import PageNotFound from './PageNotFound.js'
import Navi from './components/Navi.js'
import PostDetail from './components/PostDetail'
import Login from './Login.js'
import {Container, Col} from "reactstrap"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const AppRouter = () => {

    const [userObj, setUserObj] = useState(null);

    return (
        <>
        <Container id = "Router">
          <Router>
            <Container id = "content">
            <Switch>
                <Route exact path= "/" component = {Home} />
                <Route exact path= "/about" component ={About} />
                <Route exact path= "/work" component ={Work} />
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