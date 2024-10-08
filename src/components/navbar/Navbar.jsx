import React, {useState, useContext, useEffect} from 'react'

import logo from "../assets/Disco logo.png"
import carrinho from "../assets/carrinho.png"
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Context } from 'src/services/context'
import { BandOption } from './BandOption'
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuLink,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import { getAllBands } from 'src/services/bands'
import { CategoriesOption } from './CategoriesOption'
import { getAllCategories } from 'src/services/categories'

const Navbar = () => {
    const[menu,setMenu] = useState("Home");
    const [bands, setBands] = useState([]);
    const [categories, setCategories] = useState([]);
    const { authenticated } = useContext(Context);

    useEffect(() => {
        async function fetchData() {
            const res = await getAllBands()
            const res2 = await getAllCategories()
            setCategories(res2)
            setBands(res)
        }

        fetchData()
    }, [])

    return (
        <nav className="w-full bg-[#21242D] flex items-center justify-center px-4 py-2">
            <div className="max-w-7xl flex items-center justify-between w-full">
                <div className="w-44">
                    <img src={logo} alt="Disco logo"/>
                    
                </div>

                <ul className="flex w-fit gap-4">
                <NavigationMenu>
                <NavigationMenuList>
                    <div className="cursor-pointer" onClick={()=>{setMenu("Home")}} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} href='/'>Home</NavigationMenuLink>
                    </div>
                    {/* <li onClick={()=>{setMenu("Home")}}><Link className= "text-white font-semibold"style={{ textDecoration: "none"}}to="/">Home</Link>{menu==="Home"?<hr/>:<></>}</li> */}
                    <BandOption menu={menu} setMenu={setMenu} bands={bands}/>
                    <CategoriesOption menu={menu} setMenu={setMenu} categories={categories}/>
                </NavigationMenuList>
                </NavigationMenu>
                    {/*adicionar as categorias*/}
                        {/* <li onClick={()=>{setMenu("Banda")}}><Link className= "text-white font-semibold"style={{ textDecoration: "none"}} to="/Banda">Banda</Link>{menu==="Banda"?<hr/>:<></>}</li> */}
                </ul>
                <div className="w-44 flex gap-4 items-center justify-end">
                {authenticated ? (
                    <div className="relative">
                    <Link to='/profile'>
                        <button className='px-4 py-2 flex rounded-full items-center justify-center bg-white'>
                        Conta
                        </button>
                    </Link>

                    </div>
                ) : (
                    <Link to='/login'>
                    <button className='px-4 py-2 flex rounded-full items-center justify-center bg-white'>
                        Login
                    </button>
                    </Link>
                )}
                <Link to='/cart'>
                    <ShoppingCart className='w-8 h-8 text-white' src={carrinho} alt='carrinho' />
                </Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar