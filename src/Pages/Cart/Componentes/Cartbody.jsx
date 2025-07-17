import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsTrash3 } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';
import { updateQty, removecart } from '../../../settings/Redux/feature/Cartslice';
import { Link, useNavigate } from 'react-router-dom';
import { gotDiscounty } from '../../../Utils/gotDiscounty';

const Cartbody = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const subTotal = cartItems.reduce(
        (acc, item) => acc + gotDiscounty(item.price, item.discout) * item.qty,
        0
    );

    let handelorderproducts = () => {
        navigate("/Checkout");
    };

    return (
        <div className="px-4 sm:px-6 lg:px-[56px]">
            <div className='bg-white02 rounded-lg py-6 hidden sm:block'>
                <div className='grid grid-cols-[607px_171px_171px_171px] gap-x-12'>
                    <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>Product</h4>
                    <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>Price</h4>
                    <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>Qty</h4>
                    <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>Total</h4>
                </div>
            </div>



            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div
                        key={item.id}
                        className='py-6 border border-transparent hover:border-black100 relative group'
                    >
                        <div className='grid grid-cols-1 md:grid-cols-[607px_171px_171px_171px] gap-y-6 md:gap-x-12 items-center'>
                            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-5'>
                                <div className='w-full sm:w-[237px] h-[214px] bg-white01 rounded-md overflow-hidden'>
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
                                    <h4 className="font-poppins text-sm font-semibold text-black01 mt-4 mb-6">
                                        {item.pName}
                                    </h4>
                                    <span className='font-Montserrat text-base'>
                                        <b>Variant:</b> {item.variant || 'N/A'}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h2 className="font-poppins text-[20px] font-semibold text-black01 leading-[0.8]">
                                    ${gotDiscounty(item.price, item.discout)}
                                </h2>
                            </div>

                            <div className='flex items-center gap-x-8'>
                                <button
                                    onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))}
                                    disabled={item.qty <= 1}
                                    className='cursor-pointer disabled:opacity-40'
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
                                    ${(gotDiscounty(item.price, item.discout) * item.qty).toFixed(2)}
                                </h6>
                            </div>
                        </div>

                        <div
                            onClick={() => dispatch(removecart(item.id))}
                            className='absolute top-6 right-4 md:top-[50%] md:translate-y-[-50%] md:right-12 w-[48px] md:w-[64px] h-[48px] md:h-[64px] rounded-full bg-orange flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-150 cursor-pointer'
                        >
                            <BsTrash3 color="white" size={20} />
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center py-16">
                    <p className="font-Montserrat text-lg">Your cart is empty</p>
                    <Link to="/" className="text-orange hover:underline mt-4 inline-block">
                        Continue Shopping
                    </Link>
                </div>
            )}

            {cartItems.length > 0 && (
                <>
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-12 gap-6">
                        <div className="w-full lg:w-auto">
                            <input
                                type="text"
                                placeholder="Enter coupon code (ex: FIRSTPAY)"
                                className="border border-gray-300 px-4 py-3 rounded-md text-black text-sm w-full sm:w-[300px]"
                            />
                            <button className="ml-0 sm:ml-3 mt-3 sm:mt-0 font-bold text-sm underline text-black01 hover:text-orange">
                                Apply Code
                            </button>
                        </div>

                        <div className="w-full lg:w-[40%] bg-white02 p-4 rounded-lg">
                            <div className="w-full flex justify-between">
                                <p className="text-sm font-semibold text-black01 uppercase">SUB TOTAL</p>
                                <p className="text-xl font-bold text-orange">${subTotal.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-end gap-4 sm:gap-x-11 mt-8">
                        <Link to="/" className="text-black01 font-semibold">
                            Continue Shopping
                        </Link>
                        <button
                            onClick={handelorderproducts}
                            className="bg-orange text-white px-6 py-3 rounded-md font-semibold"
                        >
                            Order Products
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cartbody;
