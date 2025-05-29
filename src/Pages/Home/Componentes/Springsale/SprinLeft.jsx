import React from 'react'
import Countdown from 'react-countdown';
import { useTranslation } from 'react-i18next';
import Rendercountdawn from './Rendercountdawn';
import Commonbuttun from '../../../../Golobalcomponentes/Commonbuttun';

const SprinLeft = () => {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <h3 className='font-Poppins font-extrabold text-[54px] text-black01'> {t('Spring Sale')}</h3>
                <div className='mt-10'>
                    <Countdown date={Date.now() + 10000000} renderer={Rendercountdawn} />
                </div>
                <Commonbuttun className="!bg-orange !px-10 !h-11 !border-none !mt-[60px]">
                    <span className='font-Montserrat font-bold text-lg text-white'>
                        Shop Now
                    </span>
                </Commonbuttun>
            </div>
        </>
    )
}

export default SprinLeft