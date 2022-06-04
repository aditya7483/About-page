import React from 'react'
import Logo from '../pics/Logo divider (1).png'
import Img1 from '../pics/image 3.png'
import Img2 from '../pics/image 5.png'
import Img3 from '../pics/image 9.png'

export default function Companies() {
    return (
        <div>
            <h4 className='my-4 heading'>GROUP COMPANIES</h4>
            <img src={Logo} className="my-2 headImg" alt='' />
            <div className='d-flex my-4'style={{width:'79vw',margin:'auto'}}>
                <div>
                    <img src={Img1} className="my-2 comp-img1" alt='' />
                    <h4 className='fam-text comp-text'>Agriculture</h4>
                </div>

                <div>
                    <img src={Img2} className="my-2 comp-img2" alt='' />
                    <h4 className='fam-text comp-text'>Fuel</h4>
                </div>

                <div>
                    <img src={Img3} className="my-2 comp-img1" alt='' />
                    <h4 className='fam-text comp-text'>Foods</h4>
                </div>
            </div>
        </div>
    )
}
