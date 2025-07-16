import React from 'react'
import MapLayout from './Componentes/MapLayout'
import Container from '../../Golobalcomponentes/Container'
import ContactBody from './Componentes/ContactBody'
import Subscribe from '../Home/Componentes/Subscribe/Subscribe'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Container>
                <MapLayout />
                <ContactBody />
                <Subscribe />
            </Container>
        </>
    )
}

export default Contact