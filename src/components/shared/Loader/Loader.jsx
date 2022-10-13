import React from 'react';
import { Spin } from 'antd';

const Loader = ({ loading, size = "large", children }) => {
    return (
        <Spin spinning={loading} delay={100} size={size}>
            {children}
        </Spin>
    );
};

export const AbsoluteLoader = () => {
    return (
        <Spin
            style={{
                position: 'absolute',

                top: '50%',
                right: '50%',
            }}
        />
    );
}

export default Loader;
