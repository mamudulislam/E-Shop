import React from 'react'
import Allctagorimenu from '../Allcatagories/Allctagorimenu'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Menubarleft = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='flex items-center gap-x-20'>
                <Allctagorimenu isMenu={true} className="font-Montserrat font-bold text-base text-white cursor-pointer flex items-center gap-x-2" />
                <Link to="/Product" className='font-Montserrat font-bold text-base text-white'> {t('Products')}</Link>
                <Link to="/Blog" className='font-Montserrat font-bold text-base text-white'> {t('Blog')}</Link>
                <Link to="/Contact" className='font-Montserrat font-bold text-base text-white'>{t('Contact')}</Link>
            </div >
        </>
    )
}

export default Menubarleft