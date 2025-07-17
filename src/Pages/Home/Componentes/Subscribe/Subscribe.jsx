import React from 'react';
import Subscribeform from '../../../../Golobalcomponentes/Subscribe/form/Subscribeform';

const Subscribe = () => {
    return (
        <div className='mt-20 px-4 sm:px-6 lg:px-0'>
            <div className='rounded-[25px] bg-gray grid grid-cols-1 lg:grid-cols-[2fr_3fr] overflow-hidden'>
                <div className='bg-linear-to-r from-white02 to-gray py-16 sm:py-[114px] px-6 sm:pl-[100px] flex items-center justify-center'>
                    <Subscribeform />
                </div>
                <div className='bg-gray h-40 sm:h-auto'>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
