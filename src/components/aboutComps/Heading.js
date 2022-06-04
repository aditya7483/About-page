import React from 'react'
import Logo from '../pics/Logo divider.png'
import '../About.css'


export default function Heading() {
  return (
    <div>
        <div>
        <h4 className='heading'>ABOUT US</h4>
        <img src={Logo} alt='' className='headImg'/>
        </div>
        
    </div>
  )
}
