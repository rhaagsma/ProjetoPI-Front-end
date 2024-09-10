import React from "react"
import './Hero.css'
import gati from "../assets/gati firte.png"
import { Navigate, Link } from "react-router-dom"
const Hero = () => {
    return (
        <div className="flex items-center justify-center h-[50vh] py-7">
            <div className="w-full flex max-w-7xl h-full rounded-md bg-slate-300 items-center justify-center">
                <h1 className="text-slate-700">Carrosel</h1>
            </div>
        </div>
    )
}

export default Hero
