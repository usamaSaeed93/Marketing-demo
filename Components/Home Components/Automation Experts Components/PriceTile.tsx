
import React from 'react'
import { useState } from 'react'
export default function PriceTile() {
 
  
  return (
    <>
    <div className='flex flex-col gap-4 pr-4 justify-center items-center align-middle'>

   
    <div className='flex flex-col price__tile  border p-4 border-solid border-black rounded-[23px]'>
     <div className='justify-center items-center text-center flex flex-col mt-[15%]'>
        <p className='text-base font-normal text-center'>
        Assembly Monthly Cost
        </p>
        <span className='text-base text-center font-bold'>
        $2,800 / month
        </span>
     </div>
    </div>
        <div className='flex flex-col price__tile  border p-4 border-solid border-black rounded-[23px] border-opacity-25' >
        <div className='justify-center items-center text-center flex flex-col mt-[15%]'>
           <p className='text-base font-normal text-center opacity-25'>
           Assembly Monthly Cost
           </p>
           <span className='text-base text-center font-bold opacity-25'>
           $2,800 / month
           </span>
        </div>
       </div>
       </div>
       </>
  )
}
