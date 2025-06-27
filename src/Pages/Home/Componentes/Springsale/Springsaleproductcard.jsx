import React from 'react';
import { Progress, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { getstar } from '../../../../Utils/genaretrating';
import { gotDiscounty } from '../../../../Utils/gotDiscounty';
import usestokstatus from '../../hooks/usestokstatus';


const ProductCard = ({ image, pCatagori, pName, rate, totalrating, price, pdiscout, stock, sold }) => {
    const { status, color, percentage } = usestokstatus(stock, sold)
    console.log("stock status:", status, "color:", color, "percentage", percentage)
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
                <div className='w-full bg-white01 rounded-xl relative h-6'>
                    <div
                        className="absolute top-0 left-0 h-full rounded-xl transition duration-300 ease-in-out"
                        style={{ width: `${percentage}%`, background: color }}
                    />
                    <h5 className='text-center z-10 relative text-amber-50 uppercase font-Poppins font-bold text-[16px] leading-[24px]'>
                        {status}
                    </h5>
                </div>

            </div>
        </div >
    );
};

export default ProductCard;
