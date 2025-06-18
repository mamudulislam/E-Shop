import React from 'react'
import Container from '../../../Golobalcomponentes/Container'
import overview1 from '../../../assets/Productimg/overview1.png'
import overview2 from '../../../assets/Productimg/overview2.png'
const Overview = () => {
    return (
        <>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-[auto_auto] gap-y-5 lg:gap-x-5'>
                    <div>
                        <img src={overview1} alt="overview1....." className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <img src={overview2} alt="overview2....." className='h-full w-full object-cover' />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Overview