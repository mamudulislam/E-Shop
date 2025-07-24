import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { OrderIcon, UserIcon } from "../../../assets/SVG/UserProfileIcons";

const LeftBar = ({ setOptions }) => {
    return (
        <div className="p-4 sm:p-5 border border-white02 rounded-lg w-full">
            <div className="text-center border-b border-b-black100 pb-6 sm:pb-10">
                <div className="w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-white01 mx-auto"></div>

                <h1 className="font-poppins font-semibold text-lg sm:text-2xl text-black01 mt-6 sm:mt-10">
                    Mamudul Islam
                </h1>
                <p className="font-montserrat font-semibold text-sm sm:text-base text-black100">
                    Mamudulislam@gmail.com
                </p>
            </div>

            <div className="mt-8 sm:mt-10">
                <ul>
                    <li
                        onClick={() => setOptions(1)}
                        className="flex items-center gap-x-2 font-poppins text-base mb-4 sm:mb-5 cursor-pointer hover:text-primary transition"
                    >
                        <OrderIcon />
                        <span>Orders</span>
                    </li>
                    <li
                        onClick={() => setOptions(2)}
                        className="flex items-center gap-x-2 font-poppins text-base mb-4 sm:mb-5 cursor-pointer hover:text-primary transition"
                    >
                        <UserIcon />
                        <span>Account Details</span>
                    </li>
                    <li
                        className="flex items-center gap-x-2 font-poppins text-base cursor-pointer hover:text-red-500 transition"
                    >
                        <IoLogOutOutline size={24} />
                        <span>Log out</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LeftBar;
