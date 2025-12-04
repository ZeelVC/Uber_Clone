import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-[-50px_center] bg-[url("https://images.stockcake.com/public/0/0/9/009e6881-cd84-498e-9f05-218d071bfd6c_large/sunset-traffic-light-stockcake.jpg")] h-screen pt-8 w-full flex justify-between flex-col bg-red-400'>
            <img className='w-16 ml-8 mt-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home