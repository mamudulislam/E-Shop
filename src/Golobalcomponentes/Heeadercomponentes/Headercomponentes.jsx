import React from 'react'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'
import Menubar from './Menubar/Menubar'
import Mobailnavbar from './Mobailnavbar/Mobailnavbar'

const Headercomponentes = () => {
    return (
        <>
            <div className='hidden lg:block'>
                <Topbar />
                <Navbar />
                <Menubar />
            </div>
            <div className='lg:hidden'>
                <Mobailnavbar />
            </div>
        </>
    )
}

export default Headercomponentes