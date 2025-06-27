import React from 'react';
import Container from '../../Golobalcomponentes/Container';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Banner from './Componentes/Banner';
import Support from './Componentes/Support/Support';
import FeaturedProducts from './Componentes/FeaturedProducts/FeaturedProducts';
import Overview from './Componentes/Overview';
import NewProducts from './Componentes/Newproductes/Newproductes';
import Springsale from './Componentes/Springsale/Springsale';
import Bestseller from './Componentes/Bestseller/Bestseller';
import Faq from './Componentes/FAQ/Faq';
import TechTalk from './Componentes/TechTalk/TechTalk';
import Companies from './Componentes/Companies';
import Subscribe from './Componentes/Subscribe/Subscribe';

const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Container>
                <Banner />
                <Support />
                <FeaturedProducts />
                <Overview />
                <NewProducts />
            </Container>
            <Springsale />
            <Container>
                <Bestseller />
            </Container>
            <Faq />
            <Container>
                <TechTalk />
                <Companies />
                <Subscribe />
            </Container>
        </>
    );
};

export default Home;
