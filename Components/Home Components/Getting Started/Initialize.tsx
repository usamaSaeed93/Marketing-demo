import React from 'react'
import MatchedTopTalent from './MatchedTopTalent'
import Platform from './Platform'
import Image from 'next/image'
import TeamWork from './TeamWork'
import Writtings from './Writtings'
import arrow from '../../../Assets/Images/png/bigArrow.png'
import straight from '../../../Assets/Images/png/straight.png'
function Initialize() {
    return (
        <>

            <div className='flex flex-col  m-auto py-10 gap-4 '>
                <p className='common__headings text-white pb-20 sm:pb-2'> Getting started is easy</p>
                <div className='grid  grid-cols-1 xsm:grid-cols-2 sm:gap-4 gap-4 md:grid-cols-2 lg:grid-cols-4 md:ml-[10%] lg:ml-0 m-auto md:m-0 p-auto px-2  pb-20'>
                    <Writtings />
                    <TeamWork />
                    <MatchedTopTalent />
                    <Platform />

                </div>
<button className='getStarted__button m-auto mb-36 xsm:mb-0 sm:mb-0 lg:mb-36 shadow-[0px_30px_40px_-20px] shadow-[#4F59CC] font-space'>
Get Started
</button>
                {/* <Image
                    src={arrow}
                    alt="arrow"
className='rotate-90 lg:rotate-0 m-auto hidden lg:flex'
                />
                <Image 
                src={straight}
                alt='none'
                className='lg:hidden ml-[20%] h-11/12'
                /> */}
            </div>
        </>
    )
}

export default Initialize