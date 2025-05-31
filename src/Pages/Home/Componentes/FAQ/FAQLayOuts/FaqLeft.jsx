import { Collapse } from 'antd'
import React from 'react'
import { FaqData } from '../FaqData'

const FaqLeft = () => {
    return (
        <div>
            {FaqData.map((item) => (
                <Collapse
                    key={item.key}
                    size="small"
                    rootClassName="custom-collapse"
                    items={[item]}
                />
            ))}
        </div>
    )
}

export default FaqLeft