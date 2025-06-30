import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../../../Golobalcomponentes/ProductCard/ProductCard';
import Productcardlist from '../../../../Golobalcomponentes/Productcardlist/Productcardlist';
import { Featureddata } from '../../../Home/Componentes/FeaturedProducts/Featureddata';

const Showecsebody = () => {
    const viewMode = useSelector((state) => state.view.mode);

    return (
        <div className="mt-[48px]">
            {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 2xl:gap-x-5 gap-y-10 mt-[30px]">
                    {Featureddata?.slice(0, 16)?.map((product) => (
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
                    ))}
                </div>
            ) : (
                <div className="mt-[30px] flex flex-col gap-y-6">
                    {Featureddata?.slice(0, 16)?.map((product) => (
                        <Productcardlist
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
                    ))}
                </div>
            )}
        </div>
    );
};

export default Showecsebody;
