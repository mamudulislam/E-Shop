import React from 'react'
import Categories from './FilterCategories/Categories'
import Brand from './FilterCategories/Brand'
import Price from './FilterCategories/Price'

const Leftsidecomponent = () => {
    return (
        <>
            <div className='bg-white02 p-4 sm:p-6 md:p-10 lg:p-[48px] rounded-lg w-full'>
                <Categories />
                <hr className='w-full bg-amber-800 my-4' />
                <Brand />
                <Price />
            </div>
        </>
    )
}

export default Leftsidecomponent
