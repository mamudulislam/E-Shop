import React from 'react'
import { Helmet } from 'react-helmet-async'
import Step from './Componentes/Step'
import Container from '../../Golobalcomponentes/Container'
import { Link, useLocation } from 'react-router-dom'
import Billingdetails from './Componentes/Billingdetails'
import Ordersummary from './Componentes/Ordersummary'

const Checkout = () => {
    const { pathname } = useLocation();
    const pageName = pathname.split("/").slice(1)[0];
    return (
        <>
            <Helmet>
                <title>Checkout</title>
            </Helmet >
            <Container>
                <div className='mt-[64px]'>
                    <div className="flex items-center gap-x-4 font-montserrat text-black01">
                        <Link to="/">Home</Link>
                        <div className="w-[1px] h-[20px] bg-black100"></div>
                        <span>{pageName}</span>
                    </div>
                </div>
                <div className='mt-[80px]'>
                    <Step />
                    <h1 className='mt-[48px] text-black01 font-Poppins font-bold text-[56px] text-center'>
                        Checkout
                    </h1>
                    <div className='grid grid-cols-[2fr_1fr] gap-x-[56px] mt-20'>
                        <div>
                            <Billingdetails />
                        </div>
                        <div>
                            <Ordersummary />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout