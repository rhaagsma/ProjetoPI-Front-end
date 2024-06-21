import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

import "./Navbar.css"
import SearchBar from "../searchbar/Searchbar";
import SearchResults from "../searchbar/SearchResults";
const Navbar = () => {


    return(
        
            <nav className="nav">
                <div className="nav-logo">
                    <p>Disco</p>
                </div>
                <div className="search-bar-container">
                    <SearchBar />
                    <SearchResults  />
                </div>
                <div className="nav-menu" id="navMenu">
                    <ul>
                    <li><Link to="Sobre" className="link">Sobre</Link></li>
                    <li><Link to="Atendimento" className="link">Atendimento</Link></li>
                    <li><Link to="Pedro" className="link">Login</Link></li>
                    </ul>
                </div>  
                
            </nav>  

    )
}
export default Navbar