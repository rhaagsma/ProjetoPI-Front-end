import React, {useState} from 'react'
import './Navbar.css'
import logo from "../assets/Disco logo.png"
import carrinho from "../assets/carrinho.png"

const Navbar = () => {
    const[menu,setMenu] = useState("Home");
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Disco logo" href="#"/>
                
            </div>

            <ul className="nav-menu">
                    <li><a onClick={()=>{setMenu("Home")}}href="#">Home{menu==="Home"?<hr/>:<></>}</a></li>
                    <li><a onClick={()=>{setMenu("About")}}href="#">About{menu==="About"?<hr/>:<></>}</a></li>
                    <li><a onClick={()=>{setMenu("Services")}}href="#">Services{menu==="Services"?<hr/>:<></>}</a></li>
                    <li><a onClick={()=>{setMenu("Contact")}}href="#">Contact{menu==="Contact"?<hr/>:<></>}</a></li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img className='carrinho' src={carrinho} alt="carrinho" />
                <div className="nav-cart-count">0</div>
            </div>
        </nav>
    )
}

export default Navbar