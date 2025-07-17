import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../../../Golobalcomponentes/ProductCard/ProductCard';
import Productcardlist from '../../../../Golobalcomponentes/Productcardlist/Productcardlist';
import { Featureddata } from '../../../Home/Componentes/FeaturedProducts/Featureddata';
import { Pagination } from 'antd';

const Showecsebody = () => {
    const viewMode = useSelector((state) => state.view.mode);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = Featureddata.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="mt-10 sm:mt-[48px]">
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-y-6 sm:gap-y-10 gap-x-4 sm:gap-x-5 mt-6 sm:mt-[30px]">
                    {currentProducts.map((product) => (
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
                <div className="mt-6 sm:mt-[30px] flex flex-col gap-y-4 sm:gap-y-6">
                    {currentProducts.map((product) => (
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

            <div className="mt-12 sm:mt-[80px] flex justify-center">
                <Pagination
                    current={currentPage}
                    pageSize={itemsPerPage}
                    total={Featureddata.length}
                    onChange={handlePageChange}
                    className="custom-pagination"
                />
            </div>
        </div>
    );
};

export default Showecsebody;
