import React from 'react'
import Fam from '../pics/Frame 265.png'
import '../About.css'
import Logo from '../pics/Logo divider (1).png'
import Vec1 from '../pics/Vector.png' 
import Vec2 from '../pics/Vector (1).png' 
import Vec3 from '../pics/Vector (2).png' 
import Vec4 from '../pics/Vector (3).png' 
import Boxes1 from './Boxes1'

export default function AboutBody() {
  return (
    <div>
        <div id="content">
            <img src={Fam} alt='..' id='fam'/>
            <p id="fam-text"> We endeavour to build homes which make it's residents happy and proud of their address. Residents are at heart of everything we do, we build homes to live in, not houses to stay in.</p>
        </div>
        <img src={Logo} alt='' id='box-divider'/>
        <Boxes1 img={Vec1}/>
        <Boxes1 img={Vec2}/>
        <Boxes1 img={Vec3}/>
        <Boxes1 img={Vec4}/>
    </div>
  )
}
