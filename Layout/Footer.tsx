'use client'
import React from 'react'
import Image from 'next/image'
import map from '../Assets/Images/png/map.png'
import logo from '../Assets/Images/svg/logoblack.svg'
import { Twitter, LinkedIn } from '@mui/icons-material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
export default function Footer() {
    return (
        <div className=' bg-black flex flex-col '>
            <div className='flex bg-black h-[400px] mt-10 justify-evenly items-center md:flex-row flex-col  border-b mb-4 border-solid border-white'>
                <div>
                    <p className='text-white text-center  text-24 font-normal mt-32' style={{ marginTop: "130px" }}>Critical Project Work Completed by Top 1% Experts</p>
                    <p className='lg:text-[650px] sm:text-[55px] text-[40px] text-white text-center p-3 font-bold'>At a fraction of the cost</p>
                    <Image
                        src={map}
                        alt='map'
                    />
                </div>
                <div className='flex flex-col items-center mb-10 '>
                    <Image
                        src={logo}
                        alt='logo'
                    />
                    <p className='para mt-[40px] font-space'>Assembly Industries allows companies to scale their business cost effectively by hiring vetted fractional experts.</p>
                    <span className='text-3xl text-white mb-[30px] font-space'>Links</span>
                    <div className='flex flex-row gap-10 mb-36' style={{ marginBottom: "150px" }}>
                        <div className='flex flex-col gap-4 mt-4'>
                            <span className='textfooter font-space'>
                                Privacy Policy
                            </span>
                            <span className='textfooter font-space'>
                                Terms of Use
                            </span>
                        </div>
                        <div className='flex flex-col gap-4 mt-4'>
                            <span className='textfooter font-space'>
                                Contact us
                            </span>
                            <span className='textfooter font-space'>
                                Roles & Capabilities
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-evenly py-10'>


                <div className=' gap-4 flex items-center justify-center'>
                    <Twitter className='text-white font-bold' />
                    <LinkedIn className='text-white font-bold' />
                </div>
                <p className='text-base text-white text-center w-1/2 sm:w-full font-space'>© 2023 Assembly Industries. All rights reserved.</p>
                <div className='w-5 h-5 sm:w-10 sm:h-10  fixed rounded-full bg-bgButton text-center  flex items-center justify-center '>
                    <ArrowDropUpIcon className='text-white font-bold mt-2' />
                </div>
            </div>
        </div>
    )
}
