'use client'
import React from 'react'
import blur from '../../../Assets/Images/png/Ellipse 196.png'
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import avatar from '../../../Assets/Images/png/talent_man.png'
import seventy1 from '../../../Assets/Images/png/image 71.png'
import seventy2 from '../../../Assets/Images/png/image 72.png'
import seventy3 from '../../../Assets/Images/png/image 73.png'
export default function TalentTab() {
    const stars = Array(5).fill(<StarIcon className='text-sm sm:text-3xl text-[#FFC226]' />);
    return (
        <div className='max-w-[450px] max-h-fit min-w-[320px] m-4 sm:m-0 rounded-[22px] border border-[#000] border-solid flex flex-col items-center border-opacity-10 '>
            <Image
                src={avatar}
                alt='blur'
                className='rounded-t-[22px] w-full object-contain'
            />
            <div className='relative bottom-24 sm:bottom-30 items-center justify-center object-cover w-11/12 m-auto'>
                <Image
                    src={blur}
                    alt='avatar'
                    className='items-center m-auto max-w-[188px] min-w-[150px] fill-current'
                />
                <p className='font-bold text-3xl sm:text-4xl text-center'>Adam</p>
                <p className='text-lg sm:text-2xl font-normal text-center m-auto'>Data Analyst & BI Tools</p>
                <div className='  flex flex-col gap-3 mt-3 p-2 w-11/12 '>
                    <div className='flex flex-row sm:gap-20 md:gap-10 lg:gap-20 gap-0 items-between justify-between'>
                        <span className='text-base sm:text-large '>
                            Salary
                        </span>
                        <span className='font-bold text-sm sm:text-large'>
                            $80/hours
                        </span>
                    </div>


                    <div className='flex flex-row items-between justify-between'>
                        <span className='text-base sm:text-large'>
                            Years of Experience
                        </span>
                        <span className='text-sm sm:text-large font-bold'>
                            10+
                        </span>
                    </div>
                    <div className='flex flex-row justify-between gap-x-1/2 '>
                        <span className='text-base sm:text-large'>
                            Communication Skills
                        </span>
                        <span className='mb-2 text-sm sm:text-large'>

                            {stars.map((star, index) => (
                                <React.Fragment key={index}>{star}</React.Fragment>
                            ))}

                        </span>
                    </div>
                </div>
              <div className="flex flex-row justify-evenly items-center">
                <Image 
                src={seventy1}
                alt='adobe'
                />
                 <Image 
                src={seventy2}
                alt='adobe'
                />
                 <Image 
                src={seventy3}
                alt='adobe'
                />
              </div>
            </div>
        </div>
    )
}
