import React from 'react';
import Countdown from 'react-countdown';
import { useTranslation } from 'react-i18next';
import Rendercountdawn from './Rendercountdawn';
import Commonbuttun from '../../../../Golobalcomponentes/Commonbuttun';

const SprinLeft = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full text-center lg:text-left">
            <h3 className="font-Poppins font-extrabold text-[24px] sm:text-[30px] md:text-[40px] lg:text-[54px] text-black01 leading-tight">
                {t('Spring Sale')}
            </h3>
            <div className="mt-6 sm:mt-8 md:mt-10">
                <Countdown date={Date.now() + 10000000} renderer={Rendercountdawn} />
            </div>
            <div className="mt-10 sm:mt-12 md:mt-[60px]">
                <Commonbuttun className="!bg-orange !px-8 sm:!px-10 !h-10 sm:!h-11 !border-none">
                    <span className="font-Montserrat font-bold text-base sm:text-lg text-white">
                        {t('Shop Now')}
                    </span>
                </Commonbuttun>
            </div>
        </div>
    );
};

export default SprinLeft;
