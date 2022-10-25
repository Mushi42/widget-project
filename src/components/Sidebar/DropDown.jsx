import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { BsThreeDots } from "react-icons/bs";
import React from 'react';

const HoverDotsMenu = (
    <Menu
        items={[
            {
                key: "1",
                label: "Rename",
            },
            {
                key: "2",
                label: "Delete",
            },
            {
                key: "3",
                label: "Pin",
            },
            {
                key: "4",
                label: "Delete",
            },
        ]}
    />
);

const App = () => (
    <Dropdown className='SidebarDotsIcon' overlay={HoverDotsMenu} >
        <a onClick={e => e.preventDefault()}>
            <Space>
                <BsThreeDots />
            </Space>
        </a>
    </Dropdown>
);

export default App;