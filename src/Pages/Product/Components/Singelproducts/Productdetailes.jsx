import React from 'react';
import { getstar } from '../../../../Utils/genaretrating';
import { gotDiscounty } from '../../../../Utils/gotDiscounty';
import ReactImageMagnify from 'react-image-magnify';
import { Helmet } from 'react-helmet-async';

const Productdetailes = ({
    imges,
    totalrating,
    rate,
    pName,
    price,
    discout,
    brand,
    size,
    variant,
    weight,
    delivery
}) => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Product Details</title>
                </Helmet>
                <div className='grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-6 lg:gap-8'>
                    <div className='relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-visible rounded-xl border border-gray flex items-center justify-center'>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: pName,
                                    isFluidWidth: false,
                                    src: imges,
                                    width: 450,
                                    height: 300
                                },
                                largeImage: {
                                    src: imges,
                                    width: 1200,
                                    height: 1800
                                },
                                enlargedImageContainerStyle: {
                                    zIndex: 1000,
                                },
                                isHintEnabled: true,
                                enlargedImagePosition: "beside",
                            }}
                        />
                    </div>

                    <div className='space-y-6'>
                        <div className="flex items-center gap-x-2 mt-4">
                            {getstar(rate)}
                            <span className="font-montserrat text-base font-normal text-black01">
                                ({totalrating})
                            </span>
                        </div>
                        <h1 className='font-Poppins font-semibold text-2xl sm:text-3xl lg:text-[36px] text-black01 border-b border-black100 pb-4'>
                            {pName}
                        </h1>

                        <div className="flex gap-x-4 mt-6 items-center">
                            <p className="font-poppins text-3xl sm:text-4xl lg:text-[56px] font-semibold text-orange leading-[0.8]">
                                ${gotDiscounty(price, discout)}
                            </p>
                            {discout && (
                                <span className="font-montserrat text-lg sm:text-xl font-normal text-black01 line-through">
                                    ${price}
                                </span>
                            )}
                        </div>

                        <div className='mt-8'>
                            <ul className='space-y-6'>
                                <li className='flex items-center justify-between'>
                                    <p className='font-Poppins font-semibold text-lg sm:text-xl'>Brand</p>
                                    <span className='font-Montserrat font-normal text-lg sm:text-xl text-black200'>{brand}</span>
                                </li>
                                <li className='flex items-center justify-between'>
                                    <p className='font-Poppins font-semibold text-lg sm:text-xl'>Size</p>
                                    <span className='font-Montserrat font-normal text-lg sm:text-xl text-black200'>{size}</span>
                                </li>
                                <li className='flex items-center justify-between'>
                                    <p className='font-Poppins font-semibold text-lg sm:text-xl'>Weight</p>
                                    <span className='font-Montserrat font-normal text-lg sm:text-xl text-black200'>{weight}</span>
                                </li>
                                <li className='flex items-center justify-between'>
                                    <p className='font-Poppins font-semibold text-lg sm:text-xl'>Delivery</p>
                                    <span className='font-Montserrat font-normal text-lg sm:text-xl text-black200'>{delivery}</span>
                                </li>

                                <li className='flex items-center justify-between'>
                                    <p className='font-Poppins font-semibold text-lg sm:text-xl'>Variant</p>
                                    <div className='font-Montserrat font-normal text-lg sm:text-xl text-black200 flex flex-wrap gap-4'>
                                        {variant.map((v, i) => (
                                            <div
                                                key={i}
                                                className='py-3 px-6 sm:py-4 sm:px-8 border border-black100 rounded-md hover:border-orange hover:text-orange cursor-pointer'>
                                                <span className='font-Montserrat text-base sm:text-lg'>{v}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Productdetailes;
