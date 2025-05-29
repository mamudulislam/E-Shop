import React from 'react'
import Container from "../../../../Golobalcomponentes/Container"
import SprinLeft from './SprinLeft'
import SprinRight from './SprinRight'
const Springsale = () => {
    return (
        <>
            <section className='bg-white02 py-16 mt-20 '>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div className='w-[50%]'>
                            <SprinLeft />
                        </div>
                        <div className='w-[55%]'>
                            <SprinRight />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Springsale