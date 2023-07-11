'use client'
import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "../Assets/Images/svg/darkNavbar.svg";
import Image from "next/image";
import Link from "next/link";
function FormNavbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div className=" trick flex flex-row lg:flex-row py-10 md:justify-evenly lg:gap-x-[40%] items-start  lg:items-center w-full" >
      <Image src={logo} alt="logo" />
      <div className="hidden lg:flex flex-col lg:flex-row justify-end items-center gap-2 sm:gap-4 md:gap-5 ">
<p className=" text-white text-base font-bold"><Link href='newsletter'>Apply as Talent</Link></p>
<Link href="log-in">
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
      <div className='lg:hidden '>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
         Options
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}><p className=" text-black text-base font-bold"><Link href='newsletter'>Apply as Talent</Link></p></MenuItem>
          <MenuItem onClick={handleClose}><Link href="log-in">
  <button
    className=" bg-bgButton rounded-[35px] text-center text-white font-normal text-sm"
    style={{ width: "111px", height: "45px" }}
  >
    Sign Up
  </button>
</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href="sign-up">
  <button
    className="border border-solid border-black rounded-[35px] text-center text-black font-normal text-sm"
    style={{ width: "111px", height: "45px" }}
  >
    Login
  </button>
</Link></MenuItem>
        </Menu>
      </div>
    </div>
  );
}


export default FormNavbar;
{/* <div className="flex flex-col lg:flex-row justify-end items-center gap-2 sm:gap-4 md:gap-5 ">
<p className=" text-white text-base font-bold">Apply as Talent</p>
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
</div> */}