import React from 'react'
import Marquee from 'react-fast-marquee'

export default function LetestNews() {
  return (
    <div className='flex items-center gap-5 bg-base-200 p-3'>
        <button className='btn btn-secondary'>Latest</button>
        <Marquee className='flex gap-10' pauseOnHover={true} speed={70}>
            <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            
            <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            
            <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
        </Marquee>
    </div>
  )
}
