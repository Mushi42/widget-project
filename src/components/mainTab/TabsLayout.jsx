import React from 'react'
import { Tabs } from 'antd';
import SearchDocket from './SearchDocket';

function TabsLayout() {
    return (
        <div className='TabsLayout'>
            <Tabs
                // style={{width: "100%"}}
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
                        disabled: true,
                    },
                ]}
            />
        </div>
    )
}

export default TabsLayout;