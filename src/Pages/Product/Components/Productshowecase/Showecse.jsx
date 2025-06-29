import React from 'react'
import Allctagorimenu from '../../../../Golobalcomponentes/Heeadercomponentes/Menubar/Allcatagories/Allctagorimenu'
import { useTranslation } from 'react-i18next';
import { IoGridOutline, IoMenu } from 'react-icons/io5';

const Showecse = () => {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <h1 className="font-montserrat text-[36px] font-bold text-black">
                    Products
                </h1>
            </div>
            <div className="flex items-center justify-between mt-6">
                <p className="font-montserrat text-base text-black01">
                    Showing 1 - 16 of 160 results.
                </p>
                <div className='flex gap-x-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <span className='font-Montserrat font-normal text-sm md:text-base'>
                                {t("Sort by")}
                            </span>
                            <div className='w-[150px]'>
                                <Allctagorimenu
                                    className="font-Montserrat font-bold text-base text-orange cursor-pointer w-full flex justify-between items-center"
                                    icons={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-[1px] h-[32px] bg-black200'></div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <span className='font-Montserrat font-normal text-sm md:text-base'>
                                {t("Sort by:")}
                            </span>
                            <div className='w-[150px]'>
                                <Allctagorimenu
                                    className="font-Montserrat font-bold text-base text-orange cursor-pointer w-full flex justify-between items-center"
                                    icons={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-[1px] h-[32px] bg-black200'></div>

                    <div className='flex gap-x-3 '>
                        <IoGridOutline className='w-6 h-6 hover:text-red-500' />
                        <IoMenu className='w-6 h-6 hover:text-red-500' />
                    </div>
                </div>
            </div >

        </>
    )
}

export default Showecse