import React from "react"
import Hero from "../components/hero/Hero"
import AllProducts from "../components/popular/AllProducts"
import Offers from "../components/offers/Offers"

const Home = () => {
    return (
        <div className="home-container">
            <Hero/>
            <AllProducts/>
        </div>
    )
}

export default Home