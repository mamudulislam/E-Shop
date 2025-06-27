import React from 'react'
import Container from '../../Container'
import Menubarleft from './MenubarLayout/Menubarleft'
import MenubarRight from './MenubarLayout/MenubarRight'

const Menubar = () => {
    return (
        <div>
            <div className='bg-orange py-6'>
                <Container>
                    <div className='grid grid-cols-2 justify-between items-center '>
                        <div><Menubarleft /></div>
                        <div><MenubarRight /></div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Menubar