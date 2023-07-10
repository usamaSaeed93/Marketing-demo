import React from "react";
import Image from "next/image";
import mar from '../../Assets/Images/png/text-motion.png'
import Navbar from "@/Layout/Navbar";
export default function TopSection(){
    return (
<>
<div className="w-full h-[1083px] lg:max-h-[870px] bg-black ">
        <Navbar />
    <div className=' justify-center items-center flex flex-col mt-10'>
<p className='lg:text-[70px] sm:text-[60px] text-[40px] text-white text-center p-3 font-bold'>Lower Your Opex & Move Faster</p>
<p className='lg:text-[70px] sm:text-[60px] text-[40px] text-white text-center p-3 font-normal'>Hire Incredible Experts & Teams for</p>
<Image 
src={mar}
alt='marketing_research'
/>
<button className=' flex justify-center items-center text-white w-[279px] h-[70px]  text-[18px] bg-bgButton rounded-[35px] mb-[24px]'>
    Get Started
</button>
<p className="font-normal text-[20px] text-[#A6A6A6] text-center">Pre-Vetted Experts. Starting at ~$20/Hour</p>
</div>
</div>
</>
)
}