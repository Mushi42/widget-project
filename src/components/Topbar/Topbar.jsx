import React, { useState, useEffect, useRef } from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import Search from '../Shared/Search/Search'
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { BiUser, BiImageAdd, BiUserPlus } from 'react-icons/bi';
import { FiSettings, FiMessageSquare, FiBell } from 'react-icons/fi';

const Topbar = () => {
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: 'Repository',
                },
                {
                    key: '2',
                    label: 'Indexer',
                    trigger: 'click',
                    children: [
                        {
                            key: '2-1',
                            label: 'Code Indexer',
                        },
                        {
                            key: '2-2',
                            label: 'Joe Indexer',
                        },
                        {
                            key: '2-3',
                            label: 'New',
                        },
                    ],
                },
                {
                    key: '3',
                    label: 'Theme',
                    children: [
                        {
                            key: '3-1',
                            label: 'Sky Blue',
                        },
                        {
                            key: '3-2',
                            label: 'Navy Blue',
                        },
                        {
                            key: '3-3',
                            label: 'Dark',
                        },
                        {
                            key: '3-4',
                            label: 'Sunny',
                        },
                    ],
                },
                {
                    key: '4',
                    label: 'Language',
                    children: [
                        {
                            key: '4-1',
                            label: 'English',
                        },
                        {
                            key: '4-2',
                            label: 'French',
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
                    key: '1',
                    label: 'Tags',
                },
                {
                    key: '2',
                    label: 'Search',

                },
                {
                    key: '3',
                    label: 'WorkFlow',
                },
                {
                    key: '4',
                    label: 'Reminder',
                },
                {
                    key: '5',
                    label: 'Browse All Articles',
                },
                {
                    key: '6',
                    label: 'Training',
                },
                {
                    key: '7',
                    label: 'Updates',
                },
                {
                    key: '8',
                    label: 'Send FeedBack to us',
                },
                {
                    type: 'divider',
                },
                {
                    key: '9',
                    label: 'About',
                },
            ]}
        />
    );
    const GridBoxItems = (
        <Menu
            items={[
                {
                    key: '1',
                    label: 'Config',
                },
                {
                    key: '2',
                    label: 'Disable',
                },
            ]}
        />
    );
    const GridItems = [
        {
            key: 1,
            label: 'WorkFlows'
        },
        {
            key: 2,
            label: 'News'
        },
        {
            key: 3,
            label: 'Newsletter'
        },
        {
            key: 4,
            label: 'Reminder'
        },
        {
            key: 5,
            label: 'Search'
        },
        {
            key: 6,
            label: 'Version'
        },
        {
            key: 7,
            label: 'Message'
        },
        {
            key: 8,
            label: 'Email'
        },
    ]

    const [showGrid, setShowGrid] = useState('DotsGrid DisNone');
    const [showProfile, setShowProfile] = useState('ProfileBar DisNone');

    let ref = useRef();

    useEffect(()=> {
        document.addEventListener("mousedown", (event) =>{
            if(!ref.current.contains(event.targer)) {
                setShowProfile("ProfileBar DisNone")
                setShowGrid("DotsGrid DisNone")
            }
        })
    })

    return (
        <div className="wrapper">
            <div className="container">
                <div className="navbar">
                    <div className="logo">Logo</div>
                    <Search />
                    <div className="links">
                        <ul ref={ref}>
                            <li className="dropdown">
                                Info
                                <div className="menu">
                                    <div className="menu-container">
                                        <div className="header">
                                            <h3>
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                                My cart</h3>
                                            <p className="sub-title">Lorem adad sd asdadd Lorem adad sd asdadd </p>
                                        </div>
                                        <div className="menu-content">
                                            <div className="menu-links">
                                                <ul>
                                                    <li>Support</li>
                                                    <li>Guides</li>
                                                    <li>Custom stories</li>
                                                </ul>
                                                <ul>
                                                    <li>Blog</li>
                                                    <li>Contact</li>
                                                    <li>Conference</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="menu-footer">
                                            <div className="header">
                                                <h3>
                                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>Documentations</h3>
                                                <p className="sub-title">Lorem adad sd asdadd Lorem adad.</p>
                                            </div>
                                            <div className="menu-links">
                                                <ul>
                                                    <li>Support</li>
                                                    <li>Guides</li>
                                                </ul>
                                                <ul>
                                                    <li>Blog</li>
                                                    <li>Contact</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown">
                                Cart
                                <div className="menu">
                                    <div className="menu-container">
                                        <div className="header">
                                            <h3>
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                                Shopping cart</h3>
                                            <p className="sub-title">Lorem adad sd asdadd Lorem adad sd asdadd </p>
                                        </div>
                                        <div className="menu-content">
                                            <div className="menu-cart">
                                                <div className="product">
                                                    <div className="image"></div>
                                                    <div className="product-description">
                                                        <div className="prod">Product Lorem adad sd asdadd </div>
                                                        <div className="counter">
                                                            <div className="price">400$</div>
                                                            <div className="buttons">
                                                                <button>-</button>
                                                                <div className="count">4</div>
                                                                <button>+</button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="product">
                                                    <div className="image"></div>
                                                    <div className="product-description">
                                                        <div className="prod">Product asd sda</div>
                                                        <div className="counter">
                                                            <div className="price">400$</div>
                                                            <div className="buttons">
                                                                <button>-</button>
                                                                <div className="count">4</div>
                                                                <button>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Dropdown overlay={menuInfo} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <AiOutlineQuestionCircle />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </li>
                            <li className='GridsLi'>
                                <TbGridDots onClick={() => setShowGrid(showGrid === 'DotsGrid DisNone' ? 'DotsGrid DisBlock' : 'DotsGrid DisNone')} />
                                <div className={showGrid}>
                                    <div className="GridBoxes">
                                        {GridItems.map((obj, index) =>
                                            <Dropdown overlay={GridBoxItems} trigger={['click']}>
                                                <a onClick={(e) => e.preventDefault()}>
                                                    <Space>
                                                        <div className="GridBox flexCenter">
                                                            <span>{obj.label}</span>
                                                        </div>
                                                    </Space>
                                                </a>
                                            </Dropdown>
                                        )}
                                    </div>
                                    <div className="AddModuleBtn">
                                        <button>Add Module</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <FiBell />
                            </li>
                            <li>
                                <FiMessageSquare />
                            </li>
                            <li>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <FiSettings />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </li>
                            <li className='ProfileLi'>
                                <FaRegUserCircle onClick={() => setShowProfile(showProfile === 'ProfileBar DisNone' ? 'ProfileBar DisBlock' : 'ProfileBar DisNone')} />
                                <div className={showProfile}>
                                    <div className="UserProfileDrop">
                                        <div className="userImg flexCenter">
                                            <BiUser className='UserIcon' />
                                            <BiImageAdd className='AddUserIcon' />
                                        </div>
                                        <h2>Joe Doe</h2>
                                        <button>Manage Your Epax Users</button>
                                    </div>
                                    <div className="profileUsers">
                                        <BiUser className='AccountUserIcon' />
                                        <p>Joe Doe</p>
                                    </div>
                                    <div className="profileUsers">
                                        <BiUser className='AccountUserIcon' />
                                        <p>Jane Doe</p>
                                    </div>
                                    <div className="profileUsers">
                                        <BiUser className='AccountUserIcon' />
                                        <p>Smith Doe</p>
                                    </div>
                                    <div className="profileUsers">
                                        <BiUserPlus />
                                        <p>Add Another Account</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Topbar