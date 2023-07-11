import React from 'react'
import Image from 'next/image'
import sixty3 from '../../../Assets/Images/png/image 63.png'
import avatar from '../../../Assets/Images/png/Ellipse 213.png'
import StarIcon from '@mui/icons-material/Star';
export default function ExpertTab() {
    const stars = Array(5).fill(<StarIcon className='text-[10px] sm:text-xs text-[#FFC226]' />);
    return (

        <div className='max-w-[220px] max-h-[350px] min-w-[150px]  rounded-[22px] border border-[#000] border-solid flex flex-col items-center border-opacity-10 '>
            <Image
                src={sixty3}
                alt='blur'
                className='rounded-t-[22px]'
            />
            <div className='relative sm:bottom-14 bottom-10 items-center justify-center'>
                <Image
                    src={avatar}
                    alt='avatar'
                    className='items-center m-auto w-20 sm:w-24'
                />
                <p className='font-bold text-2xl text-center font-space'>Adam</p>
                <p className='text-xs font-normal text-center ml-auto font-space'>Data Analyst & BI Tools</p>
                <div className='  flex flex-col gap-3 mt-3 p-2 '>
                    <div className='flex flex-row sm:gap-20 md:gap-10 lg:gap-20 gap-0 items-between justify-between'>
                        <span className='text-sm font-space'>
                            Salary
                        </span>
                        <span className='font-bold text-sm font-space'>
                            $80/hours
                        </span>
                    </div>


                    <div className='flex flex-row items-between justify-between'>
                        <span className='text-xs font-space'>
                            Years of Experience
                        </span>
                        <span className='text-xs font-bold font-space'>
                            10+
                        </span>
                    </div>
                    <div className='flex flex-row justify-between '>
                        <span className='text-xs font-space'>
                            Communication Skills
                        </span>
                        <span className='mb-2 '>

                            {stars.map((star, index) => (
                                <React.Fragment key={index}>{star}</React.Fragment>
                            ))}

                        </span>
                    </div>
                </div>
                    <span className='text-xs font-bold pl-3 font-space'>
                        40hrs/Week
                    </span>
                <div className="bg-gray-200 h-[6px] rounded-full mx-2">
                    <div
                        className="bg-bgButton h-full rounded-full"
                        style={{ width: '50%', minWidth: '120px', maxWidth: '200px' }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
