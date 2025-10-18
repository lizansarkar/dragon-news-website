import React from 'react'
import SocialLogin from './SocialLogin'
import FindUs from '../components/FindUs'
import Qzone from '../components/Qzone'

export default function RightAside() {
  return (
    <div className=''>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  )
}
