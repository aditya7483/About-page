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
  let txt1 = 'Our track record has been impeccable with project completion on time and have surpassed expectations many a time, society members have positively received our redevelopment plans and encourage our modern and urbane designs to their neighbours. ';
  let txt2 = 'The Hetali Group is a redeveloper like no other with a profound focus on quality and long term satisfaction of its residents.';
  let txt3 = `They just don't endeavour but build homes which make it's residents proud of their address by putting home-owners at the heart and soul of everything they do from start to finish and post completion.`;
  let txt4 = `Hetali Group lives by the ethos of building homes to live and not houses to stay in.`;

  return (
    <>
      <div className="content">
        <img src={Fam} alt='..' id='fam' />
        <p className="fam-text"> We endeavour to build homes which make it's residents happy and proud of their address. Residents are at heart of everything we do, we build homes to live in, not houses to stay in.</p>

        <img src={Logo} alt='' className='box-divider' />
        <div className='container' style={{ maxWidth: '945px' }}>
          <div className='row'>
            <div className='col'>
              <Boxes1 img={Vec1} txt={txt1} />
            </div>

            <div className='col'>
              <Boxes1 img={Vec2} txt={txt2} />
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <Boxes1 img={Vec3} txt={txt3} />
            </div>

            <div className='col'>
              <Boxes1 img={Vec4} txt={txt4} />
            </div>
          </div>
        </div>
        <div className='black-box my-4'></div>
        <p className='big-para'>Established in 1992, Hetali Group is a leading real estate developer of residential spaces across Mumbai and have earned an unmatched reputation amongst its very loyal customers. The company's customer-centric values, project management proficiency and technical expertise are amplified with over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading to more than families!

          The Hetali Group promises a lifestyle second to none. In a span of over four decades, the group has proved to be one of the most reputed real estate builders in the western suburbs of Mumbai with residences in prime locations such as Andheri, Goregaon, Vile Parle and Juhu.

          Spearheaded by Mr Jayesh Pandya, the company's central ideology is to provide homes customized to the customer's requirements and home’s that are superior in nature keeping in mind the needs of the modern home user.
        </p>
      </div>
    </>
  )
}
