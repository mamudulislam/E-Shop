import React from 'react';
import { useSelector } from 'react-redux';
import { gotDiscounty } from '../../../Utils/gotDiscounty';
import { Link } from 'react-router-dom';

const Ordersummary = ({ handleSubmit }) => {
    const cartItems = useSelector((state) => state.cart.items);
    const subTotal = cartItems.reduce(
        (acc, item) => acc + gotDiscounty(item.price, item.discount) * item.qty,
        0
    );

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto h-[700px] overflow-y-auto">
            <h2 className="font-Poppins text-xl text-black font-semibold mb-6">Order Summary</h2>
            <div>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center py-4 border-b">
                            <div className="flex items-center gap-x-4">
                                <h4 className="font-Montserrat font-normal text-[20px] text-black">{item.pName}</h4>
                            </div>
                            <div>
                                <div className="font-Poppins text-black font-semibold text-lg">
                                    {item.qty}
                                </div>
                            </div>
                            <div>
                                <h6 className="font-Poppins text-lg font-semibold text-black">
                                    ${(gotDiscounty(item.price, item.discount) * item.qty).toFixed(2)}
                                </h6>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-6">
                        <p className="font-Montserrat text-lg text-black">Your cart is empty</p>
                        <Link to="/" className="text-orange hover:underline mt-4 inline-block">
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="flex justify-between items-center mt-6 bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-black">Subtotal</p>
                    <p className="text-xl font-bold text-orange">${subTotal.toFixed(2)}</p>
                </div>
            )}
            <button
                type="button"
                onClick={handleSubmit}
                className="bg-orange text-white px-6 py-3 rounded-md mt-6 w-full"
            >
                Order Now
            </button>
        </div>
    );
};

export default Ordersummary;
