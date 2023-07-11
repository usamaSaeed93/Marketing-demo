'use client'
import React from 'react'
import Image from 'next/image'
import avatar from '../../../Assets/Images/svg/man.svg'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function MatchedTopTalent() {
    return (
        <>
        {/* <p className='text-white text-center font-space-grotesk text-24 font-bold w-1/2'>Tell us what you need done</p> */}
        <div className=' flex flex-col w-full max-w-[288px] max-h-80 gap-2 items-center  justify-start overflow-hidden  rounded-[21px] border-3 border-solid border-[#EFEFEF] bg-white shadow-xl px-4 py-1'>
            {[1, 2, 3, 4].map((index) => (
                <div key={index} className='flex flex-row border border-black border-opacity-10 rounded-[10px]'>
                    <Image
                        src={avatar}
                        alt='none'
                        width={50}
                        height={40}
                    />
                    <div className='flex flex-col p-2'>
                        <p className='text-black font-space-grotesk text-[15.658px] font-semibold leading-[17.143px] font-space'>Adam</p>
                        <p className='text-black font-space-grotesk text-[9.91px] font-normal leading-[15.865px] font-space'>Data Analyst</p>
                        <div className='flex flex-row gap-2 items-center justify-center text-center'>
                            <span className='font-xs font-medium font-space'>20$/hour</span>
                            <span className='cursor-pointer text-xs font-medium font-space'>View Work  <ArrowRightIcon /></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default MatchedTopTalent