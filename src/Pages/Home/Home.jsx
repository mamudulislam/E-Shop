import React from 'react';
import Container from '../../Golobalcomponentes/Container';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Banner from './Componentes/Banner';
import Support from './Componentes/Support/Support';
import FeaturedProducts from './Componentes/FeaturedProducts/FeaturedProducts';
import Overview from './Componentes/Overview';
import NewProducts from './Componentes/Newproductes/Newproductes';

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
        </>
    );
};

export default Home;
