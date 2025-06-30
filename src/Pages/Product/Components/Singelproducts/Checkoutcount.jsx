import React from 'react';
import { Supportdata } from '../../../Home/Componentes/Support/Supportdata';
import { LuMinus } from 'react-icons/lu';
import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setCountDec, setCountInc } from '../../../../settings/Redux/feature/Counterslice';
import Commonbuttun from '../../../../Golobalcomponentes/Commonbuttun';
import { LiaOpencart } from 'react-icons/lia';

const Checkoutcount = () => {
    const dispatch = useDispatch();
    const countValue = useSelector((state) => state.count.count);
    const disabelwhenlessthenone = countValue == 1;

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-4'>
                    {
                        Supportdata?.slice(1, 4).map((item, index) => {
                            const Icons = item.icon;
                            return (
                                <div className='flex items-center gap-x-5' key={index}>
                                    <span className='text-black01'>
                                        <Icons />
                                    </span>
                                    <div>
                                        <h5 className='font-Montserrat font-bold text-sm md:text-base text-black01'>{item.title}</h5>
                                        <p className='font-Montserrat font-normal text-xs md:text-base text-black01'>{item.subtitle}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-8'>
                        <button
                            disabled={disabelwhenlessthenone}
                            className='w-[56px] h-[56px] cursor-pointer hover:bg-white02 rounded-full flex items-center justify-center'
                            onClick={() => dispatch(setCountDec())}
                        >
                            <LuMinus />
                        </button>
                        <div className='font-Poppins text-black01 font-semibold text-[36px]'>
                            {countValue}
                        </div>
                        <button
                            className='w-[56px] h-[56px] cursor-pointer hover:bg-white02 rounded-full flex items-center justify-center'
                            onClick={() => dispatch(setCountInc())}
                        >
                            <FiPlus />
                        </button>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <Commonbuttun className="!bg-orange !px-10 !h-12 !border-none">
                            <span className="font-montserrat font-bold text-lg text-white">
                                Buy Now
                            </span>
                        </Commonbuttun>
                        <div className='w-[62px] h-[62px] rounded-md flex items-center justify-center border border-orange'>
                            <LiaOpencart size={30} color="#ff624c" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Checkoutcount;
