import React from 'react';
import { useState } from 'react';
import './loginForm.css';
import { Link } from "react-router-dom";
import { DataUser } from '../../Type/DataUser';
import { SubmitSignUp } from '../../../services/context.tsx';


export default function LoginForm() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [projetonome, setprojetonome] = useState("");

    function sendLogin(event) {
        //event.preventDefault();

        const user: DataUser = {
            nome: username,
            email: email,
            senha: password,
        };

        SubmitSignUp(user);
    }
    return(
        <div className="form-box">
        
        <div className="login-container" id="login">
            <form onSubmit={sendLogin}>
                <div className="top">

                    <Link to="/register">Don't have an account? Register</Link>

                    <header>Login</header>
                </div>
                <div className="input-box">
                    <input type="text" className="input-field" placeholder= "Username or email" onChange={e => setUsername(e.target.value)}/>
                    <i className="bx bx-user"></i>
                </div>
                <div className="input-box">
                    <input type="password" className="input-field" placeholder= "Password" onChange={e => setPassword(e.target.value)}/>
                    <i className="bx bx-lock-alt"></i>
                </div>
                <div className="input-box">
                    <button type='submit'>Sign Up</button>
                </div>

                </form> 
                <div className="two-col">
                    <div className="one">
                        <input type="checkbox" id="login-check"/>
                        <label><input type="checkbox" />Remember me</label>
                    </div>
                    <div className="two">
                        <label><a href="#">Forgot password?</a></label>
                    </div>
                </div>
            </div>
        </div>  
    )
}

