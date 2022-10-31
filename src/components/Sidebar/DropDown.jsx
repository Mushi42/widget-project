import React, { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { BsThreeDots, BsCheck2, BsPinAngleFill } from "react-icons/bs";

const StylePin = {
  position: "absolute",
  top: 8,
  right: 35,
  paddingTop: 4,
  zIndex: 0,
};

const StylePinHide = {
  display: "none",
};

const DropDown = ({ pinned = false, name, cb }) => {
  const [showPin, setShowPin] = useState({});


  useEffect(() => {
    setShowPin(pinned ? StylePin : StylePinHide);
  }, [pinned]);

  const showPinFun = () => {
    if (!showPin.hasOwnProperty("top")) {
      cb({ name: name, pinned: true });
    } else {
      cb({ name: name, pinned: false });
    }
  };

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
          label: (
            <span
              style={{ justifyContent: "flex-start" }}
              className="flexCenter GG-10"
              onClick={() => showPinFun()}>
              <span>Pin</span> <BsCheck2 style={showPin} />
            </span>
          ),
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
      <BsPinAngleFill className="PinIcon" style={showPin} />
      <Dropdown className="SidebarDotsIcon" overlay={HoverDotsMenu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <BsThreeDots />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default DropDown;
