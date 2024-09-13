import React from "react"
import './Hero.css'
import gati from "../assets/gati firte.png"
import { Navigate, Link } from "react-router-dom"
import  MultipleItems  from "../MultipleItems"
import Layout from "../layout"
const Hero = () => {
    return (
        <Layout>
            <MultipleItems/>
        </Layout>
    )
}

export default Hero
