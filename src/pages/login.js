import React, {useState} from "react"
import { authService, firebaseInstance } from "../fbase";
import {Container, Col} from "reactstrap"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
const Login = (props, {user}) => {

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("")
    const [userObj,setUserObj] = useState(null);

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
      )
}

export default Login;