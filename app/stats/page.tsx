import React from 'react'
import TopSection from '@/Components/Home Components/TopSection'
import Table from '@/Components/Table Components/Table'
import Footer from '@/Layout/Footer'
export default function page() {
    return (
        <div>
            <TopSection />
            <p className='mt-36 mb-10 text-4xl sm:text-5xl font-normal text-center'>Sales Ops </p>
            <div className='p-2 md:px-20 overflow-scroll justify-center items-center m-auto'>
                <Table />
            </div>
            <p className='mt-36 mb-10 text-4xl sm:text-5xl font-normal text-center'>Lead Generation & Marketing Ops </p>
            <div className='p-2 md:px-20 overflow-scroll'>
                <Table />
            </div>
            <p className='mt-36 mb-10 text-4xl sm:text-5xl font-normal text-center'>Finance & Business Ops</p>
            <div className='p-2 md:px-20 overflow-scroll sm:overflow-none mb-[130px]'>
                <Table />
            </div>
            <Footer />
        </div>
    )
}
