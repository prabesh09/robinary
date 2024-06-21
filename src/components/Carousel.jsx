//import React from 'react'

import { useEffect } from "react";
import { useState } from "react"

const Carousel = () => {
    const carousel = ["banner", "banner2", "banner3"]
    const [current, setCurrent] = useState(0);

    const handleChange = () => {
        setCurrent(current < 2 ? current + 1 : 0)
    }

    useEffect(() => {
        const timeout = setTimeout(handleChange, 2000)
        return () => clearTimeout(timeout)
    }, [current])

    return (
        <div className="w-full flex justify-center items-center gap-2">
            <img src={`${carousel[current]}.png`} alt="" className="h-full" />
            {/* <button onClick={handleChange} className="bg-red-500 text-white px-5 rounded-2xl">
                NEXT
            </button> */}
        </div >)
}

export default Carousel