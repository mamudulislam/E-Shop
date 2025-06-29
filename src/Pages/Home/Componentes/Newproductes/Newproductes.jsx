import React, { useState, useEffect } from 'react';
import Container from '../../../../Golobalcomponentes/Container';
import { useTranslation } from 'react-i18next';
import ProductCard from '../../../../Golobalcomponentes/ProductCard/ProductCard';
import Allctagorimenu from '../../../../Golobalcomponentes/Heeadercomponentes/Menubar/Allcatagories/Allctagorimenu';
import { newproductdata } from './Newproduct';
import { Featureddata } from '../FeaturedProducts/Featureddata';

const Newproductes = () => {
    const { t } = useTranslation();
    const [visibleCount, setVisibleCount] = useState(5);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 5);
    };
    useEffect(() => {
        console.log('Visible product count:', visibleCount);
    }, [visibleCount]);

    return (
        <div>
            <Container>
                <div className='mt-[80px] mb-[80px]'>
                    <div className='flex items-center justify-between'>
                        <h3 className='font-Poppins text-[24px] md:text-[36px] font-semibold text-black01'>
                            {t("New Products")}
                        </h3>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <span className='font-Montserrat font-normal text-sm md:text-base'>
                                {t("Sort by:")}
                            </span>
                            <div className='w-[150px]'>
                                <Allctagorimenu
                                    className="font-Montserrat font-bold text-base text-orange cursor-pointer w-full flex justify-between items-center"
                                    icons={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 2xl:gap-x-5 gap-y-10 mt-[30px]">
                        {Featureddata?.slice(0, visibleCount)?.map((product) => (
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
                    {visibleCount < newproductdata.length ? (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={loadMore}
                                className="px-6 py-2 bg-orange text-white font-semibold rounded hover:bg-orange-dark transition"
                            >
                                {t("Load More")}
                            </button>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 mt-8">
                            <button
                                onClick={loadMore}
                                className="px-6 py-2 bg-orange text-white font-semibold rounded hover:bg-orange-dark transition"
                            >
                                {t("Load More")}
                            </button>
                        </div>
                    )}

                </div>
            </Container>
        </div>
    );
};

export default Newproductes;
