import React from 'react'
import BestsellerLeft from './BestsellerLayout/BestsellerLeft'
import BestsellerRight from './BestsellerLayout/BestsellerRight'

const Bestseller = () => {
    return (
        <>
            <div className='grid grid-cols-[2fr_1fr] gap-x-2 mt-20 mb-20'>
                <BestsellerLeft />
                <BestsellerRight />
            </div>
        </>
    )
}

export default Bestseller