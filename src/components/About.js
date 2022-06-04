import React from 'react'
import AboutBody from './aboutComps/AboutBody'
import Companies from './aboutComps/Companies'
import Footer from './aboutComps/Footer'
import Founder from './aboutComps/Founder'
import Heading from './aboutComps/Heading'
import Mission from './aboutComps/Mission'
import Vision from './aboutComps/Vision'
import M1 from './pics/mission.png'
import M2 from './pics/mission2.png'

export default function About() {
  let mainhead1 = 'MISSION';
  let mainhead2 = 'Corporate Social Responsibility';

  let data1 = [
    {
      head: `Personalised`,
      text: `Our core idealogy is to provide personalised homes to meet the very specific needs of residents.`,
      count:'One'
    },
    {
      head: `Committed`,
      text: `Most of our buyers & brokers tag us as a “Committed Developer”. We always provide as promised`,
      count:'Two'
    },
    {
      head: `Quality & Service Oriented`,
      text: `Our relationship doesn't just end at the end of construction; we are with you throughout the journey.`,
      count:'Three'
    },
    {
      head: `Timely`,
      text: `99.9% of the time we have given flat possessions to buyers as per the agreed timeline.`,
      count:'Four'
    },
  ]
  let data2 = [
    {
      head: `Education for the under-privileged`,
      text: ` We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.`,
      count:'One'
    },
    {
      head: `Support for Rural Farmers`,
      text: `Most of our buyers & brokers tag us as a “Committed Developer”. We always provide as promised`,
      count:'Two'
    },
    {
      head: `Spiritual`,
      text: `Our relationship doesn't just end at the end of construction; we are with you throughout the journey.`,
      count:'Three'
    }
  ]

  return (
    <div>
      <Heading />
      <AboutBody />
      <Vision />
      <Mission mainHead={mainhead1} data={data1} img={M1} imgFirst={true}/>
      <Mission mainHead={mainhead2} data={data2} img={M2} imgFirst={false}/>
      <Founder/>
      <Companies/>
      <Footer/>
    </div>
  )
}
