import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { BsThreeDots, BsCheck2, BsPinAngleFill } from "react-icons/bs";
import React, { useState } from 'react';

const DropDown = () => {
    
    const StylePin = {
        position: "absolute",
        top: 8,
        right: 35,
        paddingTop: 4,
        zIndex: 0,
    }

    const StylePinHide = {
        display: "none",
    }
    const [showPin, setShowPin] = useState(StylePinHide);
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
                    label: <span
                        style={{ justifyContent: 'flex-start' }}
                        className='flexCenter GG-10'
                        onClick={() => setShowPin(!showPin.hasOwnProperty('top') ? StylePin : StylePinHide)}>{console.log(showPin)}
                        <span>Pin</span> <BsCheck2 style={showPin} />
                    </span>,
                },
                {
                    key: "4",
                    label: "New",
                },
            ]}
        />
    );

    return (
        <>
            <BsPinAngleFill className='PinIcon' style={showPin} />
            <Dropdown className='SidebarDotsIcon' overlay={HoverDotsMenu}>
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        <BsThreeDots />
                    </Space>
                </a>
            </Dropdown>
        </>
    )
}


export default DropDown;