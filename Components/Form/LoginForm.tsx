import React from "react";

export default function LogInForm() {
  return (
    <div className="w-full lg:w-1/2 md:p-0 p-4 gap-4 items-center justify-center  flex flex-col lg:mt-0 mt-40 mb-16 lg:mb-0">
      <div className=" text-start max-w-[550px] flex flex-col items-start  pb-10 gap-4">
        <p className="text-black font-space-grotesk text-4xl font-medium text-center font-space">
          Welcome back!
        </p>
        <p className="text-black font-space-grotesk text-base font-normal  max-w-[520px] font-space">
          We get stuff done for growth stage companies. Under 24 hours. One Flat
          Monthly Fees. Use as Much as you want.
        </p>
      </div>
      <div className="flex flex-col gap-4 max-w-[550px] w-full">
        <input
          type="text"
          placeholder="Email Address"
          className="large__input  mb-7"
        />

        <button className="max-w-[550px] w-full h-[70px] rounded-[35px] bg-bgButton justify-center items-center text-white text-lg font-normal font-space">
          LogIn
        </button>
        <div className="flex flex-row  m-auto">
      
          <p className="text-gray-500 text-center font-space-grotesk text-base font-normal mb-4 font-space">
            A code was emailed to you at
          </p>
          <span className="text-black font-space-grotesk text-bold font-normal font-space ">
            sumant@email.com
          </span>
        </div>
      </div>
      <input
        type="text"
        placeholder="Enter Code Here"
        className="large__input"
      />
         <div className="flex flex-row "> <p className="text-gray-500 text-center font-space-grotesk text-base font-normal font-space">Don't have an account?  </p> <span className="text-bgButton font-space-grotesk text-normal underline font-normal " > Sign up for access</span></div>
    </div>
  );
}
