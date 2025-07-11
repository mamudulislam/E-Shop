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

    const handleAddToCart = () => {
        dispatch(addcart({
            product: {
                id: product.id,
                pName: product.pName,
                pCategory: product.pCategory,
                totalrating: product.totalrating,
                imges: product?.imges,
                variant: product.variant
            },
            qty: countValue
        }));
        navigate('/Cart');
    };

    return (
        <div>
            <div className='flex items-center justify-between flex-wrap gap-y-6'>
                <div className='flex items-center gap-x-4'>
                    {Supportdata.slice(1, 4).map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className='flex items-center gap-x-5' key={index}>
                                <span className='text-black01'><Icon /></span>
                                <div>
                                    <h5 className='font-Montserrat font-bold text-sm md:text-base text-black01'>
                                        {item.title}
                                    </h5>
                                    <p className='font-Montserrat font-normal text-xs md:text-base text-black01'>
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='flex items-center justify-between gap-x-3'>
                    {/* Counter */}
                    <div className='flex items-center gap-x-8'>
                        <button
                            disabled={disableWhenOne}
                            className='w-[56px] h-[56px] hover:bg-white02 rounded-full flex items-center justify-center cursor-pointer disabled:opacity-50'
                            onClick={() => dispatch(setCountDec())}
                        >
                            <LuMinus />
                        </button>
                        <div className='font-Poppins text-black01 font-semibold text-[36px]'>
                            {countValue}
                        </div>
                        <button
                            className='w-[56px] h-[56px] hover:bg-white02 rounded-full flex items-center justify-center cursor-pointer'
                            onClick={() => dispatch(setCountInc())}
                        >
                            <FiPlus />
                        </button>
                    </div>
                    <div className='flex items-center gap-x-3 ml-8'>
                        <Commonbuttun className="!bg-orange !px-10 !h-12 !border-none">
                            <span className="font-montserrat font-bold text-lg text-white">
                                Buy Now
                            </span>
                        </Commonbuttun>
                        <button
                            onClick={handleAddToCart}
                            className='w-[62px] h-[62px] rounded-md flex items-center justify-center border border-orange'
                        >
                            <LiaOpencart size={30} color="#ff624c" className='hover:text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkoutcount;
