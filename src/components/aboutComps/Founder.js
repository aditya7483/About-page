import React from 'react'
import Found from '../pics/founder.png'
import Logo from '../pics/Logo divider (1).png'

export default function Founder() {
    return (
        <div className='content2 mt-3'>
            <div>
                <div className='container found-cont d-flex flex-column align-items-center'>

                    <h4 className='heading'>FOUNDER'S MESSAGE</h4>
                    <img className='founder-img' src={Found} alt='..' />
                    <img src={Logo} className="my-2 headImg" alt='' />
                    <h4 className='fam-text my-3' style={{ fontStyle: 'normal' ,fontSize:'32px',color:'#474747',letterSpacing:'0.1em'}}>Mr. Jayesh H. Pandya</h4>
                    <p className='mytxt my-5 founder-para1 text-center' style={{ fontSize: '20px',width:'36rem' }}>
                        “When a customer buys a home, he is giving up a major chunk of his life's savings to do so. It is imperative to give him exactly what he looks for in his home.”
                    </p>

                    <p className='mytxt founder-para2 text-center' style={{width:'54rem'}}>
                        We bring to our clients much wanted human values, integrity, trust and an assurance of responsibility all coupled with our expertise in construction, engineering & management. Our biggest assets have always been our small but highly trained team of professional managers and engineers who are backed by a very able team of administrators. We have a clear vision about building on our strengths and our achievements while holding dear to us our basic principles
                    </p>
                </div>
                <img src={Logo} alt='' className='box-divider my-5' />
            </div>
        </div>
    )
}
