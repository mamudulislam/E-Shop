import React from 'react';
import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { LiaOpencart } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const Searchwhiteauthandcrt = () => {
    const { t } = useTranslation();

    return (
        <div className='flex items-center justify-between w-full gap-x-5'>
            <div className='border border-black01 rounded-[10px] flex items-center justify-between px-[24px] py-[18px] w-[332px]'>
                <input placeholder={t('search_product')} type="text" className='outline-none' />
                <CiSearch size={20} />
            </div>
            <Link to="/Cart">
                <div className='flex items-center gap-x-5'>
                    <div className='relative'>
                        <LiaOpencart size={30} />
                        {/* <span className='absolute top-0 right-0 w-1.5 h-1.5 bg-orange rounded-full'></span> */}
                    </div>
                    <div>
                        <h6 className='font-Montserrat text-base text-black01'>{t('Cart')}</h6>
                        <span className='font-Montserrat text-base text-black01 font-bold'>$ 150,00</span>
                    </div>
                </div>
            </Link>

            <div className='w-[1px] h-[32px] bg-black01'></div>
            <Link to="/sing-up">
                <div className='flex items-center gap-x-5'>
                    <div>
                        <FiUser size={25} />
                    </div>
                    <div>
                        <h6 className='font-Montserrat text-base text-black01'>{t('User')}</h6>
                        <span className='font-Montserrat text-base text-black01 font-bold'>{t('Account')}</span>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default Searchwhiteauthandcrt;
