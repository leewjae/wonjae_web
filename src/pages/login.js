import React, {useEffect, useState} from "react"
import { authService, firebaseInstance } from "../fbase";
import {Container, Col} from "reactstrap"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import "./css/login.css"
const Login = (props) => {

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
            props.setUserObj(data);
        } catch(error) {
          setError(error.message)
        }
      }

      const logOutFunc = () => {
          props.setUserObj(null);
      }
    

    return (
    <>
                {props.userObj ? 
                    <Col className = "login-box">
                    <h1>Hello Wonjae</h1>
                    <button onClick ={logOutFunc}>Log Out</button>
                    </Col>
                  : 
                  <Col className = "login-box">
                      <h1>Login</h1>
                      <h1>Branch: Master</h1>
                      <form onSubmit = {onSubmit}>
                          <input 
                          name="email"
                          type="text"
                          placeholder="Email"
                          required value={email}
                          onChange={onChange} 
                          />
                        <br />
                          <input
                          name="password"
                          type="password"
                          placeholder="Password" 
                          required value={password} 
                          onChange={onChange} 
                          />
                          <br />
                          {error}
                          <br />
                          <input type="submit" value = "Log in"/>
                      </form>
                  </Col>
                }
                </>
    )
}

export default Login;