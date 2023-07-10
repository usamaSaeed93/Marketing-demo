import React from 'react'
import Image from 'next/image'
import chart from '../../../Assets/Images/png/chart.png'
function Platform() {
  return (
    <>
     {/* <p className='text-white text-center font-space-grotesk text-24 font-bold w-1/2'>Tell us what you need done</p> */}
    <div className='flex flex-col max-w-[288px] w-full max-h-80 gap-2 justify-center items-center text-center  p-4 rounded-[21px] border-3 border-solid border-[#EFEFEF] bg-white shadow-xl'>
<Image 
src={chart}
alt='chart'
width={248}
height={265}
/>
    </div>
    </>
  )
}

export default Platform