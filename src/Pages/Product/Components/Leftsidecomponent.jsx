import React from 'react'
import Categories from './FilterCategories/Categories'
import Brand from './FilterCategories/Brand'
import Price from './FilterCategories/Price'

const Leftsidecomponent = () => {
    return (
        <>
            <div className='bg-white02 p-[48px] rounded-lg'>
                <Categories />
                <hr className='w-full bg-amber-800' />
                <Brand />
                <Price />
            </div>
        </>
    )
}

export default Leftsidecomponent