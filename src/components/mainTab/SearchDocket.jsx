import React, { useState } from 'react'
import { BsFilterRight } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Space, Table, Tag, Dropdown, Menu } from 'antd';
import { AiOutlineFileText, AiOutlineFileDone, AiOutlineFileExcel, AiFillCaretRight,AiOutlineArrowDown } from 'react-icons/ai';

function SearchDocket() {
    const [theme, setTheme] = useState('light');

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
    ];
    const data = [
        {
            key: '1',
            name: 'Chase Bank',
            dataModified: '21 September 2021 at 19:24',
            size: '1.8MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '2',
            name: 'Chase Bank',
            dataModified: '30 October 2021 at 19:24',
            size: '1.6MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <><BsThreeDotsVertical /></>,
        },
        {
            key: '3',
            name: 'Chase Bank',
            dataModified: '21 January 2021 at 19:24',
            size: '1.4MB',
            option: <><BsThreeDotsVertical /></>,
        }
    ];
    const Filter = (
        <Menu
            items={[
                {
                    key: '1',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Taglet Collection</span></div>,
                },
                {
                    key: '2',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Target Shortcut</span></div>,

                },
                {
                    key: '3',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Audios</span></div>,
                },
                {
                    key: '4',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Videos</span></div>,
                },
                {
                    key: '5',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Images</span></div>,
                },
                {
                    key: '6',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Repositories</span></div>,
                },
                {
                    key: '7',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Extension</span></div>,
                },
                {
                    key: '8',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Bookmarks</span></div>,
                },
                {
                    key: '9',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Vault Entry</span></div>,
                },
                {
                    key: '10',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Tags</span></div>,
                },
                {
                    key: '11',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>WorkFlows</span></div>,
                },
                {
                    key: '12',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Reminders</span></div>,
                },
                {
                    key: '13',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>User Defined</span></div>,
                },
                {
                    key: '14',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><FiFilter /><span>Vault Entry</span></div>,
                },
            ]}
        />
    );
    const SortBy = (
        <Menu
            items={[
                {
                    key: '1',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><AiOutlineArrowDown /><span>Name</span></div>,
                },
                {
                    key: '2',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><AiOutlineArrowDown /><span>Size</span></div>,

                },
                {
                    key: '3',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><AiOutlineArrowDown /><span>Priority</span></div>,
                },
                {
                    key: '4',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><AiOutlineArrowDown /><span>Date Created</span></div>,
                },
                {
                    key: '5',
                    label: <div className='flexCenter' style={{gridGap: 15,justifyContent: 'flex-start'}}><AiOutlineArrowDown /><span>Last Updated</span></div>,
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
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

export default SearchDocket