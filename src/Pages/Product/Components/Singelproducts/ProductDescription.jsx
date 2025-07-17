import React from 'react';

const ProductDescription = ({ description }) => {
    return (
        <div className="px-4 sm:px-8">
            <h5 className="font-Poppins font-semibold text-2xl sm:text-3xl text-black01 mb-4">
                Description
            </h5>
            <p className="font-Montserrat font-normal text-lg sm:text-xl leading-[28px] sm:leading-[30px] text-black200">
                {description}
            </p>
        </div>
    );
};

export default ProductDescription;
