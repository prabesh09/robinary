// import React from 'react'
import Categories from "./Categories"
import Carousel from "./Carousel"

const Hero = () => {

    return (
        <div className="h-[50vh] py-10 flex items-top px-10 justify-between">
            <Categories />
            <Carousel />


            {/* <div className="w-[75em]">
                product cards
            </div> */}
        </div>
    )
}

export default Hero