import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function SocialLogin() {
  return (
    <div>
        <h2 className='font-bold'>Login With</h2>
        <div className='flex flex-col gap-3'>
            <button className='btn btn-info btn-outline mt-5'> <FaGoogle size={24}></FaGoogle> Login With Google</button>
            <button className='btn btn-success btn-outline'> <FaGithub size={24}></FaGithub> Login With GitHub</button>
        </div>
    </div>
  )
}
