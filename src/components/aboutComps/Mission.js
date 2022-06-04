import React from 'react'
import Logo from '../pics/Logo divider.png'

export default function Mission(props) {
    return (
        <div>
            <h4 className='vision-head'>
                {props.mainHead}
            </h4>
            <img src={Logo} alt='' id='headImg'/>

            <div>
                
            </div>
        </div>
    )
}
