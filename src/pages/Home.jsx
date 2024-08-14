import React from "react"
import Hero from "../components/Hero/Hero"
import Popular from "../components/popular/Popular"
import Offers from "../components/offers/Offers"

const Home = () => {
    return (
        <div className="home-container">
            <Hero/>
            <Popular/>
            <Offers/>
        </div>
    )
}

export default Home