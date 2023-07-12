import React from "react";
import MatchedTopTalent from "./MatchedTopTalent";
import Platform from "./Platform";
import Image from "next/image";
import TeamWork from "./TeamWork";
import Writtings from "./Writtings";
import arrow from "../../../Assets/Images/png/bigArrow.png";
import straight from "../../../Assets/Images/png/straight.png";
function Initialize() {
  return (
    <>
      <div className="flex flex-col  m-auto sm:py-0 mt-10 lg:py-10 gap-4 px-4 ">
        <p className="common__headings text-white pb-20 sm:pb-2">
        
          Getting started is easy
        </p>
        <div className="grid  grid-cols-1 xsm:grid-cols-2 sm:gap-4 gap-4 md:grid-cols-2 lg:grid-cols-4 md:ml-[10%] lg:ml-0 m-auto md:m-0 p-auto px-2  xsm:pb-0 lg:pb-20 pb-20 max-w-">
            <div className="flex-flex-col ">
            <p className="text-white text-2xl font-space font-medium text-center w-[220px] m-auto sm:m-3 lg:m-auto pb-4"> Tell us what you need done</p>
          <Writtings />
            </div>

            <div className="flex-flex-col ">
            <p className="text-white text-2xl font-space font-medium text-center w-[220px] m-auto sm:m-3 lg:m-auto  pb-4"> Our Team Gets to Work</p>
          <TeamWork />
            </div>

            <div className="flex-flex-col ">
            <p className="text-white text-2xl font-space font-medium text-center w-[220px] m-auto sm:m-3 lg:m-auto pb-4"> Matched Top Talent</p>
          <MatchedTopTalent />
            </div>

            <div className="flex-flex-col ">
            <p className="text-white text-2xl font-space font-medium text-center w-[220px] m-auto sm:m-3 lg:m-auto pb-4"> Managed through our Platform</p>
          <Platform />
            </div>
        </div>
        <button className="getStarted__button m-auto mb-10  xsm:mb-2 sm:my-20 lg:mb-36 shadow-[0px_30px_40px_-20px] shadow-[#4F59CC] font-space">
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
  );
}

export default Initialize;
