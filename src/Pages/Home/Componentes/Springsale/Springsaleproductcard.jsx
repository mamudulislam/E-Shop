import React from 'react';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { getstar } from '../../../../Utils/genaretrating';
import { gotDiscounty } from '../../../../Utils/gotDiscounty';

const ProductCard = ({ image, pCatagori, pName, rate, totalrating, price, pdiscout }) => {
    return (
        <div className="group relative hover:bg-white p-6 rounded-[10px] w-[285px]">
            <div className="relative w-full overflow-hidden h-[345px] rounded-[10px]">
                <img src={image} alt="product" className="w-full h-full object-cover" />
                {pdiscout && (
                    <div className="absolute top-2 right-5 w-[100px] h-[100px] py-1.5 px-5 bg-orange rounded-full flex justify-center items-center">
                        <span className=" text-white font-Montserrat font-bold text-base">
                            {pdiscout}%
                        </span>
                    </div>
                )}
            </div>

            <div className="mt-10">
                <h5 className="font-Montserrat text-sm font-normal text-black01 uppercase tracking-[0.4px]">
                    {pCatagori}
                </h5>

                {pName?.length > 20 ? (
                    <Tooltip
                        placement="top"
                        color="#fff"
                        mouseEnterDelay={0.1}
                        title={
                            <span className="font-Poppins text-sm font-semibold text-black01 truncate">
                                {pName}
                            </span>
                        }
                    >
                        <Link to="/Product" className="font-Poppins text-xl font-semibold text-black01 truncate cursor-pointer  group-hover:text-orange">
                            {pName}
                        </Link>
                    </Tooltip>
                ) : (
                    <Link to="/Product" className="font-Poppins text-xl font-semibold text-black01 truncate">
                        {pName}
                    </Link>
                )}
                <div className='flex items-center gap-x-2 mt-2'>

                    {getstar(rate)}
                    <span className='font-Montserrat text-base font-normal text-black01'>({totalrating})</span>
                </div>
                <div>
                    <p className='font-Poppins text-2xl font-semibold text-black01 group-hover:text-orange transition-all ease-linear duration-100'>
                        ${gotDiscounty(price, pdiscout)}
                    </p>
                </div>
            </div>
        </div >
    );
};

export default ProductCard;
