import React from 'react'
import mapSmall from '../../../Assets/Images/svg/mapSmall.svg'
import arrowdown from "../../../Assets/Images/svg/downsmall.svg";
import traced4 from '../../../Assets/Images/svg/traced4.svg'
import traced5 from '../../../Assets/Images/svg/traced5.svg'
import Image from 'next/image';
function Tile3() {
    const style={
        backgroundImage:`url(${mapSmall})`
    }
  return (
    <div className=' backgro flex flex-col border border-solid bg-white border-[#EFEFEF] w-64 h-60 rounded-[33px] justify-center items-center px-2 py-2 '>
<p className='text-xl font-bold'>Complaint Across</p>
<span className='text-bgButton text-xl font-bold mb-2'>180+ Countries</span>
<Image 
src={arrowdown}
alt='none'
/>
<div className='flex flex- row justify-evenly mt-2'>
<div className="w-[67px] h-[71px] rounded-[22px] bg-[#DBEAFD] flex justify-center items-center flex-col text-center">
            <div className="w-[58px] h-[60px] rounded-[8px] bg-white flex justify-center items-center border border-solid ">
              <Image 
              src={traced4}
              alt='none'
              />
            </div>
           
          </div>
          <div className="w-[67px] h-[71px] rounded-[22px] bg-[#DBEAFD] flex justify-center items-center flex-col text-center">
            <div className="w-[58px] h-[60px] rounded-[8px] bg-white flex justify-center items-center border border-solid ">
              <Image 
              src={traced5}
              alt='none'
              />
            </div>
           
          </div>
</div>
    </div>
  )
}

export default Tile3