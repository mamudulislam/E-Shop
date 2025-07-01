import React, { useState } from 'react'
import Showecsebody from './Productshowecase/Showecsebody'
import ShowcaseHeader from './Productshowecase/ShowcaseHeader'
import { Featureddata } from '../../Home/Componentes/FeaturedProducts/Featureddata';

const Rightproductcomponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;
    const totalItems = Featureddata.length;

    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalItems);
    return (
        <>
            <div>
                <ShowcaseHeader
                    startIndex={startIndex}
                    endIndex={endIndex}
                    totalItems={totalItems} />
                <Showecsebody
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    itemsPerPage={itemsPerPage} />
            </div>
        </>
    )
}

export default Rightproductcomponent