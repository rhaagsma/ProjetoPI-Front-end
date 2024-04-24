import React from "react"
import { useState } from "react";
import './Home.css'
import { Link } from "react-router-dom";
import { DataUser } from "../Type/DataUser.ts";
import SignUpForm from "../LognUp/signUp/signUpForm.tsx"
import LoginForm from "../LognUp/login/loginForm.tsx"
import { SubmitSignUp } from "../../services/context.tsx";


const Home = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [projetonome, setprojetonome] = useState("");

    function sendSignUp(event) {
        //event.preventDefault();

        const user: DataUser = {
            nome: username,
            email: email,
            senha: password,
        };

        SubmitSignUp(user);
    }



    return(
    <div className="wrapper">
        <nav className="nav">
        <div className="nav-logo">
            <p>PEDRO .</p>
        </div>
        <div className="nav-menu" id="navMenu">
            <ul>
                <li><a href="#" className="link active">Home</a></li>
                <li><a href="#" className="link">Pedro</a></li>
                <li><a href="#" className="link">Project</a></li>
                <li><a href="#" className="link">About</a></li>
            </ul>
        </div>
        <div className="nav-button">
            <button className="btn white-btn" id="loginBtn">Sign In</button>
        </div>
        <div className="nav-menu-btn">
            <i className="bx bx-menu" onclick="myMenuFunction()"></i>
        </div>
    </nav>
        <div className="form-box">
        
        
        
    </div>
</div>
    )
    
    
}
export default Home;