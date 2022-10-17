import React, { useState } from 'react';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../login/Login';
import TabsLayout from '../mainTab/TabsLayout';
import Ad from '../ad/Ad';

const SidebarLayout = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch Theme</button>
      <div className='sidebar-main'>
        <Topbar />
        <div className="mainContainer">
          <Sidebar />
          <TabsLayout />
          <Ad />
        </div>
      </div>
    </div>
  )
}

export default SidebarLayout