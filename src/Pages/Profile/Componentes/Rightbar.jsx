import React from "react";
import { useRenderComponent } from "../../../Hook/useRenderComponent";

const RightBar = ({ options }) => {
    const renderComponent = useRenderComponent(options);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white02 rounded-md p-6 sm:p-8">
                    <h3 className="font-poppins text-xl sm:text-3xl text-black01 font-semibold">
                        Order Tracking
                    </h3>
                    <p className="mt-2 font-montserrat text-base sm:text-xl text-black01">
                        See your order history.
                    </p>
                </div>

                <div className="bg-white02 rounded-md p-6 sm:p-8">
                    <h3 className="font-poppins text-xl sm:text-3xl text-black01 font-semibold">
                        Billing Address
                    </h3>
                    <p className="mt-2 font-montserrat text-base sm:text-xl text-black01">
                        Set your billing address.
                    </p>
                </div>
            </div>

            <div className="mt-8 sm:mt-10">
                {renderComponent}
            </div>
        </div>
    );
};

export default RightBar;
