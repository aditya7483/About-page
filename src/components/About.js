import React from 'react'
import AboutBody from './aboutComps/AboutBody'
import Heading from './aboutComps/Heading'
import Mission from './aboutComps/Mission'
import Vision from './aboutComps/Vision'
import M1 from './pics/mission.png'
import M2 from './pics/mission2.png'

export default function About() {
  mainhead1='MISSION';
  mainhead2='Corporate Social Responsibility';

  head1=[
    `Personalised`,
    `Committed`,
    `Quality & Service Oriented`,
    `Timely `,
]
  head2=[
    `Education for the under-privileged`,
    `Support for Rural Farmers`,
    `Spiritual`
]

  text1=[
    ` Our core idealogy is to provide personalised homes to meet the very specific needs of residents.`,
    `Most of our buyers & brokers tag us as a “Committed Developer”. We always provide as promised `,
    `Our relationship doesn't just end at the end of construction; we are with you throughout the journey.`,
    `99.9% of the time we have given flat possessions to buyers as per the agreed timeline.`
  ]
  text2=[
    ` We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.
    `,
    `Most of our buyers & brokers tag us as a “Committed Developer”. We always provide as promised`,
    `Our relationship doesn't just end at the end of construction; we are with you throughout the journey.
    `,
  ]


  return (
    <div>
        <Heading/>
        <AboutBody/>
        <Vision/>
        <Mission mainHead={mainhead1} text={text1} img={M1}/>
        <Mission mainHead={mainhead2} text={text2} img={M2}/>
    </div>
  )
}
