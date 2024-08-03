import React, {useState} from 'react'
import './Navbar.css'
import logo from "../assets/Disco logo.png"
import carrinho from "../assets/carrinho.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const[menu,setMenu] = useState("Home");
    
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Disco logo"/>
                
            </div>

            <ul className="nav-menu">
                {/*adicionar as categorias*/}
                    <li onClick={()=>{setMenu("Home")}}><Link style={{ textDecoration: "none"}}to="/">Home</Link>{menu==="Home"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Banda")}}><Link style={{ textDecoration: "none"}} to="/Banda">Banda</Link>{menu==="Banda"?<hr/>:<></>}</li>
                    {/*aqui pra baixo é apenas uma demonstração*/}
                    <li onClick={()=>{setMenu("Services")}}><Link style={{ textDecoration: "none"}} to="/">Services</Link>{menu==="Services"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Contact")}}><Link style={{ textDecoration: "none"}} to="/">Contact</Link>{menu==="Contact"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                
                {/*link para a página de login*/}
                <Link to='/login'><button>Login</button></Link>
                
                <Link to='/cart'><img className='carrinho' src={carrinho} alt="carrinho" /></Link>
                {/*To do: trocar a imagem de carrinho e editar o css*/}
                <div className="nav-cart-count">0</div>
            </div>
        </nav>
    )
}

export default Navbar