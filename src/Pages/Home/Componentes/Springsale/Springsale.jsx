import React from 'react'
import Container from "../../../../Golobalcomponentes/Container"
import SprinLeft from './SprinLeft'
import SprinRight from './SprinRight'
const Springsale = () => {
    return (
        <>
            <section className='bg-white02 py-16 mt-20 '>
                <Container>
                    <div className='grid grid-cols-[auto_auto] items-center gap-x-4'>
                        <SprinLeft />
                        <SprinRight />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Springsale