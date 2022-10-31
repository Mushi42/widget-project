import React, { useState, useEffect } from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../login/Login";
import TabsLayout from "../mainTab/TabsLayout";
import Ad from "../ad/Ad";
import Ads from "../ad/Ads";
import { connect } from "react-redux";

const SidebarLayout = ({ theme }) => {
  const [layout, setLayout] = useState("DisNone");

  useEffect(() => {
    let root = document.documentElement;
    switch (theme) {
      case "light":
        root.style.setProperty("--primary", "white");
        root.style.setProperty("--primary-text", "black");
        break;
      case "dark":
        root.style.setProperty("--primary", "#232427");
        root.style.setProperty("--primary-text", "white");
        break;
      case "navyBlue":
        root.style.setProperty("--primary", "#151965");
        root.style.setProperty("--primary-text", "white");
        break;
      case "skyBlue":
        root.style.setProperty("--primary", "#79dae8");
        root.style.setProperty("--primary-text", "black");
        break;
      case "sunny":
        root.style.setProperty("--primary", "#fd841f");
        root.style.setProperty("--primary-text", "white");
        break;
    }
  }, [theme]);

  const handleClick = (change) => {
    setLayout(layout === change ? "DisNone" : change);
    console.log(change);
  };
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
