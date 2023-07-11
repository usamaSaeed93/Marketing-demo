import React from 'react'
import TeamWork from './TeamWork'
import arrow from '../../../Assets/Images/svg/arrow.svg'
import Image from 'next/image'
export default function Writtings() {
    const list: string[]=["Shopify Dev."," Paid Media" ,"Graphic Design" ,"Customer Support"," Data Analyst"]
  return (
   <>
   {/* <p className='text-white text-center font-space-grotesk text-24 font-bold w-1/2'>Our Team Gets to Work</p> */}
    <div className='flex flex-col max-w-[288px] w-full h-80 gap-2 justify-center items-center text-center rounded-[21px] border-3 border-solid border-[#EFEFEF] bg-white shadow-xl '>
<p className='text-black text-center font-space-grotesk text-base font-semibold leading-normal w-8/12 font-space'>DTC Brand Looking for Q4 Support:</p>
<ul className='text-start'>
    {list.map(l=>{
        return <li key={l} className='text-gray-500 font-space-grotesk text-base font-semibold leading-6 font-space'>{l}</li>
    })}
</ul>
<p className='text-black text-center font-space-grotesk text-base font-semibold leading-normal font-space'>Budget: $3K/Month</p>

    </div>
    {/* <Image 
    src={arrow}
    alt='arrow'
    className='rotate-90 md:rotate-0 mt-4'
    /> */}
    </>


  )
}
