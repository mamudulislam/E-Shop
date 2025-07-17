import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';
import { LiaOpencart } from 'react-icons/lia';
import { Supportdata } from '../../../Home/Componentes/Support/Supportdata';
import Commonbuttun from '../../../../Golobalcomponentes/Commonbuttun';
import { setCountDec, setCountInc } from '../../../../settings/Redux/feature/Counterslice';
import { addcart } from '../../../../settings/Redux/feature/Cartslice';

const Checkoutcount = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const countValue = useSelector((state) => state.count.count);
    const disableWhenOne = countValue === 1;
    const windowWidth = window.innerWidth;

    const handleAddToCart = () => {
        dispatch(addcart({
            product: product,
            qty: countValue
        }));
        navigate('/Cart');
    };

    const iconSize = windowWidth >= 640 ? 30 : 24;

    return (
        <div className="py-6">
            <div className="flex flex-wrap items-center justify-between gap-y-6">
                <div className="flex flex-wrap gap-8 md:gap-12">
                    {Supportdata.slice(1, 4).map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className="flex items-center gap-x-5" key={index}>
                                <span className="text-black01">
                                    <Icon />
                                </span>
                                <div>
                                    <h5 className="font-Montserrat font-bold text-sm md:text-base text-black01">
                                        {item.title}
                                    </h5>
                                    <p className="font-Montserrat font-normal text-xs md:text-base text-black01">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>


                <div className="flex flex-wrap items-center justify-between gap-x-6">

                    <div className="flex items-center gap-x-6">
                        <button
                            disabled={disableWhenOne}
                            className="w-[50px] h-[50px] hover:bg-white02 rounded-full flex items-center justify-center cursor-pointer disabled:opacity-50"
                            onClick={() => dispatch(setCountDec())}
                        >
                            <LuMinus />
                        </button>
                        <div className="font-Poppins text-black01 font-semibold text-[24px] sm:text-[36px]">
                            {countValue}
                        </div>
                        <button
                            className="w-[50px] h-[50px] hover:bg-white02 rounded-full flex items-center justify-center cursor-pointer"
                            onClick={() => dispatch(setCountInc())}
                        >
                            <FiPlus />
                        </button>
                    </div>
                    <div className="flex items-center gap-x-4 sm:gap-x-6">
                        <Commonbuttun className="!bg-orange !px-8 sm:!px-10 !h-10 sm:!h-12 !border-none">
                            <span className="font-montserrat font-bold text-sm sm:text-lg text-white">
                                Buy Now
                            </span>
                        </Commonbuttun>
                        <button
                            onClick={handleAddToCart}
                            className="w-[50px] h-[50px] sm:w-[62px] sm:h-[62px] rounded-md flex items-center justify-center border border-orange"
                        >
                            <LiaOpencart size={iconSize} color="#ff624c" className="hover:text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkoutcount;
