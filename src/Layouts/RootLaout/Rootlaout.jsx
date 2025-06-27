import React from 'react'
import Header from '../../Golobalcomponentes/CommonLayout/Header/Header'
import Footer from '../../Golobalcomponentes/CommonLayout/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Rootlaout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Rootlaout