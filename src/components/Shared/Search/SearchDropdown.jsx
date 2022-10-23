import React, { useState } from 'react'
import { Select } from 'antd';
const { Option } = Select;
const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};


function SearchDropdown(props) {
    const InputLabels = [
        {
            key: 1,
            label: 'Account Name'
        },
        {
            key: 2,
            label: 'Enter Email'
        },
        {
            key: 3,
            label: 'User Name'
        },
        {
            key: 4,
            label: 'Password'
        },
        {
            key: 5,
            label: 'Password Again'
        },
    ]
    const searchItems = [
        {
            
        }
    ]
    return (
        <>
            {InputLabels.map((obj,index) => {
                <div className="SearchDropItem">
                    <span>{obj.label}</span>
                    <Select
                        showSearch
                        placeholder="Any"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </div>
            })}
        </>
    )
}

export default SearchDropdown