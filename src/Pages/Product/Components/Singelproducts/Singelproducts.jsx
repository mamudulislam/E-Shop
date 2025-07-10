import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../../../../Golobalcomponentes/Container';
import { Featureddata } from '../../../Home/Componentes/FeaturedProducts/Featureddata';
import Productdetailes from './Productdetailes';
import Checkoutcount from './Checkoutcount';
import ProductDescription from './ProductDescription';
import Relatedproducts from './Relatedproducts';
import { useDispatch } from 'react-redux';
import { setCountreset } from '../../../../settings/Redux/feature/Counterslice';

const Singelproducts = () => {
    const { pathname } = useLocation();
    const id = pathname.split("/").slice(1)[1];
    const Singelproducts = Featureddata.find((p) => p.id == id);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCountreset())
    }, [])

    return (
        <>
            <Container>
                <div className='mt-20'>
                    <div className="flex items-center gap-x-4 font-montserrat text-black01">
                        <Link to="/">Home</Link>
                        <div className="w-[1px] h-[20px] bg-black100"></div>
                        <span>{Singelproducts.pCategory}</span>
                        <div className="w-[1px] h-[20px] bg-black100"></div>
                        <span>{Singelproducts.brand}</span>
                        <div className="w-[1px] h-[20px] bg-black100"></div>
                        <span className="font-bold">{Singelproducts.pName}</span>
                    </div>
                    <div className='mt-[48px]'>
                        <Productdetailes {...Singelproducts} />
                    </div>
                    <div className='mt-[48px]'>
                        <Checkoutcount product={{
                            ...Singelproducts,
                            imges: Singelproducts.imges
                        }} />
                    </div>
                    <div className='mt-[48px]'>
                        <ProductDescription description={Singelproducts.description} />
                    </div>
                    <div className='mt-[48px]'>
                        <Relatedproducts
                            Relatedproduct={Featureddata.filter((product) =>
                                product.pCategory === Singelproducts.pCategory &&
                                product.id !== Singelproducts.id
                            )}
                        />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Singelproducts