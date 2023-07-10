import React from 'react'
import Tile1 from './Tile1'
import Tile2 from './Tile2'
import Tile3 from './Tile3'
function Side() {
  return (
    <div className=' flex flex-col bg-black w-full lg:w-1/2 min-h-[1020px] justify-center items-center gap-4 py-10'>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-y-10 gap-8'>
        <Tile1 />
        <p className='text-white font-space-grotesk text-xl font-bold text-center max-w-[244px] '>Multi-Step Vetting Process of Experts</p>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-y-10 gap-8'>
        <Tile2 />
        <p className='text-white font-space-grotesk text-xl font-bold text-center max-w-[244px]'>One Platform to Manage & Deletage Tasks</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-y-10 justify-center items-center gap-8'>
        <Tile3 />
        <p className='text-white font-space-grotesk text-xl font-bold text-center max-w-[244px]'>Transparent Pricing, Streamlined Payments & Compliance</p>
      </div>
    </div>
  )
}

export default Side