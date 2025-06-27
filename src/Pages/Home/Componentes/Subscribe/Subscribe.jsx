import React from 'react'
import Subscribeform from '../../../../Golobalcomponentes/Subscribe/form/Subscribeform'
const Subscribe = () => {
    return (
        <div className='mt-20'>
            <div className='rounded-[25px] bg-gray grid grid-cols-[2fr_3fr] overflow-hidden'>
                <div className='bg-linear-to-r from-white02 to-gray py-[114px] pl-[100px]'>
                    <Subscribeform />
                </div>
                <div className='bg-gray'>
                </div>
            </div>
        </div>
    )
}

export default Subscribe