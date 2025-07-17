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
    }, [dispatch, singleProduct?.id, cartItems]);

    if (!singleProduct) {
        return <div className="text-center py-20 text-red-500">Product not found.</div>;
    }

    return (
        <Container>
            <div className="mt-20 md:mt-6">
                <div className="flex items-center gap-x-4 font-montserrat text-black01">
                    <Link to="/" className="hover:text-orange transition-colors duration-200">Home</Link>
                    <div className="w-[1px] h-[20px] bg-black100"></div>
                    <span>{singleProduct.pCategory}</span>
                    <div className="w-[1px] h-[20px] bg-black100"></div>
                    <span>{singleProduct.brand}</span>
                    <div className="w-[1px] h-[20px] bg-black100"></div>
                    <span className="font-bold">{singleProduct.pName}</span>
                </div>

                <div className="mt-12 sm:mt-16">
                    <Productdetailes {...singleProduct} />
                </div>

                <div className="mt-12 sm:mt-16">
                    <Checkoutcount product={singleProduct} />
                </div>

                <div className="mt-12 sm:mt-16">
                    <ProductDescription description={singleProduct.description} />
                </div>

                <div className="mt-12 sm:mt-16">
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
