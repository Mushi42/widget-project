import React from 'react';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../login/Login';
import TabsLayout from '../mainTab/TabsLayout';
import Ad from '../ad/Ad';

const SidebarLayout = () => {
  return (
    <div className='sidebar-main'>
      <Topbar />
      <div className="mainContainer">
        <Sidebar />
        <TabsLayout /> 
        <Ad /> 
      </div>
    </div>
  )
}

export default SidebarLayout