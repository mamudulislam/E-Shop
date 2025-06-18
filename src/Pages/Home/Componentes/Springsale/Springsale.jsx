import React from 'react';
import Container from '../../../../Golobalcomponentes/Container';
import SprinLeft from './SprinLeft';
import SprinRight from './SprinRight';

const Springsale = () => {
    return (
        <section className="bg-white02 py-12 sm:py-16 mt-16 sm:mt-20">
            <Container>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
                    <div className="w-full lg:w-1/2">
                        <SprinLeft />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <SprinRight />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Springsale;
