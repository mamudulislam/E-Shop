import React from 'react'
import Container from '../../Golobalcomponentes/Container'
import Registerform from './Componentes/Registerform'

const Register = () => {
    return (
        <>
            <Container>
                <div className='max-w-[600px] mx-auto'>
                    <h1 className='font-Poppins font-bold text-[56px] text-black01 text-center'>Register</h1>
                    <div className='mt-5'>
                        <Registerform />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Register