import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../../Golobalcomponentes/Container';
import Cartbody from './Componentes/Cartbody';
import { Helmet } from 'react-helmet-async';

const Cart = () => {
    const { pathname } = useLocation();
    const pageName = pathname.split("/").slice(1)[0];
    console.log(pageName);

    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <Container>
                <div className="mt-[64px] px-4 sm:px-8">
                    <div className="flex items-center gap-x-4 font-montserrat text-black01">
                        <Link to="/" className="hover:text-orange">Home</Link>
                        <div className="w-[1px] h-[20px] bg-black100"></div>
                        <span>{pageName}</span>
                    </div>

                    <h1 className="mt-[48px] text-[36px] sm:text-[56px] text-black01 font-Poppins font-bold">
                        Your Cart
                    </h1>

                    <div className="mt-[28px]">
                        <Cartbody />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cart;
