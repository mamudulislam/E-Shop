import React from 'react'
import NumberandAddress from './NumberandAddress'
import Container from "../../../Golobalcomponentes/Container"
import Socialwhitelang from './Socialwhitelang'

const Topbar = () => {
    return (
        <div className=' border-b-1 border-b-black01 py-[22px]'>
            <Container>
                <div className='grid grid-cols-2 justify-between'>
                    <div><NumberandAddress /></div>
                    <div><Socialwhitelang /></div>
                </div >
            </Container>
        </div>
    )
}

export default Topbar