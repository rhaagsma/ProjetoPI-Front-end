import React from "react";

const LoginSignup = () => {
    return (
        <div>
            <h1>Login/Signup</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default LoginSignup