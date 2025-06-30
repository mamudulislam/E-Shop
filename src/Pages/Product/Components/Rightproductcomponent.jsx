import React, { useState } from 'react'
import Showecsebody from './Productshowecase/Showecsebody'
import ShowcaseHeader from './Productshowecase/ShowcaseHeader'

const Rightproductcomponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(16);
    return (
        <>
            <div>
                <ShowcaseHeader currentPage={currentPage}
                    pageSize={pageSize} />
                <Showecsebody currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize} />
            </div>
        </>
    )
}

export default Rightproductcomponent