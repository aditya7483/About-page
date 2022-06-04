import React from 'react'
import Logo from '../pics/Logo divider.png'
import '../About.css'


export default function Heading() {
  return (
    <div>
        <div>
        <h4 id='heading'>ABOUT US</h4>
        <img src={Logo} alt='' id='headImg'/>
        </div>
        
    </div>
  )
}
