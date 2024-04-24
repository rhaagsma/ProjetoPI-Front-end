import React from "react"
import './Home.css'

const Home  = () =>{
    return(
        <div className="Bar">
            <img className="logo" src="" alt="logo" />
            <nav>
                <ul className="nav_links">
                    <li><a href="#">Pedro</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <a className= "cta" href=""><button>Sign In</button></a>
        </div>
    )

}

export default Home;