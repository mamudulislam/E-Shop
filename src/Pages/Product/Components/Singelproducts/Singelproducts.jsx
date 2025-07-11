import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../../Golobalcomponentes/Container';
import { Featureddata } from '../../../Home/Componentes/FeaturedProducts/Featureddata';
import Productdetailes from './Productdetailes';
import Checkoutcount from './Checkoutcount';
import ProductDescription from './ProductDescription';
import Relatedproducts from './Relatedproducts';
import { setCountinit, setCountreset } from '../../../../settings/Redux/feature/Counterslice';

const Singelproducts = () => {
    const { pathname } = useLocation();
    const id = Number(pathname.split("/")[2]);
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);
    const singleProduct = Featureddata.find((p) => p.id === id);

    useEffect(() => {
        if (!singleProduct) return;

        const cartItem = cartItems.find((item) => item.id === singleProduct.id);

        if (cartItem) {
            dispatch(setCountinit(cartItem.qty));
        } else {
            dispatch(setCountreset());
        }
        return () => {
            dispatch(setCountreset());
        };
    }, [dispatch, singleProduct?.id]);

    if (!singleProduct) {
        return <div className="text-center py-20 text-red-500">Product not found.</div>;
    }

    return (
        <Container>
            <div className='mt-20'>
                <div className="flex items-center gap-x-4 font-montserrat text-black01">
                    <Link to="/">Home</Link>
                    <div className="w-[1px] h-[20px] bg-black100"></div>
                    <span>{singleProduct.pCategory}</span>
                    <div className="w-[1px] h-[20px] bg-black100"></div>
                    <span>{singleProduct.brand}</span>
                    <div className="w-[1px] h-[20px] bg-black100"></div>
                    <span className="font-bold">{singleProduct.pName}</span>
                </div>
                <div className='mt-[48px]'>
                    <Productdetailes {...singleProduct} />
                </div>
                <div className='mt-[48px]'>
                    <Checkoutcount product={singleProduct} />
                </div>
                <div className='mt-[48px]'>
                    <ProductDescription description={singleProduct.description} />
                </div>
                <div className='mt-[48px]'>
                    <Relatedproducts
                        Relatedproduct={Featureddata.filter(
                            (product) =>
                                product.pCategory === singleProduct.pCategory &&
                                product.id !== singleProduct.id
                        )}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Singelproducts;
