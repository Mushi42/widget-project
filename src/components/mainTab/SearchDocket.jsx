import React from 'react'
import { BsFilterRight } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Space, Table, Tag } from 'antd';
import { AiOutlineFileText, AiOutlineFileDone, AiOutlineFileExcel,AiFillCaretRight } from 'react-icons/ai';

function SearchDocket() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a style={{color: 'black',display:'flex',alignItems: 'center',gridGap: 10}}>
                <AiFillCaretRight style={{fontSize: 14}} />{text}
                </a>,
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
            option: <><BsThreeDotsVertical/></>,
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
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