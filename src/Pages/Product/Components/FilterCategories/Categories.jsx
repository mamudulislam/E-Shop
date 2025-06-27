import { Checkbox } from 'antd'
import React from 'react'

const Categories = () => {
    return (
        <>
            <div className="w-full mb-5">
                <h4 className="font-Montserrat font-bold text-xl text-black01">
                    Categories
                </h4>
                <div className="mt-5">
                    <ul>
                        <li className="my-2">
                            <Checkbox className="!font-montserrat !font-normal !text-base !text-black01">
                                Computers & Tablets
                            </Checkbox>
                        </li>
                        <li className="my-2">
                            <Checkbox className="!font-montserrat !font-normal !text-base !text-black01">
                                Mobile & Accessories
                            </Checkbox>
                        </li>
                        <li className="my-2">
                            <Checkbox className="!font-montserrat !font-normal !text-base !text-black01">
                                TV & Home Theater
                            </Checkbox>
                        </li>
                        <li className="my-2">
                            <Checkbox className="!font-montserrat !font-normal !text-base !text-black01">
                                Audio & Headphones
                            </Checkbox>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Categories