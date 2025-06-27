import React from 'react'
import Container from '../../../../Golobalcomponentes/Container'
import FaqLeft from './FAQLayOuts/FaqLeft'
import Faqright from './FAQLayOuts/Faqright'

const Faq = () => {
    return (
        <section className='bg-white02 py-16 mt-20'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-9'>
                    <div className="order-1 lg:order-0">
                        <FaqLeft />
                    </div>
                    <Faqright />
                </div>
            </Container>
        </section>
    )
}

export default Faq