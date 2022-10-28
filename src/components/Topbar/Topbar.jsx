import React, { useState, useEffect, useRef } from "react";
import { Dropdown, Menu, Space } from "antd";
import Search from "../Shared/Search/Search";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiSettings, FiMessageSquare, FiBell } from "react-icons/fi";
import { connect } from "react-redux";
import { setTheme } from "../../redux/layout/layout.actions";
import ProfileBar from "./ProfileBar";
import GridItems from "./GridItems";

const Topbar = ({ setTheme }) => {

    const menu = (
        <Menu
            items={[
                {
                    key: "1",
                    label: "Repository",
                },
                {
                    key: "2",
                    label: "Indexer",
                    trigger: "click",
                    children: [
                        {
                            key: "2-1",
                            label: "Code Indexer",
                        },
                        {
                            key: "2-2",
                            label: "Joe Indexer",
                        },
                        {
                            key: "2-3",
                            label: "New",
                        },
                    ],
                },
                {
                    key: "3",
                    label: "Theme",
                    children: [
                        {
                            key: "3-1",
                            label: <div onClick={() => onOpenSettingMenue("light")}>Light</div>,
                        },
                        {
                            key: "3-2",
                            label: <div onClick={() => onOpenSettingMenue("dark")}>Dark</div>,
                        },
                        {
                            key: "3-3",
                            label: <div onClick={() => onOpenSettingMenue("navyBlue")}>Navy Blue</div>
                        },
                        {
                            key: "3-4",
                            label: <div onClick={() => onOpenSettingMenue("skyBlue")}>Sky Blue</div>
                        },
                        {
                            key: "3-5",
                            label: <div onClick={() => onOpenSettingMenue("sunny")}>Sunny</div>
                        },
                    ],
                },
                {
                    key: "4",
                    label: "Language",
                    children: [
                        {
                            key: "4-1",
                            label: "English",
                        },
                        {
                            key: "4-2",
                            label: "French",
                        },
                    ],
                },
            ]}
        />
    );
    const menuInfo = (
        <Menu
            items={[
                {
                    key: "1",
                    label: "Tags",
                },
                {
                    key: "2",
                    label: "Search",
                },
                {
                    key: "3",
                    label: "WorkFlow",
                },
                {
                    key: "4",
                    label: "Reminder",
                },
                {
                    key: "5",
                    label: "Browse All Articles",
                },
                {
                    key: "6",
                    label: "Training",
                },
                {
                    key: "7",
                    label: "Updates",
                },
                {
                    key: "8",
                    label: "Send FeedBack to us",
                },
                {
                    type: "divider",
                },
                {
                    key: "9",
                    label: "About",
                },
            ]}
        />
    );

    let ref = useRef();

    const onOpenSettingMenue = (theme) => {
        setTheme(theme);
    };

    return (
        <div className="wrapper">
            <div>
                <div className="navbar">
                    <div className="logo">EPaX</div>
                    <Search />
                    <div className="links">
                        <ul ref={ref}>
                            
                            <li>
                                <Dropdown overlay={menuInfo} trigger={["click"]}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <AiOutlineQuestionCircle />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </li>
                            <li>
                                <FiBell />
                            </li>
                            <li>
                                <FiMessageSquare />
                            </li>
                            <li className="GridsLi">
                                <GridItems />
                            </li>
                            <li>
                                <Dropdown overlay={menu} trigger={["click"]}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <FiSettings />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </li>
                            <li className="ProfileLi">
                                <ProfileBar />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ layout }) => ({ ...layout });

export default connect(mapStateToProps, { setTheme })(Topbar);