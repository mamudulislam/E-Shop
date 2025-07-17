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
                <div className="space-y-12 md:space-y-16 lg:space-y-20">
                    <MapLayout />
                    <ContactBody />
                    <Subscribe />
                </div>
            </Container>
        </>
    )
}

export default Contact
