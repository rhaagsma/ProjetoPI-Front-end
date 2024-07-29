import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="#">Logo</a>
            </div>
            <div className="navbar-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar