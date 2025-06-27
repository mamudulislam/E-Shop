import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const MenubarRight = () => {
    const { t } = useTranslation()
    return (
        <div className='flex items-center justify-end gap-x-20'>
            <Link to="/Product" className='font-Montserrat font-bold text-base text-white'>
                LIMITED SALE 👋🏻
            </Link>
            <Link to="/Product" className='font-Montserrat font-bold text-base text-white'>
                {t("Best Seller")}
            </Link>
            <Link to="/Product" className='font-Montserrat font-bold text-base text-white'>
                {t("New Arrival")}
            </Link>
        </div>
    )
}

export default MenubarRight