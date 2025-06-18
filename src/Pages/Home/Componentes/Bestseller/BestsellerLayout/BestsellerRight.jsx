import React from 'react';
import PromoBanner from '../../../../../assets/banner/PromoBanner.jpg';

const BestsellerRight = () => {
    return (
        <div className="w-full h-full">
            <img
                src={PromoBanner}
                alt="PromoBanner"
                className="w-full h-full object-cover rounded-md"
            />
        </div>
    );
};

export default BestsellerRight;
