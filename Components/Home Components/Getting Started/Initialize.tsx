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

            <div className='flex flex-col  m-auto py-10 gap-4'>
                <div className='flex flex-col md:flex-row flex-wrap  lg:flex-nowrap  items-center justify-evenly m-auto md:m-0 gap-10 pb-20'>
                    <Writtings />
                    <TeamWork />
                    <MatchedTopTalent />
                    <Platform />

                </div>
<button className='getStarted__button m-auto mb-36 shadow-[0px_30px_40px_-20px] shadow-[#4F59CC] font-space'>
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