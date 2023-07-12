import React from "react";
import QualityTiles from "./QualityTiles";
import TalentTab from "./TalentTab";
import Image from "next/image";
import playicon from "../../../Assets/Images/svg/Vector.svg";
export default function OurTalent() {
  return (
    <>
    <p className="text-black text-center  text-5xl  font-medium leading-tight font-space " style={{marginBottom:"112px", marginTop:"80px"}}>Let’s Talk about Our Talent</p>
      <div className="flex flex-col-reverse gap-y-10  md:flex-row  justify-center gap-[5%] items-center ">
        <TalentTab />
        <QualityTiles />
      </div>
      <div
        className=" flex flex-row justify-center mt-20 lg:mb-64 md:mb-20 xsm:mb-10 mb-32 m-auto  items-center py-2 bg-bgButton rounded-[35px] shadow-[0px_30px_40px_-20px] shadow-[#4F59CC]"
        style={{ width: "288px", height: "80px", }}
      >
        <div className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center ">
          <Image src={playicon} alt="play-icon" />
        </div>
        <div className="text-start py-4">
          <p className="text-lg text-white font-bold text-center pt-2">Watch</p>
          <p className="text-lg font-medium w-32  text-white  text-center font-space pb-2">
            1 min Video<br />Introduction
          </p>
        </div>
      </div>
    </>
  );
}
