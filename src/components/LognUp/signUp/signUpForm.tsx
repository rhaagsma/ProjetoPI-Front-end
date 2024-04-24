import React, { useState } from "react";
import { DataUser } from "../../Type/DataUser";
import { SubmitSignUp } from "../../../services/context.tsx";
import './singUpForm.css';
import { Link } from "react-router-dom";

import {
    Grid
} from "@mui/material";

export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [projetonome, setprojetonome] = useState("");
    function sendSignUp(event) {
        event.preventDefault();
        
        const user: DataUser = {
            nome: username,
            email: email,
            senha: password,
        };

        SubmitSignUp(user);
        console.log("Success");
    }

    return (
        <div className="register-container" id="register">
            <form onSubmit={sendSignUp}>
            <div className="top">
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Login</Link>
              </Grid>
            </Grid>
                <header>Sign Up</header>
            </div>
                <h1>Create Account</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required onChange={e => setUsername(e.target.value)} />
                    <i className="bx bx-user"></i>
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email' required onChange={e => setEmail(e.target.value)} />
                    <i className="bx bx-envelope"></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required onChange={e => setPassword(e.target.value)} />
                    <i className="bx bx-lock-alt"></i>
                </div>

                <button type='submit'>Sign Up</button>
            
            </form>   
        </div>
    );
}
