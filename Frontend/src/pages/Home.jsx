import React from 'react'
import homeImg from '../assets/home.png';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div
        className='bg-cover bg-center bg-no-repeat h-screen pt-8 w-full flex justify-between flex-col'
        style={{ backgroundImage: `url(${homeImg})`, backgroundSize: '100% 100%' }}
      >
          <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
          <div className='bg-white pb-7 py-4 px-4'>
              <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
              <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
          </div>
      </div>
    </div>
  )
}

export default Home