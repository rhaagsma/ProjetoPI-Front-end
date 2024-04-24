import React from "react"
import SignUpForm from './signUp/signUpForm.tsx'
import LoginForm from "./login/loginForm.tsx"

const LognUp = () => {
    return(
        <div className ="container" id="container">
        <div className= "toggle-container">
            <div className= "toggle">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                       
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello!</h1>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
    
    
}
export default LognUp;