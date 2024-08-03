import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/Popular";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <p>This is the Home Page component.</p>
            <Hero/>
            <Popular/>
        </div>
    )
}

export default Home