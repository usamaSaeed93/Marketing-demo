import React from "react";
import traced1 from "../../../Assets/Images/png/traced1.png";
import traced2 from "../../../Assets/Images/png/traced2.png";
import traced3 from "../../../Assets/Images/png/traced3.png";
import arrowdown from "../../../Assets/Images/svg/downsmall.svg";
import chartSmall from "../../../Assets/Images/png/chartSmall.png";
import Image from "next/image";
export default function Tile2() {
  return (
    <div className="flex flex-col border border-solid bg-white border-[#EFEFEF] w-64 h-60 rounded-[33px] justify-center items-center px-2">
      <div className="flex flex-row justify-evenly gap-1">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-[67px] h-[71px] rounded-[22px] bg-[#F4F1C0] flex justify-center items-center flex-col text-center">
            <div className="w-[58px] h-[44px] rounded-[8px] bg-white flex justify-center items-center">
              <Image src={traced1} alt="traced" />
            </div>
            <p className=" text-[8px] font-bold">Hiring</p>
          </div>
          <Image src={arrowdown} alt="none" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-[81px] h-[71px] rounded-[22px] bg-[#CDE6D9] flex justify-center items-center flex-col text-center">
            <div className="w-[58px] h-[44px] rounded-[8px] bg-white flex justify-center items-center">
              <Image src={traced3} alt="traced" />
            </div>
            <p className=" text-[8px] font-bold">Task Delegation</p>
          </div>
          <Image src={arrowdown} alt="none" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-[67px] h-[71px] rounded-[22px] bg-[#E4D6EE] flex justify-center items-center flex-col text-center">
            <div className="w-[58px] h-[44px] rounded-[8px] bg-white flex justify-center items-center">
              <Image src={traced2} alt="traced" />
            </div>
            <p className=" text-[8px] font-bold">Payment</p>
          </div>
          <Image src={arrowdown} alt="none" />
        </div>
      </div>
      <Image src={chartSmall} alt="charSmall" />
    </div>
  );
}
