import React from 'react'
import middle  from '../../../Assets/Images/png/middle_image.png'
import Image from 'next/image'
export default function TeamWork() {
    const style={
        backgroundImage:`url("../../../Assets/Images/png/bg_blur.png")`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain"
    }
  return ( 
    <>
     {/* <p className='text-white text-center font-space-grotesk text-24 font-bold w-1/2'>Tell us what you need done</p> */}
    <div className='background flex flex-col max-w-[288px] h-80 w-full  gap-2 justify-center items-center bg-cover bg-center bg-no-repeat  rounded-[21px] border-3 border-solid border-[#EFEFEF] bg-white shadow-xl font-space' >
<Image 
src={middle}
alt='middle'
width={140}
height={140}
/>
    </div>
</>
  )
}
