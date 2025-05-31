import { Collapse } from 'antd'
import React from 'react'

const FaqLeft = () => {
    return (
        <div>
            <Collapse
                items={[{
                    key: '1',
                    className: "Custom-collapse",
                    label: 'This is default size panel header',
                    children:
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptas sit ullam necessitatibus iusto asperiores totam ipsum eligendi soluta,
                            nobis neque, repellendus quaerat?
                        </p>
                }]}
            />
        </div>
    )
}

export default FaqLeft