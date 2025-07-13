import React from 'react'
import Container from '../../../Golobalcomponentes/Container'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom';

const Payment = () => {
    const { pathname } = useLocation();
    const pageName = pathname.split("/").slice(1)[0];
    return (
        <div>
            <Helmet>
                <title>Payment</title>
            </Helmet>
            <Container>
                <div className='mt-[64px]'>
                    <div className="flex items-center gap-x-4 font-montserrat text-black01">
                        <Link to="/">Home</Link>
                        <div className="w-[1px] h-[20px] bg-black100"></div>
                        <span>{pageName}</span>
                    </div>
                </div>
                <div className='mt-20'>

                    this is paymentpages
                </div>
            </Container>
        </div>
    )
}

export default Payment