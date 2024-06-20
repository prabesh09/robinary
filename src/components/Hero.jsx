// import React from 'react'
import Categories from "./Categories"

const Hero = () => {
    return (
        <div className="h-[50vh] py-10 flex items-top px-10 justify-between">
            <Categories />
            <div className="w-full flex justify-center">
                <img src="../public/banner.png" alt="" className="h-full" />
            </div>
        </div>
    )
}

export default Hero