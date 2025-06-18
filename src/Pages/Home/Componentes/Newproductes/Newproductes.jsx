import React, { useState, useEffect } from 'react';
import Container from '../../../../Golobalcomponentes/Container';
import { useTranslation } from 'react-i18next';
import ProductCard from '../../../../Golobalcomponentes/ProductCard/ProductCard';
import Allctagorimenu from '../../../../Golobalcomponentes/Heeadercomponentes/Menubar/Allcatagories/Allctagorimenu';
import { newproductdata } from './Newproduct';

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
                        {newproductdata.slice(0, visibleCount).map((product) => (
                            <div key={product.id} className="px-2">
                                <ProductCard
                                    imges={product.imges}
                                    pCatagori={product.pCatagori}
                                    pName={product.pName}
                                    rate={product.rate}
                                    totalrating={product.totalrating}
                                    price={product.price}
                                    pdiscout={product.discount}
                                />
                            </div>
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
