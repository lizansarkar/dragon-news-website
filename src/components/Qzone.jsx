import React from 'react'
import swimmingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playgroundImg from '../assets/playground.png'

export default function Qzone() {
  return (
    <div className='bg-base-200 p-5 text-center rounded-sm'>
        <h2 className="font-bold">Q-Zone</h2>
        <div className='flex flex-col items-center'>
            <img src={swimmingImg} alt="" />
            <img src={classImg} alt="" />
            <img src={playgroundImg} alt="" />
        </div>
    </div>
  )
}
