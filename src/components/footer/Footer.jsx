import React from "react";

import './Footer.css'
import footer_logo from '../assets/Disco logo.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
            </div>
            <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>      
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">

                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>Copyright @ 2024 - All Right Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer