import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function SocialLogin() {
  return (
    <div>
        <h2 className='font-bold py-5 text-center'>Login With</h2>
        <div className='flex flex-col gap-3'>
            <button className='btn btn-primary btn-outline'> <FaGoogle size={24}></FaGoogle> Login With Google</button>
            <button className='btn btn-primary btn-outline'> <FaGithub size={24}></FaGithub> Login With GitHub</button>
        </div>
    </div>
  )
}
