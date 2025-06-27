import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
const Drawercomponentes = ({ children, setOpen, open, placement, closable, rootClassName = "", title }) => {
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Drawer
                title={title}
                placement={placement}
                closable={closable}
                onClose={onClose}
                open={open}
                key={placement}
                rootClassName={rootClassName}
            >
                {children}
            </Drawer >
        </>
    );
};
export default Drawercomponentes;