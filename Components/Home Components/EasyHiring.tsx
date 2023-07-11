import React from 'react'
import Image from 'next/image'
import group from '../../Assets/Images/png/Group 195.png'
import plus from '../../Assets/Images/svg/plus.svg'
import arrow from '../../Assets/Images/svg/arrow.svg'
export default function EasyHiring() {
    return (
        <div className='mb-[80px] lg:mb-[145px]'>
            <p className='common__headings mt-[80px] lg:mt-[145px] px-4 font-space'>Global Fractional Hiring Made Easy</p>
            <p className='mb-[130px] text-2xl font-normal  p-4 text-center font-space'>We find you amazing talent that you can hire on a fractional basis in 24 hours - It's that simple.</p>

        <div className='flex flex-col lg:flex-row justify-evenly items-center gap-[24px] md:gap-0'>
            <Image
                src={group}
                alt='map'

            />
            <Image
                src={plus}
                alt='plus'
            />
            <div>
            </div>
            <div className="sm:h-[230px] sm:w-[230px] h-[270px] w-[270px] min-w-fit min-h-fit flex-row flex rounded-full overflow-hidden shadow-lg outline-white border-[12px] border-white">
                <div className=" w-1/2 h-full bg-[#EFEFEF]"></div>
                <div className=" w-1/2 h-full bg-bgButton text-[24px] font-bold text-white items-center flex justify-center text-left"><span className='justify-center items-center text-left w-[70px]'>20 <br /><span className='font-normal w-[70px]'>Hours/ <br /> Week</span></span></div>

            </div>
            <Image
                src={arrow}
                alt='arrow'
                className='rotate-90 md:rotate-0'
            />
            <div className='flex flex-col gap-[20px]  '>


                <div className='quality__tile'>
                    Domain Expertise
                </div>
                <div className='quality__tile'>
                    Cost Saving
                </div>
                <div className='quality__tile'>
                    Pre-Vetted
                </div>
            </div>
        </div>
        </div>
    )
}
