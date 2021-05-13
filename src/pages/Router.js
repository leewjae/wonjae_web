import React, {useState} from "react";
import "./css/Router.css"
import About from './about.js'
import Project from './project.js';
import Work from './work.js';
import Home from './home.js'
import Blog from './blog.js'
import PageNotFound from './PageNotFound.js'
import Navi from './components/Navi.js'
import PostDetail from './components/PostDetail'
import Login from './login.js'
import { authService, firebaseInstance } from "../fbase";
import {Container, Col} from "reactstrap"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const AppRouter = () => {

    const [userObj, setUserObj] = useState(null);
    const [didUserPressedLoginButton, setDidUserPressedLoginButton] = useState(false);
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("")

    const onChange =(event)=> {
        const {
          target : {name, value},
        } = event;
        if (name === "email") {
          setEmail(value)
        } else if (name === "password") {
          setPassword(value)
        }
      }

      const onSubmit = async(event) => {
        event.preventDefault();
        try {
          let data;
            //login 
            data = await authService.signInWithEmailAndPassword(
              email, password
            )
            setUserObj(data);
        } catch(error) {
          setError(error.message)
        }
      }

      const logOutFunc = () => {
          setUserObj(null);
      }
    
    return (
        <>
        <Container id = "Router">
          <Router>
            {/* naviagtion section */}
                <Navi />
            {/* Log in section */}
                {didUserPressedLoginButton ?
                <>
                {userObj ? 
                    <>
                    <h1>Hello</h1>
                    <h1>Hello!!!!!!</h1>
                    <button onClick ={logOutFunc}>Log Out</button>
                    <button onClick = {()=>{console.log(userObj)}}>console log userObj</button>
                    </>
                  : 
                  <Col>
                      <h1>Login</h1>
                      <h1>Branch: dev</h1>
                      <form onSubmit = {onSubmit}>
                          <input 
                          name="email"
                          type="text"
                          placeholder="Email"
                          required value={email}
                          onChange={onChange} 
                          />
                          <input
                          name="password"
                          type="password"
                          placeholder="Password" 
                          required value={password} 
                          onChange={onChange} 
                          />
                          <input type="submit" value = "Log in"/>
                          {error}
                      </form>
                  </Col>
                }
                </>
                :  
                <>
                    <h1>User login deactivated</h1> 
                    <button onClick={()=>{setDidUserPressedLoginButton(true)}}>
                    Click Login
                    </button>
                </>
                }
            {/* Switch Section  */}
            <Switch>
                <Route exact path= "/" component = {Home} />
                <Route path= "/about" component ={About} />
                <Route path= "/work" component ={Work} />
                <Route path= "/project" component ={Project} />
                <Route exact path= "/blog">
                    <Blog userObj = {userObj}/>
                </Route>
                <Route path= "/blog/:id" component={PostDetail} userObj = {userObj}/>
                <Route path= "/login" component={Login} userObj = {userObj}/>
                <Route component = {PageNotFound} />
            </Switch>
          </Router>
        </Container>
        </>
      )
}
export default AppRouter