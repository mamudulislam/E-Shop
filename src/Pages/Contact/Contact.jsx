import React from 'react'
import MapLayout from './Componentes/MapLayout'
import Container from '../../Golobalcomponentes/Container'
import ContactBody from './Componentes/ContactBody'
import Subscribe from '../Home/Componentes/Subscribe/Subscribe'

const Contact = () => {
    return (
        <>
            <Container>
                <MapLayout />
                <ContactBody />
                <Subscribe />
            </Container>
        </>
    )
}

export default Contact