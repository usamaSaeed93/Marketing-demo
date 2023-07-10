import React from 'react'

export default function QualityTiles() {
    return (
        <>
            <div className='flex flex-col justify-start items-start gap-5 w-fit'>
                <div className='flex flex-row gap-5'>
                    <div className='w-3 md:w-4 h-16 md:h-20 bg-bgButton rounded-xl opacity-25'>
                    </div>
                    <div>

                        <p className='text-3xl md:text-4xl font-medium'>Fluent English</p>
                        <p className='text-xl md:text-2xl font-normal '>US TIME ZONE</p>
                    </div>
                </div>


                <div className='flex flex-row gap-5'>
                    <div className='w-3 md:w-4 h-16 md:h-20 bg-bgButton rounded-xl opacity-50'>
                    </div>
                    <div>

                        <p className='text-3xl md:text-4xl font-medium'>Rigorous Vetting</p>
                        <p className='text-xl md:text-2xl font-normal '>Multi-Step Process</p>
                    </div>
                </div>


                <div className='flex flex-row gap-5'>
                    <div className='w-3 md:w-4 h-16 md:h-20 bg-bgButton rounded-xl opacity-100'>
                    </div>
                    <div>

                        <p className='text-3xl md:text-4xl font-medium'>$15 - $35/hour</p>
                        <p className='text-xl md:text-2xl font-normal '>Scale up or Down</p>
                    </div>
                </div>

            </div>
        </>
    )
}
