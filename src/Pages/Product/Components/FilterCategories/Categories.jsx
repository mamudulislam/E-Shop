import { Checkbox } from 'antd'
import React from 'react'

const Categories = () => {
    return (
        <>
            <div className="w-full mb-5">
                <h4 className="font-Montserrat font-bold text-lg sm:text-xl text-black01">
                    Categories
                </h4>
                <div className="mt-4 sm:mt-5">
                    <ul>
                        {[
                            "Computers & Tablets",
                            "Mobile & Accessories",
                            "TV & Home Theater",
                            "Audio & Headphones"
                        ].map((label, index) => (
                            <li className="my-2" key={index}>
                                <Checkbox className="!font-montserrat !font-normal !text-sm sm:!text-base !text-black01">
                                    {label}
                                </Checkbox>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Categories
