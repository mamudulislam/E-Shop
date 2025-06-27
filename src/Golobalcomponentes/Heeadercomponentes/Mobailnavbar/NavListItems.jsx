import React from 'react'
import { useTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';
import { LiaOpencart } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const NavListItems = () => {
    const { t } = useTranslation();
    return (
        <>
            <ul className='flex flex-col gap-4'>
                <li>
                    <Link to="/Product" className='font-Montserrat font-bold text-base !text-black01 hover:!text-orange'> {t('Products')}
                    </Link >
                </li >
                <li>
                    <Link to="/Blog" className='font-Montserrat font-bold text-base !text-black01 hover:!text-orange'> {t('Blog')}</Link>
                </li>
                <li>
                    <Link to="/Contact" className='font-Montserrat font-bold text-base !text-black01 hover:!text-orange'>{t('Contact')}</Link>
                </li>
                <li>
                    <Link to="/Product" className='font-Montserrat font-bold text-base !text-black01 hover:!text-orange'>
                        LIMITED SALE
                    </Link>
                </li>
                <li>
                    <Link to="/Product" className='font-Montserrat font-bold text-base !text-black01 hover:!text-orange'>
                        {t("Best Seller")}
                    </Link>
                </li>
                <li>
                    <Link to="/Product" className='font-Montserrat font-bold text-base !text-black01 hover:!text-orange'>
                        {t("New Arrival")}
                    </Link>
                </li>
            </ul >
            <div className='flex items-center justify-between w-full gap-x-5 mt-20'>
                <div className='flex items-center gap-x-5'>
                    <div className='relative'>
                        <LiaOpencart size={20} />
                        <span className='absolute top-0 right-0 w-1.5 h-1.5 bg-orange rounded-full'></span>
                    </div>
                    <div>
                        <h6 className='font-Montserrat text-sm text-black01'>{t('Cart')}</h6>
                        <span className='font-Montserrat text-sm text-black01 font-bold'>$ 150,00</span>
                    </div>
                </div>
                <div className='w-[1px] h-[32px] bg-black01'></div>
                <div className='flex items-center gap-x-5'>
                    <div>
                        <FiUser size={20} />
                    </div>
                    <div>
                        <h6 className='font-Montserrat text-sm text-black01'>{t('User')}</h6>
                        <span className='font-Montserrat text-sm text-black01 font-bold'>{t('Account')}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavListItems