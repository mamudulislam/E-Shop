import React from 'react'
import { getstar } from '../../../../Utils/genaretrating'
import { gotDiscounty } from '../../../../Utils/gotDiscounty'
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
                <div className='grid grid-cols-[2fr_1.5fr] gap-x-8'>
                    <div className='border border-black200 rounded-lg overflow-hidden h-[500px]'>
                        <img src={imges} alt="" className='w-full h-full object-center'
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-x-2 mt-2">
                            {getstar(rate)}
                            <span className="font-montserrat text-base font-normal text-black01">
                                ({totalrating})
                            </span>
                        </div>
                        <h1 className='font-Poppins font-semibold text-[36px] text-black01 border-b border-black100 pb-4'>{pName}</h1>
                        <div className="flex  gap-x-2 mt-[20px]">
                            <p className="font-poppins text-[56px] font-semibold text-orange leading-[0.8]">
                                ${gotDiscounty(price, discout)}
                            </p>
                            {discout && (
                                <span className="font-montserrat text-lg font-normal mt-6 text-black01 line-through">
                                    ${price}
                                </span>
                            )}
                        </div>
                        <div className='mt-[48px]'>
                            <ul className='w-full'>
                                <li className='flex items-center justify-between mb-4'>
                                    <p className='font-Poppins font-semibold text-[20px] '>brand</p>
                                    <span className='font-Montserrat font-normal text-[20px] text-black200'>{brand}</span>
                                </li>
                                <li className='flex items-center justify-between mb-4'>
                                    <p className='font-Poppins font-semibold text-[20px] '>size</p>
                                    <span className='font-Montserrat font-normal text-[20px] text-black200'>{size}</span>
                                </li>
                                <li className='flex items-center justify-between mb-4'>
                                    <p className='font-Poppins font-semibold text-[20px]'>weight</p>
                                    <span className='font-Montserrat font-normal text-[20px] text-black200'>{weight}</span>
                                </li>
                                <li className='flex items-center justify-between mb-4'>
                                    <p className='font-Poppins font-semibold text-[20px] '>delivery</p>
                                    <span className='font-Montserrat font-normal text-[20px] text-black200'>{delivery}</span>
                                </li>
                                <li className='flex items-center justify-between mb-4 '>
                                    <p className='font-Poppins font-semibold text-[20px] flex'>variant</p>
                                    <div className='font-Montserrat font-normal text-[20px] text-black200 flex items-center gap-x-2'>{
                                        variant.map((v, i) => (
                                            <div key={i} className='py-4 px-8 border border-black100 rounded-md hover:border-orange hover:text-orange cursor-pointer'>
                                                <span className='font-Montserrat text-base'>{v}</span>
                                            </div>
                                        ))
                                    }</div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Productdetailes