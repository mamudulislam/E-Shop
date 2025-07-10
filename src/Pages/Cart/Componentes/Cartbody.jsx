import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Productscarts from './Productscarts';
import { BsTrash3 } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';
import { updateQty, removecart } from '../../../settings/Redux/feature/Cartslice';
import { Link } from 'react-router-dom';

const Cartbody = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                {/* Cart Header - Exactly as you designed */}
                <div className='bg-white02 rounded-lg px-[56px] py-[32px]'>
                    <div className='grid grid-cols-[607px_171px_171px_171px] gap-x-12'>
                        <div>
                            <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>product</h4>
                        </div>
                        <div>
                            <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>PRICE</h4>
                        </div>
                        <div>
                            <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>QTY</h4>
                        </div>
                        <div>
                            <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>TOTAL</h4>
                        </div>
                    </div>
                </div>

                {/* Cart Items - Maintaining your exact design */}
                {cartItems.map((item) => (
                    <div key={item.id} className='px-[56px] py-[32px] hover:border-black100 border border-transparent relative group'>
                        <div className='grid grid-cols-[607px_171px_171px_171px] gap-x-12 items-center'>
                            {/* Product Info */}
                            <div className='flex items-center gap-x-5'>
                                <div className='w-[237px] h-[214px] bg-white01 rounded-md'>
                                    {item.imges && item.imges[0] && (
                                        <img src={item.imges[0]} alt={item.pName} className="w-full h-full object-cover rounded-md" />
                                    )}
                                </div>
                                <div>
                                    <h6 className="font-montserrat text-sm font-normal text-black01 uppercase tracking-[5px]">
                                        {item.pCategory}
                                    </h6>
                                    <h4 className="font-poppins text-sm font-semibold text-black01 mb-[46px] mt-[16px]">
                                        {item.pName}
                                    </h4>
                                    <span className='font-Montserrat text-base'>
                                        <b>Variant:</b> {item.variant || 'black'}
                                    </span>
                                </div>
                            </div>

                            {/* Price */}
                            <div>
                                <h6 className='font-Poppins font-semibold text-xl'>${item.price.toFixed(2)}</h6>
                            </div>

                            {/* Quantity Controls */}
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-x-8'>
                                        <button
                                            onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))}
                                            disabled={item.qty <= 1}
                                            className='cursor-pointer'
                                        >
                                            <LuMinus />
                                        </button>
                                        <div className='font-Poppins text-black01 font-semibold text-[16px] bg-white02 rounded-full flex items-center justify-center w-[30px] h-[30px]'>
                                            {item.qty}
                                        </div>
                                        <button
                                            onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))}
                                            className='cursor-pointer'
                                        >
                                            <FiPlus />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Total */}
                            <div className='pl-2'>
                                <h6 className='font-Poppins text-xl text-black01 font-semibold'>
                                    ${(item.price * item.qty).toFixed(2)}
                                </h6>
                            </div>
                        </div>

                        {/* Remove Button */}
                        <div
                            onClick={() => dispatch(removecart(item.id))}
                            className='absolute top-[50%] translate-y-[-50%] right-12 w-[64px] h-[64px] rounded-full bg-orange flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ease-in duration-150 cursor-pointer'
                        >
                            <BsTrash3 color="white" size={20} />
                        </div>
                    </div>
                ))}

                {/* Empty Cart State */}
                {cartItems.length === 0 && (
                    <div className="px-[56px] py-[32px] text-center">
                        <p className="font-Montserrat text-lg">Your cart is empty</p>
                        <Link
                            to="/"
                            className="text-orange hover:underline mt-4 inline-block"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cartbody;