import React from 'react';
import { useState } from 'react';
import './loginForm.css';
import { Link } from "react-router-dom";
import { DataUser } from '../../Type/DataUser';
import { SubmitLogin } from '../../../services/context.tsx';


export default function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function sendLogin(event) {
        //event.preventDefault();

        const user: DataUser = {
            nome: username,
            email: username,
            senha: password,
        };

        SubmitLogin(user);
    }
    return(
        <div className="form-box">
        
        <div className="login-container" id="login">
            <form onSubmit={sendLogin}>
                <div className="top">

                    <header>Login</header>
                </div>
                <div className="input-box">
                    <input type="text" className="input-field" placeholder= "Username or email" onChange={e => setUsername(e.target.value)}/>
                    
                </div>
                <div className="input-box">
                    <input type="password" className="input-field" placeholder= "Password" onChange={e => setPassword(e.target.value)}/>
                    
                </div>
                <div className="submit">
                    <button className= 'submit' type='submit'>Sign Up</button>
                    <Link to="/register">Don't have an account?</Link>
                </div>
            </form> 
                
        </div>
        </div>  
    )
}

