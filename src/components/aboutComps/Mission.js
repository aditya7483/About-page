import React from 'react'
import Logo from '../pics/Logo divider.png'
import Dropdown from './Dropdown'

export default function Mission(props) {
    return (
        <div>
            <h4 className='vision-head my-3' style={{color: '#474747'}}>
                {props.mainHead}
            </h4>
            <img src={Logo} className="mt-5 headImg"alt='' />

            <div className='d-flex justify-content-evenly my-5'>
            {props.imgFirst&&<img src={props.img} alt='' id='drop-img' />}
                <div className='align-self-center'>

                    {props.data.map(elem => {
                        return <Dropdown head={elem.head} key={elem.head} count={elem.count} text={elem.text} />
                    })}
                </div>
            {!props.imgFirst&&<img src={props.img} alt='' id='drop-img' />}
                    
            </div>
        </div>
    )
}
