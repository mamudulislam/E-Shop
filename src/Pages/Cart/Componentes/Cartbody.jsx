import React from 'react'
import Productscarts from './Productscarts'

const Cartbody = () => {
    return (
        <>
            <div>
                <div className='bg-white02 rounded-lg px-[56px] py-[32px]'>
                    <div className='grid grid-cols-[607px_171px_171px_171px] gap-x-12'>
                        <div>
                            <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>product</h4>
                        </div>
                        <div>
                            <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>PRICE</h4>
                        </div>
                        <div>
                            <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>QTY</h4>
                        </div>
                        <div>
                            <h4 className='font-Montserrat font-bold text-base text-black01 uppercase'>TOTAL</h4>
                        </div>
                    </div>
                </div>
                <Productscarts />
            </div>
        </>
    )
}

export default Cartbody