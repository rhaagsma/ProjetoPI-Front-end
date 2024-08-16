import React, {useState, useContext} from 'react'
import './Navbar.css'
import logo from "../assets/Disco logo.png"
import carrinho from "../assets/carrinho.png"
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Context } from 'src/services/context'

const Navbar = () => {
    const[menu,setMenu] = useState("Home");
    const { authenticated } = useContext(Context);
    return (
        <nav className="w-full bg-[#21242D] flex items-center justify-center px-4 py-2">
            <div className="max-w-7xl flex items-center justify-between w-full">
                <div className="w-44">
                    <img src={logo} alt="Disco logo"/>
                    
                </div>

                <ul className="flex w-fit gap-4">
                    {/*adicionar as categorias*/}
                        <li onClick={()=>{setMenu("Home")}}><Link className= "text-white font-semibold"style={{ textDecoration: "none"}}to="/">Home</Link>{menu==="Home"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("Banda")}}><Link className= "text-white font-semibold"style={{ textDecoration: "none"}} to="/Banda">Banda</Link>{menu==="Banda"?<hr/>:<></>}</li>
                        {/*aqui pra baixo é apenas uma demonstração*/}
                        <li onClick={()=>{setMenu("Services")}}><Link className= "text-white font-semibold"style={{ textDecoration: "none"}} to="/">Services</Link>{menu==="Services"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("Contact")}}><Link className= "text-white font-semibold"style={{ textDecoration: "none"}} to="/">Contact</Link>{menu==="Contact"?<hr/>:<></>}</li>
                </ul>
                <div className="w-44 flex gap-4 items-center justify-end">
                    {authenticated ? (
                        <Link to='/profile'><button className='px-4 py-2 flex rounded-full items-center justify-center bg-white'>Conta</button></Link>
                    ) : (
                        <Link to='/login'><button className='px-4 py-2 flex rounded-full items-center justify-center bg-white'>Login</button></Link>
                    )}
                    <Link to='/cart'><ShoppingCart className='w-8 h-8 text-white' src={carrinho} alt="carrinho" /></Link>
                    {/*To do: trocar a imagem de carrinho e editar o css*/}
                </div>
            </div>
        </nav>
    )
}

export default Navbar