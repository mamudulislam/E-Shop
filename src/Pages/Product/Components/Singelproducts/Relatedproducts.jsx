import React, { useEffect } from 'react';
import ProductCard from '../../../../Golobalcomponentes/ProductCard/ProductCard';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Subscribe from '../../../Home/Componentes/Subscribe/Subscribe';
import { useDispatch } from 'react-redux';
import { setCountrelated } from '../../../../settings/Redux/feature/Counterslice';

const Relatedproducts = ({ Relatedproduct }) => {
    const { pathname } = useLocation();
    const id = pathname.split("/").slice(1)[1];
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCountrelated());
    }, [id, dispatch]);

    return (
        <div className="px-4 sm:px-8">
            <div className='flex items-center justify-between mb-8'>
                <h3 className='font-Poppins text-2xl sm:text-[36px] font-semibold text-black01'>
                    {t("Related Products")}
                </h3>
                <Link to="/Product" className='flex items-center gap-x-2 font-Montserrat font-bold text-base text-orange group'>
                    {t("View All")}{" "}
                    <span className='group-hover:translate-x-2 transition-transform duration-400'>
                        <CgArrowLongRight size={30} />
                    </span>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-x-5 gap-y-10">
                {Relatedproduct?.length > 0 ? (
                    Relatedproduct?.slice(0, 4).map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            imges={product?.imges}
                            rate={product.rate}
                            pCategory={product.pCategory}
                            pName={product.pName}
                            totalrating={product.totalrating}
                            price={product.price}
                            discout={product.discout}
                        />
                    ))
                ) : (
                    <p className="font-Poppins text-center text-gray-500">No related products found.</p>
                )}
            </div>

            <Subscribe />
        </div>
    );
};

export default Relatedproducts;
