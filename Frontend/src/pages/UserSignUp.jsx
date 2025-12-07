import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    const currentData = {
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
    }
    setUserData(currentData)
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />

          <h3 className='text-lg font-medium mb-2'>What's your name?</h3>

          <div className='mb-7 flex gap-4'>
          <input 
            required
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
            type="text"
            placeholder='First name' />
            <input 
            required
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
            type="text"
            placeholder='Last name' />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          
          <input 
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com' />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input
            required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password' />

          <button 
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>
        </form>
          <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignUp