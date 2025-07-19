import React from "react";
import Order from "../Pages/Profile/Componentes/Order";
import AccountDetails from "../Pages/Profile/Componentes/AccountDetails";

export const useRenderComponent = (state) => {
    switch (state) {
        case 1:
            return <Order />;
        case 2:
            return <AccountDetails />;
        default:
            return <div>Not Found</div>;
    }
};