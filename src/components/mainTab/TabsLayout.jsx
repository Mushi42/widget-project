import React from 'react'
import { Tabs } from 'antd';
import SearchDocket from './SearchDocket';
import { BiArrowBack } from 'react-icons/bi';

function TabsLayout() {
    return (
        <div className='TabsLayout'>
            <Tabs
                defaultActiveKey="1"
                items={[
                    {
                        label: `SEARCH DOCKET`,
                        key: '1',
                        children: <SearchDocket />,
                    },
                    {
                        label: `MESSAGES`,
                        key: '2',
                        children: `Content of Tab Pane 2`,
                    },
                ]}
            />
            <div className="Edits DisNone">
                <div className="editsHeader">
                    <BiArrowBack id='backIcon' />
                    <h2>Edits</h2>
                </div>
                <div className="EditsInputs">
                    <div className="InputLabel">
                        <span>TItle</span>
                        <input type="text" placeholder='Title' />
                    </div>
                    <div className="InputLabel">
                        <span>Description</span>
                        <input type="text" />
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default TabsLayout;