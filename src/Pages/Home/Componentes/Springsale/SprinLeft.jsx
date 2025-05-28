import React from 'react'
import Countdown from 'react-countdown';
import { useTranslation } from 'react-i18next';
import Rendercountdawn from './Rendercountdawn';

const SprinLeft = () => {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <h3 className='font-Poppins font-bold text-[54px] text-black01'> {t('Spring Sale')}</h3>
                <Countdown date={Date.now() + 10000000000} renderer={Rendercountdawn} />
            </div>
        </>
    )
}

export default SprinLeft