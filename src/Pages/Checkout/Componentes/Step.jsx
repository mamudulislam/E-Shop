import React, { useState, useEffect } from 'react';
import { Steps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const Step = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const stepPaths = ['/information', '/Payment'];

    const currentStep = stepPaths.indexOf(location.pathname);
    const [current, setCurrent] = useState(currentStep >= 0 ? currentStep : 0);

    useEffect(() => {
        setCurrent(currentStep >= 0 ? currentStep : 0);
    }, [location.pathname]);

    const onChange = (value) => {
        if (value === current + 1) {
            setCurrent(value);
            navigate(stepPaths[value]);
        }
    };

    return (
        <div className="px-4 sm:px-20 md:px-40 lg:px-64 xl:px-[430px]">
            <Steps
                current={current}
                onChange={onChange}
                className="custom-steps"
                items={[
                    { title: <span className="custom-title">Information</span> },
                    { title: <span className="custom-title">Payment</span> },
                ]}
            />
        </div>
    );
};

export default Step;
