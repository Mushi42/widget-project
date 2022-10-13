import React from 'react';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';

const SidebarLayout = () => {
  return (
    <div className='sidebar-main'>
      <Topbar/>
      <Sidebar/>
    </div>
  )
}

export default SidebarLayout