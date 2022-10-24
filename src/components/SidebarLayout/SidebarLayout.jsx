import React, { useState } from 'react';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../login/Login';
import TabsLayout from '../mainTab/TabsLayout';
import Ad from '../ad/Ad';
import Ads from '../ad/Ads';

const SidebarLayout = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className={theme}>
      <div className="themeBtns flexCenter ">
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
        <button onClick={() => setTheme('navyBlue')}>NavyBlue</button>
        <button onClick={() => setTheme('skyBlue')}>SkyBlue</button>
        <button onClick={() => setTheme('sunny')}>Sunny</button>
      </div>
      <div className='sidebar-main'>
        <Topbar />
        <div className="mainContainer">
          <Sidebar />
          <TabsLayout />
          {/* <Ad /> */}
        </div>
        <div className="lowerAd">
          <Ads />
        </div>  
      </div>
    </div>
  )
}

export default SidebarLayout