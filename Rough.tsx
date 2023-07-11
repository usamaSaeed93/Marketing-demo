'use client'
import React from 'react'
import OurTalent from './Components/Home Components/Talent Components/OurTalent'
import Initialize from './Components/Home Components/Getting Started/Initialize'
import Automation from './Components/Home Components/Automation Experts Components/Automation'
import Experts from './Components/Home Components/Experts'



function Rough() {
  const styles={
  

    width:"100%"
  }
  return (
    <div className='bg_black' style={styles}>
        <Experts />
<OurTalent />
<Initialize />
    </div>
  )
}
export default Rough