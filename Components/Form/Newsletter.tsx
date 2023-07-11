import React from "react";
import Image from "next/image";
import logo from "../../Assets/Images/svg/logo.svg";
function Newsletter() {
  return (
    <div className="w-full lg:w-1/2 text-center  gap-4 items-center justify-center  flex flex-col lg:mt-0 mt-40 mb-16 lg:mb-0">
      <p className="text-black font-space-grotesk text-4xl font-medium text-center font-space">
        Get access to our platform!
      </p>
      <p className="text-black font-space-grotesk text-base font-normal  max-w-[520px] font-space">
        We get stuff done for growth stage companies. Under 24 hours. One Flat
        Monthly Fees. Use as Much as you want.
      </p>
      <div className="flex flex-col gap-4 max-w-[550px]">

     
      <div className="flex flex-col gap-1 w-full md:flex-row">
        <input type="text" placeholder="First Name" className="small__input" />
        <input type="text" placeholder="Last Name" className="small__input" />
      </div>
      <input type="text" placeholder="Work Email" className="large__input" />
      <input type="text" placeholder="Company Email" className="large__input" />
      <input
        type="text"
        placeholder="Company Website"
        className="large__input"
      />
      <p className="text-gray-500 text-center font-space-grotesk text-base font-normal my-6 font-space">
      Sign me up for Assembly's newsletter!
      </p>
       <button className="max-w-[550px] w-full h-[70px] rounded-[35px] bg-bgButton justify-center items-center text-white text-lg font-normal font-space"> Join The Waitlist</button>
       <div className="flex flex-row  m-auto"> <p className="text-gray-500 text-center font-space-grotesk text-base font-normal font-space">Already have an account?</p> <span className="text-bgButton font-space-grotesk text-base font-normal " >Login</span></div>
       <div className="flex flex-col">
     <p className="text-gray-500 text-center font-space-grotesk text-base font-normal m-0 mt-7 font-space ">Really want access? Send us a note at</p>
     <p className="text-bgButton text-center font-space-grotesk text-base font-normal mt7 font-space">hello@assembly-industries.com</p>
       </div>
       </div>
    </div>
  );
}

export default Newsletter;
