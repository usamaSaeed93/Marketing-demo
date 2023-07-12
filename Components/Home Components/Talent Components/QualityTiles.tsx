import React from 'react'

export default function QualityTiles() {
    return (
        <>
            <div className='flex flex-col justify-start items-start gap-8 w-fit'>
                <div className='flex flex-row gap-5'>
                    <div className='w-3 md:w-4 h-16 md:h-20 bg-bgButton rounded-xl opacity-25'>
                    </div>
                    <div>

                        <p className='text-3xl md:text-4xl font-bold font-space'>Fluent English</p>
                        <p className='text-xl md:text-2xl font-normal font-space'>US TIME ZONE</p>
                    </div>
                </div>


                <div className='flex flex-row gap-5'>
                    <div className='w-3 md:w-4 h-16 md:h-20 bg-bgButton rounded-xl opacity-50'>
                    </div>
                    <div>

                        <p className='text-3xl md:text-4xl font-bold font-space'>Rigorous Vetting</p>
                        <p className='text-xl md:text-2xl font-normal font-space'>Multi-Step Process</p>
                    </div>
                </div>


                <div className='flex flex-row gap-5'>
                    <div className='w-3 md:w-4 h-16 md:h-20 bg-bgButton rounded-xl opacity-100'>
                    </div>
                    <div>

                        <p className='text-3xl md:text-4xl font-bold font-space'>$15 - $35/hour</p>
                        <p className='text-xl md:text-2xl font-normal font-space'>Scale up or Down</p>
                    </div>
                </div>

            </div>
        </>
    )
}
