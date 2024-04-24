import React, { useState } from "react";
import { DataUser } from "../../Type/DataUser";
import { SubmitSignUp } from "../../../services/context.tsx";
import './singUpForm.css';
import { Link } from "react-router-dom";

export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
    <div className="form-box">
        <div className="container" id="register">
            <form onSubmit={sendSignUp}>
            <div className="top">

                
                <header>Create Account</header>
            </div>
                
                <div className="input-box">
                    <input type="text" className="input-field" placeholder='Username' required onChange={e => setUsername(e.target.value)} />
                    
                </div>
                <div className="input-box">
                    <input type="email" className="input-field" placeholder='Email' required onChange={e => setEmail(e.target.value)} />
                   
                </div>
                <div className="input-box">
                    <input type="password" className="input-field" placeholder='Password' required onChange={e => setPassword(e.target.value)} />
                    
                </div>
                <div className="submit">
                    <button className="submit" type='submit'>Sign Up</button>
                    <Link to="/login">Already have an account?</Link>
                </div>
            </form>   
        </div>
        </div>
    );
}
