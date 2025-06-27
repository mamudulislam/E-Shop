import { Button } from 'antd'
import React from 'react'

const Commonbuttun = ({ children, onclick, className, loading = false, disabled = false }) => {
    return (
        <div>
            <Button
                onclick={onclick}
                className={className}
                loading={loading}
                disabled={disabled || loading}
            >
                {children}
            </Button>
        </div>
    )
}

export default Commonbuttun