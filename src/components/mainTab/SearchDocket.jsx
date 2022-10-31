import React, { useState } from 'react'
import { BsFilterRight } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Space, Table, Tag, Dropdown, Menu } from 'antd';
import Logo1 from '../../assets/images/Logo-1.svg'
import Logo2 from '../../assets/images/Logo-2.svg'
import Logo3 from '../../assets/images/Logo-3.svg'
import Logo4 from '../../assets/images/Logo-4.svg'
import Logo5 from '../../assets/images/Logo-5.svg'
import Logo6 from '../../assets/images/Logo-6.svg'
import Logo7 from '../../assets/images/Logo-7.svg'
import Logo8 from '../../assets/images/Logo-8.svg'
import Logo9 from '../../assets/images/Logo-9.svg'
import Logo10 from '../../assets/images/Logo-10.svg'
import Logo11 from '../../assets/images/Logo-11.svg'
import Logo12 from '../../assets/images/Logo-12.svg'
import Logo13 from '../../assets/images/Logo-13.svg'
import { AiOutlineFileText, AiOutlineFileDone, AiOutlineFileExcel, AiFillCaretRight, AiOutlineArrowDown } from 'react-icons/ai';

function SearchDocket() {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <span style={{ display: 'flex', alignItems: 'center', gridGap: 10 }}>
                <AiFillCaretRight style={{ fontSize: 14 }} />{text}
            </span>,
        },
        {
            title: 'Data Modified',
            dataIndex: 'dataModified',
            key: 'dataModified',
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: '',
            dataIndex: 'option',
            key: 'option',
        },
        {
            title: '',
            dataIndex: 'description',
            key: 'description',
        },
    ];
    const TableEdit = (
        <Menu
            items={[
                {
                    key: 1,
                    label: 'Add Note'
                },
                {
                    key: 2,
                    label: 'Edit'
                },
                {
                    key: 3,
                    label: 'Delete'
                },
                {
                    type: 'divider',
                },
                {
                    key: 4,
                    label: 'Preview'
                },
                {
                    key: 5,
                    label: 'Secure'
                },
                {
                    key: 6,
                    label: 'Encrypt'
                },
                {
                    key: 7,
                    label: 'Connect'
                },
                {
                    type: 'divider',
                },
                {
                    key: 8,
                    label: 'Add Workflow'
                },
                {
                    key: 9,
                    label: 'Add Reminder'
                },
            ]}
        />
    );
    const data = [
        {
            key: '1',
            name: 'Chase Bank',
            dataModified: '21 September 2021 at 19:24',
            size: '1.8MB',
            option:
                <Dropdown overlay={TableEdit} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <BsThreeDotsVertical />
                        </Space>
                    </a>
                </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '2',
            name: 'Chase Bank',
            dataModified: '30 October 2021 at 19:24',
            size: '1.6MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '4',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '5',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '6',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '7',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '8',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '9',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '10',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '11',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        },
        {
            key: '12',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <Dropdown overlay={TableEdit} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BsThreeDotsVertical />
                    </Space>
                </a>
            </Dropdown>,
            description: <div className="DescpBox">
                <p>Approve Prcurser Order for Copy Machine for Building A</p>
            </div>,
        }
    ];
    const Filter = (
        <Menu
            items={[
                {
                    key: '1',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}> <img src={Logo1} alt="img" /> <span>Taglet Collection</span></div>,
                },
                {
                    key: '2',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo2} alt="img" /><span>Target Shortcut</span></div>,
                },
                {
                    key: '3',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo3} alt="img" /><span>Audios</span></div>,
                },
                {
                    key: '4',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo4} alt="img" /><span>Videos</span></div>,
                },
                {
                    key: '5',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo5} alt="img" /><span>Images</span></div>,
                },
                {
                    key: '6',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo6} alt="img" /><span>Repositories</span></div>,
                },
                {
                    key: '7',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo7} alt="img" /><span>Extension</span></div>,
                },
                {
                    key: '8',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo8} alt="img" /><span>Bookmarks</span></div>,
                },
                {
                    key: '9',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo9} alt="img" /><span>Vault Entry</span></div>,
                },
                {
                    key: '10',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo10} alt="img" /><span>Tags</span></div>,
                },
                {
                    key: '11',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo11} alt="img" /><span>WorkFlows</span></div>,
                },
                {
                    key: '12',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo12} alt="img" /><span>Reminders</span></div>,
                },
                {
                    key: '13',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><img src={Logo13} alt="img" /><span>User Defined</span></div>,
                },
            ]}
        />
    );
    const SortBy = (
        <Menu
            items={[
                {
                    key: '1',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><AiOutlineArrowDown /><span>Name</span></div>,
                },
                {
                    key: '2',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><AiOutlineArrowDown /><span>Size</span></div>,

                },
                {
                    key: '3',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><AiOutlineArrowDown /><span>Priority</span></div>,
                },
                {
                    key: '4',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><AiOutlineArrowDown /><span>Date Created</span></div>,
                },
                {
                    key: '5',
                    label: <div className='flexCenter' style={{ gridGap: 15, justifyContent: 'flex-start' }}><AiOutlineArrowDown /><span>Last Updated</span></div>,
                },
            ]}
        />
    );
    return (
        <div className='SearchDocket'>
            <div className="SD-FilterPanel">
                <div className="filterPanel">
                    <AiOutlineFileText />
                    <AiOutlineFileDone />
                    <AiOutlineFileExcel />
                </div>
                <div className="filterPanel">
                    <Dropdown overlay={SortBy} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <BsFilterRight />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown overlay={Filter} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <FiFilter />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className="SD-Table">
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    )
}

export default SearchDocket