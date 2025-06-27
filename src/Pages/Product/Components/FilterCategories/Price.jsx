import { Slider } from 'antd';
import React, { useState } from 'react'

const Price = () => {
    const [priceRange, setPriceRange] = useState([100, 3000]);

    return (
        <>
            <div className="mt-5">
                <h4 className="font-montserrat font-bold text-xl text-black01">
                    Price
                </h4>

                <div className="mt-4 flex item-center gap-4">
                    <div className="flex-1 text-center border border-black100 rounded-lg font-montserrat font-normal text-base py-[25px] text-black01">
                        ${priceRange[0].toLocaleString()}
                    </div>
                    <div className="flex-1 text-center border border-black100 rounded-lg font-montserrat font-normal text-base py-[25px] text-black01">
                        ${priceRange[1].toLocaleString()}
                    </div>
                </div>

                <div className="mt-4 px-2">
                    <Slider
                        range
                        min={100}
                        max={10000}
                        step={50}
                        defaultValue={priceRange}
                        value={priceRange}
                        onChange={(value) => setPriceRange(value)}
                        trackStyle={[{ backgroundColor: "#ff624c" }]}
                        railStyle={{ backgroundColor: "#30303038" }}
                    />
                </div>
            </div>
        </>
    )
}

export default Price