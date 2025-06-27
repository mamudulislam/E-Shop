import React from 'react'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'

const NumberandAddress = () => {
    return (
        <>
            <div className='flex items-center w-full gap-x-4'>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <IoLocationOutline />
                    </div>
                    <div>
                        <p className='font-Montserrat text-sm font-normal text-black01'>123 Main Street, Anytown USA</p>

                    </div>
                </div>
                <div className='w-[1px] h-[32px] bg-black01'></div>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <IoCallOutline />
                    </div>
                    <div>
                        <p className='font-Montserrat text-sm font-normal text-black01'>+1 (555) 123-4567</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NumberandAddress