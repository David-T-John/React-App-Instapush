import React from 'react';
import '../css/authpage.css';
import { NavLink } from 'react-router-dom';

class Authpage extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentDidMount(){
        return(console.log("Authpage Component did mount."))
    }
    componentWillUnmount(){
        return(console.log("Authpage Component did mount."))
    }
    render(){
        return(
            <div id="authWrap">
                <div id="loginFormWrap">
                    <h1 id="loginHeading">Instapush</h1>
                    <h4>Login</h4><br></br>
                    <form name="loginForm" id="loginForm">
                        <label className="inputLabel">Email</label><br></br>
                        <input className="loginFormInput" type="email" autoComplete="username" placeholder="Enter your email address" required></input><br></br>
                        <label className="inputLabel">Password</label><br></br>
                        <input className="loginFormInput" type="password" placeholder="Enter your password" autoComplete="current-password" required></input><br></br>
                        <NavLink to="/"><button id="loginBtn" type="submit" form="loginForm">Login</button></NavLink>
                    </form>
                    <button id="orSignUp">Or sign up</button>
                </div>
            </div>
        )
    }
}
export default Authpage;