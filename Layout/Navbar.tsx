import React from "react";
import logo from "../Assets/Images/svg/whiteLogo.svg";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div
      className="flex flex-row py-10 justify-evenly items-center "
    //   style={{ justifyContent: "space-around" }}
    >
      <Image src={logo} alt="logo" />
      <div className="flex flex-row justify-end items-center gap-2 sm:gap-4 md:gap-5 ">
        <p className="text-white text-base font-bold">Apply as Talent</p>
        <Link href="login">
          <button
            className=" bg-bgButton rounded-[35px] text-center text-white font-normal text-sm"
            style={{ width: "111px", height: "45px" }}
          >
            Sign Up
          </button>
        </Link>
        <Link href="sign-up">
          <button
            className="border border-solid border-white rounded-[35px] text-center text-white font-normal text-sm"
            style={{ width: "111px", height: "45px" }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
