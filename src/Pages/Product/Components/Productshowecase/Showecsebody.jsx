import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'antd';
import ProductCard from '../../../../Golobalcomponentes/ProductCard/ProductCard';
import Productcardlist from '../../../../Golobalcomponentes/Productcardlist/Productcardlist';
import { Featureddata } from '../../../Home/Componentes/FeaturedProducts/Featureddata';

const Showecsebody = () => {
    const viewMode = useSelector((state) => state.view.mode);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(16);

    // Calculate paginated data
    const paginatedData = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return Featureddata.slice(startIndex, endIndex);
    };

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
    };

    return (
        <div className="mt-[48px]">
            {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 2xl:gap-x-5 gap-y-10 mt-[30px]">
                    {paginatedData().map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            ) : (
                <div className="mt-[30px] flex flex-col gap-y-6">
                    {paginatedData().map((product) => (
                        <Productcardlist
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            )}

            {/* Ant Design Pagination */}
            <div className="mt-10 flex justify-center">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={Featureddata.length}
                    onChange={handlePageChange}
                    showSizeChanger
                    pageSizeOptions={['8', '16', '24', '32']}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                />
            </div>
        </div>
    );
};

export default Showecsebody;