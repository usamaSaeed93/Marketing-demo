'use client'
import React from 'react'
import { useState } from 'react'
import Automation from './Automation Experts Components/Automation';
export default function Experts() {
    const [selectedItem, setSelectedItem] = useState<string>();
    const list: string[] = ["Web Design & Dev", "Rev Ops Specialists", " Data Automation", "AI / LLM MVP", "Shopify Experts", "Marketing Acceleration"]
    const handleClick = (item: string) => {
        setSelectedItem(item);
    };
    return (
        <>

            <div className='mb-[80px] lg:mb-[145px] flex flex-col justify-center '>
                <p className='common__headings mx-[80px] lg:mx-[145px] px-4'>We Assemble Expert Teams that Drive Outcomes</p>
                <div className='flex flex-col justify-evenly md:flex-row mt-10'>
                    <div className='flex justify-center items-center '>
                        <div className='ul__list ml-4'>
                            <ul className='gap-2'>
                                {
                                    list.map(l => {
                                        return (
                                            <ul key={l} className={`text-2xl mb-6  ${selectedItem === l ? ' text-bgButton font-bold font-space' : 'text-black font-space'}`}
                                                onClick={() => handleClick(l)}
                                            >{l}</ul>

                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                    <Automation />
                </div>
                <button className='getStarted__button m-auto mt-20 shadow-[0px_30px_40px_-20px] shadow-[#4F59CC]'>
                    Get Started
                </button>
            </div>
        </>
    )
}
