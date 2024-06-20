// import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[7rem] bg-white flex justify-between px-10 py-5'>
            <div>
                <img className='h-full' src="../public/logo.png" alt="Robinary" />
            </div>
            <div className='text-purple-900 flex items-center gap-10'>
                <ul className='flex gap-10'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Order</li>
                    <li>Offer</li>
                    <li>Contact</li>
                    <li>Sign up</li>
                </ul>

                <input type="text" className='bg-purple-900 rounded placeholder:text-white placeholder:opacity-70 px-2 py-1 outline-none border-none text-white' placeholder='Search for items...' />
            </div>
            <div className='flex gap-2 items-center'>
                <section>favorites</section>
                <section>
                    cart
                </section>
                <section>account</section>
            </div>
        </div>
    )
}

export default Navbar