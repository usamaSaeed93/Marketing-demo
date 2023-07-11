import React from 'react'
import ExpertTab from './ExpertTab'
import PriceTile from './PriceTile';
export default function Automation() {

  const stars = Array(3).fill(<ExpertTab />);
  return (
    <>

      <div className='automation__main flex flex-col px-4'>
        <div className='h-20 flex flex-row justify-between items-center border-b border-black border-solid border-opacity-10'>
          <p className='text-3xl font-bold ml-7 font-space'>Marketing Automation Experts</p>
          <div className=' flex-row hidden md:flex gap-4 mr-7'>
            <div className='w-5 h-5 rounded-full bg-[#4f59cc] opacity-25 '></div>
            <div className='w-5 h-5 rounded-full bg-[#4f59cc] opacity-50'></div>
            <div className='w-5 h-5 rounded-full bg-[#4f59cc]'></div>
          </div>
        </div>
        <div className='grid grid-cols-2 sm:gap-4 gap-2 md:grid-cols-2 lg:grid-cols-4 p-2 px-4 m-auto '>
          {stars.map((star, index) => (
            <React.Fragment key={index}>{star}</React.Fragment>
          ))}
        <PriceTile />
        </div>
      </div>

    </>
  )
}
