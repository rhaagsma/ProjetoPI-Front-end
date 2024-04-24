import React, { useState } from "react";
import { DataUser } from "../../Type/DataUser";
import { SubmitSignUp } from "../../../services/context.tsx";

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
    }

    return (
        <div className='wrapper'>
            <form onSubmit={sendSignUp}>
                <h1>Create Account</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email' required onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="input-box">
                    <input type="projetonome" placeholder='projetonome' required onChange={e => setprojetonome(e.target.value)} />
                </div>
                <button type='submit'>Sign Up</button>
            </form>   
        </div>
    );
}