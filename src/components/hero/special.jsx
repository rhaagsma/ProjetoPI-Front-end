import React from "react"
import specialGif from "../assets/bob.gif"

const Special = () => {
    return (
        <div className="special-page flex justify-center items-center h-screen">
            <img className="w-full max-w-md" src={specialGif} alt="Special GIF" />
        </div>
    )
}

export default Special