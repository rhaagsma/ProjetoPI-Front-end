import React from "react"
import './Hero.css'
import gati from "../assets/gati firte.png"
import { Navigate, Link } from "react-router-dom"
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>The cats with earphones!!</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src="aba"alt="Icone auper legal de um icone super legal de um icone super legal de um icone super legal de um icone super icone legal icone"/>
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <button className="hero-latest-btn">
                    <Link to="/special">
                        <div>Latest Collection</div>
                        <img src="arrow_icon" alt="" />
                    </Link>
                </button>
            </div>
            <div className="hero-right">
                <img src={gati} alt="" />
                
            </div>
        </div>
    )
}

export default Hero
