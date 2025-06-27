import { Checkbox } from 'antd'
import React, { useState } from 'react'

const Brand = () => {
    const allBrands = [
        { name: 'Apple', count: 100 },
        { name: 'Samsung', count: 340 },
        { name: 'ASUS', count: 340 },
        { name: 'Dell', count: 1340 },
        { name: 'Lenovo', count: 140 },
        { name: 'HP', count: 90 },
        { name: 'Acer', count: 60 },
        { name: 'Microsoft', count: 120 },
        { name: 'LG', count: 80 },
        { name: 'Sony', count: 70 },
    ]

    const [visibleCount, setVisibleCount] = useState(5)

    const handleMoreBrands = () => {
        setVisibleCount(prev => prev + 5)
    }

    const visibleBrands = allBrands.slice(0, visibleCount)

    return (
        <div className="my-5">
            <h4 className="font-montserrat font-bold text-xl text-black01">
                Brands
            </h4>
            <div className="mt-5">
                <ul>
                    {visibleBrands.map((brand, index) => (
                        <li key={index} className="my-2 flex items-center justify-between">
                            <Checkbox className="!font-montserrat !font-normal !text-base !text-black01">
                                {brand.name}
                            </Checkbox>
                            <span>({brand.count})</span>
                        </li>
                    ))}
                </ul>
            </div>

            {visibleCount < allBrands.length && (
                <div onClick={handleMoreBrands} className="cursor-pointer mt-[20px]">
                    <h4 className="font-montserrat font-bold text-[16px] text-black01">
                        More Brands
                    </h4>
                    <hr className='w-[96px] to-black01' />
                </div>
            )}
        </div>
    )
}

export default Brand
