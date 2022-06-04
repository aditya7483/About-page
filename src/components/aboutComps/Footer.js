import React from 'react'
import Logo1 from '../pics/logo_final.png'
import Logo2 from '../pics/Frame 96.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='d-flex justify-content-between my-4'>
            <img src={Logo1} className='footer-logo' alt=""/>
            
            <div className='d-flex mt-5'>
                <div className='d-flex flex-column mx-3'>
                    <p className='fw-bold footer-txt'>Quick Links</p>
                    <p className='footer-txt-small'>Contact Us</p>
                    <p className='footer-txt-small'>About Us</p>
                    <p className='footer-txt-small'>Testimonial</p>
                    <p className='footer-txt-small'>Gallery</p>
                    <p className='footer-txt-small'>Site map</p>
                </div>
                <div className='d-flex flex-column mx-3'>
                    <p className='fw-bold footer-txt'>Flats in Mumbai</p>
                    <p className='footer-txt-small'>1BHK Andheri West</p>
                    <p className='footer-txt-small'>2 BHK Andheri West</p>
                    <p className='footer-txt-small'>3 BHK Andheri West</p>
                    <p className='footer-txt-small'>1BHK Goregaon East</p>
                    <p className='footer-txt-small'>2BHK Goregaon East</p>
                </div>
                <div className='d-flex flex-column mx-3'>
                    <p className='fw-bold footer-txt'>Projects in Mumbai</p>
                    <p className='footer-txt-small'>Ongoing</p>
                    <p className='footer-txt-small'>Upcoming</p>
                    <p className='footer-txt-small'>Completed</p>
                    <p className='footer-txt-small'>Hetali Blessings</p>
                    <p className='footer-txt-small'>Hetali Anuchhaya</p>
                </div>
            </div>
        </div>
        <div className='pb-4'>
        <img src={Logo2} className='footer-logo2 mb-4' alt=""/>
        <p className='footer-txt-small text-center'>Copyright © 2022 Hetali Enterprises - All Rights Reserved.</p>
        </div>
    </div>
  )
}
