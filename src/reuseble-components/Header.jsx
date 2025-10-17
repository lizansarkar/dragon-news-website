import React from 'react'
import logo from '../assets/logo.png'
import { format } from 'date-fns'

export default function Header() {
  return (
    <nav className='flex flex-col justify-center items-center gap-3 py-5'>
        <img src={logo} alt="" />
        <p className='text-accent'>Journalism Without Fear or Favour</p>
        <span className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</span>
    </nav>
  )
}
