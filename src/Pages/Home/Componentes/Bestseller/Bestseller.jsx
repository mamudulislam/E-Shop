import React from 'react';
import BestsellerLeft from './BestsellerLayout/BestsellerLeft';
import BestsellerRight from './BestsellerLayout/BestsellerRight';

const Bestseller = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mt-16 mb-16">
            <BestsellerLeft />
            <BestsellerRight />
        </div>
    );
};

export default Bestseller;
