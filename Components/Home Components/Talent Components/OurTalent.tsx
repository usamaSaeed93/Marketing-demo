import React from "react";
import QualityTiles from "./QualityTiles";
import TalentTab from "./TalentTab";
import Image from "next/image";
import playicon from "../../../Assets/Images/svg/Vector.svg";
export default function OurTalent() {
  return (
    <>
    <p className="text-black text-center font-space-grotesk text-5xl  font-medium leading-tight " style={{marginBottom:"112px", marginTop:"225px"}}>Let’s Talk about Our Talent</p>
      <div className="flex flex-col-reverse gap-y-10  md:flex-row  justify-evenly items-center ">
        <TalentTab />
        <QualityTiles />
      </div>
      <div
        className=" flex flex-row justify-evenly mt-20 m-auto  items-center py-2 bg-bgButton rounded-[35px]"
        style={{ width: "288px", height: "80px",marginBottom:"265px" }}
      >
        <div className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center">
          <Image src={playicon} alt="play-icon" />
        </div>
        <div>
          <p className="text-lg text-white font-medium text-center">Watch</p>
          <p className="text-lg font-normal w-32 tracking-widest text-white  text-center">
            1 min Video <br /> Introduction
          </p>
        </div>
      </div>
    </>
  );
}