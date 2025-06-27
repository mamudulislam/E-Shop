import React from 'react'
import Commonbuttun from '../../../../../Golobalcomponentes/Commonbuttun'
import { t } from 'i18next'

const Faqright = () => {
    return (
        <>
            <div className="self-end">
                <h4 className="font-poppins font-semibold text-2xl lg:text-[36px] text-black01">
                    {t("Frequently Asked Questions")}
                </h4>
                <p className="font-montserrat font-normal text-lg lg:text-xl text-black01 mt-4">
                    Questions that get asked the most by our clients. Get any burning
                    questions?
                </p>
                <Commonbuttun className="!bg-orange !px-10 !h-12 !border-none !mt-5 !mb-5 lg:!mb-0 lg:!mt-[60px]">
                    <span className="font-montserrat font-bold text-lg text-white">
                        {t("Ask A Question")}
                    </span>
                </Commonbuttun>
            </div>
        </>

    )
}

export default Faqright