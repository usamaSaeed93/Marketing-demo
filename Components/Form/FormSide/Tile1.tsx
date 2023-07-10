"use client";
import React from "react";
import reviewMen from "../../../Assets/Images/png/review_men.png";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import DownloadDoneSharpIcon from "@mui/icons-material/DownloadDoneSharp";
const stars = Array(5).fill(
  <StarIcon className="text-[10px] sm:text-xs text-[#FFC226]" />
);
function Tile1() {
  return (
    <div className="flex flex-col border border-solid  bg-white border-[#EFEFEF] w-64 h-60 rounded-[33px] justify-center items-center px-2">
      <Image src={reviewMen} alt="review" />
      <span className="mb-2 ">
        {stars.map((star, index) => (
          <React.Fragment key={index}>{star}</React.Fragment>
        ))}
      </span>
      <span className="font-bold text-base">20+ Verified Projects</span>
      <div className="flex flex-row justify-evenly gap-1">
        <div className="w-20 h-20 rounded-[22px] bg-[#EEEEEE] flex justify-center items-center flex-col text-center">
          <div className="w-7 h-7 rounded-full border border-solid border-bgButton flex justify-center items-center">
            <span className="text-bgButton font-bold p-1">10+</span>
          </div>
          <p className=" text-xs font-bold">References Verified</p>
        </div>
        <div className="w-20 h-20 rounded-[22px] bg-[#EEEEEE] flex justify-center items-center flex-col text-center">
          <div className="w-7 h-7 rounded-full border border-solid border-bgButton flex justify-center items-center">
            <DownloadDoneSharpIcon className="text-bgButton " />
          </div>
          <p className="font-bold text-xs">References Verified</p>
        </div>
        <div className="w-20 h-20 rounded-[22px] bg-[#EEEEEE] flex justify-center items-center flex-col text-center">
          <div className="w-7 h-7 rounded-full border border-solid border-bgButton flex justify-center items-center">
            <DownloadDoneSharpIcon className="text-bgButton " />
          </div>
          <p className="font-bold text-xs">References Verified</p>
        </div>
      </div>
    </div>
  );
}

export default Tile1;
