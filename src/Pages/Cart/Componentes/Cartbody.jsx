import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsTrash3 } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';
import { updateQty, removecart } from '../../../settings/Redux/feature/Cartslice';
import { Link } from 'react-router-dom';

const Cartbody = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const subTotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    return (
        <div>
            <div className='bg-white02 rounded-lg px-[56px] py-[32px]'>
                <div className='grid grid-cols-[607px_171px_171px_171px] gap-x-12'>
                    <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>Product</h4>
                    <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>price</h4>
                    <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>Qty</h4>
                    <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>Total</h4>
                </div>
            </div>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id} className='px-[56px] py-[32px] border border-transparent hover:border-black100 relative group'>
                        <div className='grid grid-cols-[607px_171px_171px_171px] gap-x-12 items-center'>
                            <div className='flex items-center gap-x-5'>
                                <div className='w-[237px] h-[214px] bg-white01 rounded-md overflow-hidden'>
                                    {item.imges?.[0] && (
                                        <img
                                            src={item.imges[0]}
                                            alt={item.pName}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    )}
                                </div>
                                <div>
                                    <h6 className="font-montserrat text-sm font-normal text-black01 uppercase tracking-[5px]">
                                        {item.pCategory}
                                    </h6>
                                    <h4 className="font-poppins text-sm font-semibold text-black01 mt-[16px] mb-[46px]">
                                        {item.pName}
                                    </h4>
                                    <span className='font-Montserrat text-base'>
                                        <b>Variant:</b> {item.variant || 'N/A'}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className='font-Poppins font-semibold text-xl'>${item.price.toFixed(2)}</h6>
                            </div>

                            <div className='flex items-center gap-x-8'>
                                <button
                                    onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))}
                                    disabled={item.qty <= 1}
                                    className='cursor-pointer'
                                >
                                    <LuMinus />
                                </button>
                                <div className='font-Poppins text-black01 font-semibold text-[16px] bg-white02 rounded-full w-[30px] h-[30px] flex items-center justify-center'>
                                    {item.qty}
                                </div>
                                <button
                                    onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))}
                                    className='cursor-pointer'
                                >
                                    <FiPlus />
                                </button>
                            </div>
                            <div>
                                <h6 className='font-Poppins text-xl text-black01 font-semibold'>
                                    ${(item.price * item.qty).toFixed(2)}
                                </h6>
                            </div>
                        </div>
                        <div
                            onClick={() => dispatch(removecart(item.id))}
                            className='absolute top-[50%] translate-y-[-50%] right-12 w-[64px] h-[64px] rounded-full bg-orange flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-150 cursor-pointer'
                        >
                            <BsTrash3 color="white" size={20} />
                        </div>
                    </div>
                ))
            ) : (
                <div className="px-[56px] py-[32px] text-center">
                    <p className="font-Montserrat text-lg">Your cart is empty</p>
                    <Link to="/" className="text-orange hover:underline mt-4 inline-block">
                        Continue Shopping
                    </Link>
                </div>
            )}
            {cartItems.length > 0 && (
                <>
                    <div className="flex justify-between items-center mt-12">
                        <div>
                            <input
                                type="text"
                                placeholder="Enter coupon code (ex: FIRSTPAY)"
                                className="border border-gray-300 px-4 py-3 rounded-md text-black text-sm w-[300px]"
                            />
                            <button className="ml-3 font-bold text-sm underline text-black01 hover:text-orange">
                                Apply Code
                            </button>
                        </div>
                        <div className="flex items-center gap-x-6 w-[40%] bg-white02 p-4 rounded-lg">
                            <div className="w-full flex justify-between">
                                <p className="text-sm font-semibold text-black01 uppercase">SUB TOTAL</p>
                                <p className="text-xl font-bold text-orange">${subTotal.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-x-11 mt-5">
                        <Link to="/" className="text-black01 font-semibold">
                            Continue Shopping
                        </Link>
                        <button className="bg-orange text-white px-6 py-3 rounded-md font-semibold">
                            Update Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cartbody;
