import React from 'react'
import { NavLink } from 'react-router-dom'
import user from '../assets/user.png'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center'>
        <div className=''></div>
        <div className='nav text-accent flex gap-5'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </div>
        <div className='login-btn flex gap-3'>
            <img src={user} alt="" />
            <button className='btn btn-primary'>Login</button>
        </div>
    </nav>
  )
}
