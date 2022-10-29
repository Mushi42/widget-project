import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../login/Login";
import TabsLayout from "../mainTab/TabsLayout";
import Ad from "../ad/Ad";
import Ads from "../ad/Ads";
import { connect } from "react-redux";

const SidebarLayout = ({ theme }) => {
  const [layout, setLayout] = useState("DisNone")
  const handleClick = change => {
    setLayout(layout === change ? "DisNone" : change)
    console.log(change)
  }
  return (
    <div className={theme}>
      <div className="sidebar-main">
        <Topbar />
        <div className="mainContainer">
          <Sidebar />
          <TabsLayout />
          <div className={layout === "DisBlock" ? "DisNone" : null}>
            <Ad handleClick={handleClick} />
          </div>
        </div>
        <div className={layout}>
          <Ads handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ layout }) => ({ ...layout });

export default connect(mapStateToProps)(SidebarLayout);
