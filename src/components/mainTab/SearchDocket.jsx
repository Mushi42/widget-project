import React, { useState } from 'react'
import { BsFilterRight } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Space, Table, Tag } from 'antd';
import { AiOutlineFileText, AiOutlineFileDone, AiOutlineFileExcel, AiFillCaretRight } from 'react-icons/ai';

function SearchDocket() {
    const [theme, setTheme] = useState('light');

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <span style={{display: 'flex', alignItems: 'center', gridGap: 10 }}>
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
    return (
            <div className='SearchDocket'>
                <div className="SD-FilterPanel">
                    <div className="filterPanel">
                        <AiOutlineFileText />
                        <AiOutlineFileDone />
                        <AiOutlineFileExcel />
                    </div>
                    <div className="filterPanel">
                        <BsFilterRight />
                        <FiFilter />
                    </div>
                </div>
                <div className="SD-Table">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
    )
}

export default SearchDocket