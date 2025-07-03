import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../../../../Golobalcomponentes/Container';
import { Featureddata } from '../../../Home/Componentes/FeaturedProducts/Featureddata';
import Productdetailes from './Productdetailes';
import Checkoutcount from './Checkoutcount';
import ProductDescription from './ProductDescription';
import Relatedproducts from './Relatedproducts';

const Singelproducts = () => {
    const { pathname } = useLocation();
    const id = pathname.split("/").slice(1)[1];
    const Singelproducts = Featureddata.find((p) => p.id == id);
    const {
        pCategory,
        pName,
        imges,
        totalrating,
        rate,
        price,
        discout,
        brand,
        size,
        variant,
        weight,
        delivery,
        description
    } = Singelproducts;
    const Relatedproduct = Featureddata.filter((product) =>
        product.pCategory === Singelproducts.pCategory &&
        product.id !== Singelproducts.id
    );
    console.log(Relatedproducts);
    console.log(Singelproducts);
    return (
        <>
            <Container>
                <div className='mt-20'>
                    <div className="flex items-center gap-x-4 font-montserrat text-black01">
                        <Link to="/">Home</Link>
                        <div className="w-[1px] h-[20px] bg-black100"></div>
                        <span>{pCategory}</span>
                        <div className="w-[1px] h-[20px] bg-black100"></div>
                        <span>{brand}</span>
                        <div className="w-[1px] h-[20px] bg-black100"></div>
                        <span className="font-bold">{pName}</span>
                    </div>
                    <div className='mt-[48px]'>
                        <Productdetailes
                            pName={pName}
                            imges={imges}
                            totalrating={totalrating}
                            rate={rate}
                            price={price}
                            discout={discout}
                            brand={brand}
                            size={size}
                            variant={variant}
                            weight={weight}
                            delivery={delivery}
                        />
                    </div>
                    <div className='mt-[48px]'>
                        <Checkoutcount />
                    </div>
                    <div className='mt-[48px]'>
                        <ProductDescription description={description} />
                    </div>
                    <div className='mt-[48px]'>
                        <Relatedproducts Relatedproduct={Relatedproduct} />
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Singelproducts