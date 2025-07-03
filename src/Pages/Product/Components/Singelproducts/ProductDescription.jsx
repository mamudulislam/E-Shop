import React from 'react'

const ProductDescription = ({ description }) => {
    return (
        <>
            <div>
                <h5 className='font-Poppins font-semibold text-2xl text-black01 mb-[20px]'>
                    Description
                </h5>
                <p className='font-Montserrat font-normal text-xl leading-[30px]'>{description}</p>
            </div>
        </>
    )
}

export default ProductDescription