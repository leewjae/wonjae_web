import React, {useEffect, useState} from "react"
import { authService, firebaseInstance } from "../fbase";
import {Container, Col, Row} from "reactstrap"
import "./css/login.css"
const Login = (props) => {
    const [signInEmail, setsignInEmail] = useState("");
    const [signInPassword,setsignInPassword] = useState("");
    const [signInReEnterPassword,setsignInReEnterPassword] = useState("");
    const [logInEmail, setlogInEmail] = useState("");
    const [logInPassword,setlogInPassword] = useState("");
    const [error, setError] = useState("");
    const [isSignin, setisSignin] = useState(false);


    // useEffect(() => {
    // },[])

    const onChange =(event)=> {
        const {
          target : {name, value},
        } = event;
        if (name === "signInEmail") {
            setsignInEmail(value)
        } else if (name === "signInPassword") {
            setsignInPassword(value)
        } else if (name === "signInReEnterPassword") {
            setsignInReEnterPassword(value)
        } else if (name === "logInEmail") {
            setlogInEmail(value)
        } else if (name === "logInPassword") {
            setlogInPassword(value)
        }
      }


    const onLogInSubmit = async(event) => {
    event.preventDefault();
    try {
        let data;
        //login 
        data = await authService.signInWithEmailAndPassword(
            signInEmail, signInPassword
        )
        props.setUserObj(data);
        } catch(error) {
            setError(error.message)
        }
    }

    function assert(condition) {
        if (!condition) {
            throw new Error("Password Does Not Match");
        }
    }

    const onSignInSubmit = async(event) => {
        event.preventDefault();
        try {
            assert(signInPassword === signInReEnterPassword)
            authService.createUserWithEmailAndPassword(signInEmail, signInPassword)
            window.alert("Creating User :" + {signInEmail} + " was successful");
            setsignInEmail("")
            setsignInPassword("")
            setsignInReEnterPassword("")
            // setisSignin(false)
            } catch(error) {
                setError(error.message)
            }
        }

    const logOutFunc = () => {
        props.setUserObj(null);
    }
    

    return (
    <>
    <Container style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        {props.userObj ? 
                <Col className = "login-box">
                <h1>Hello Wonjae</h1>
                <button onClick ={logOutFunc}>Log Out</button>
                </Col>
                : 
                isSignin ?
                <Col className = "signin-box">
                <h1>Sign In</h1>
                <form onSubmit = {onSignInSubmit}>
                <input 
                name="signInEmail"
                type="text"
                placeholder="Email"
                required value={signInEmail}
                onChange={onChange} 
                />
                <br />
                <input
                name="signInPassword"
                type="password"
                placeholder="Password" 
                required value={signInPassword} 
                onChange={onChange} 
                />
                <br />
                <input
                name="signInReEnterPassword"
                type="password"
                placeholder="Verify Password" 
                required value={signInReEnterPassword} 
                onChange={onChange} 
                />
                <br />
                {error}
                <br />
                <input type="submit" value = "Sign In"/>
                </form>
                <button onClick={() => {setisSignin(false)}}>Cancel</button>
                </Col>
                    :
                <Col className = "login-box">
                    <h1>Login</h1>
                    <form onSubmit = {onLogInSubmit}>
                    <input 
                    name="logInEmail"
                    type="text"
                    placeholder="Email"
                    required value={logInEmail}
                    onChange={onChange} 
                    />
                    <br />
                    <input
                    name="logInPassword"
                    type="password"
                    placeholder="Password" 
                    required value={logInPassword} 
                    onChange={onChange} 
                    />
                    <br />
                    {error}
                    <br />
                    <input type="submit" value = "Log in"/>
                    </form>
                    <button onClick={() => {setisSignin(true)}}>Sign In</button>
                </Col>
            }
        </Container>
        </>
    )
}

export default Login;