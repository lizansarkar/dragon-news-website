import React, { use } from 'react'
import { Link, NavLink } from 'react-router-dom'
import userImg from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider'

export default function Navbar() {
  const {user} = use(AuthContext);

  return (
    <nav className='flex justify-between items-center'>
        <div className='text-secondary'>
          {
            user && user.email
          }
        </div>
        <div className='nav text-accent flex gap-5'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </div>
        <div className='login-btn flex gap-3'>
            <img src={userImg} alt="" />
            <Link to="/auth/login" className='btn btn-primary'>Login</Link>
        </div>
    </nav>
  )
}
