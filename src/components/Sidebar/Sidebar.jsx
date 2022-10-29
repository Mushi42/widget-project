import React, { useState, useEffect, useRef } from "react";
import { IoCaretForwardSharp } from "react-icons/io5";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import InfoPanel from "./InfoPanel";
import { Input } from "antd";
import "./styles.scss";
import DropDown from './DropDown'
import AddTaglet from "./AddTaglet";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Sidebar = ({ ShowPin }) => {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
  };
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const changeSmall = useMediaQuery("(max-height: 550px)");

  let delay = 1;
  useEffect(() => {
    setAnimate(true);
    let timer = setTimeout(() => setAnimate(false), delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [active, delay]);

  let menuItems = [
    {
      name: "Chase Bank",
      icon: <IoCaretForwardSharp />,
      type: "solid",
      subMenu: [
        {
          name: "Chase",
        },
        {
          name: "Chase",
        },
      ],
    },
    {
      name: "Utilities",
      icon: <IoCaretForwardSharp />,
      type: "solid",
      subMenu: [
        {
          name: "Chase",
        },
      ],
    },
    {
      name: "Pending Files",
      icon: <IoCaretForwardSharp />,
      type: "solid",
      subMenu: [
        {
          name: "Chase",
        },
      ],
    },
    {
      name: "Digital Vault",
      icon: <IoCaretForwardSharp />,
      type: "solid",
      subMenu: [
        {
          name: "Chase",
        },
      ],
    },
    {
      name: "Workflows",
      icon: <IoCaretForwardSharp />,
      type: "solid",
      subMenu: [
        {
          name: "Chase",
        },
      ],
    },
    {
      name: "Reminders",
      icon: <IoCaretForwardSharp />,
      color: "red",
      rotate: "180",
      subMenu: [
        {
          name: "Chase",
        },
      ],
    },
    {
      name: "Finance",
      icon: <IoCaretForwardSharp />,
      color: "red",
      rotate: "180",
      subMenu: [
        {
          name: "Chase",
        },
      ],
    },
  ];

  const items = [
    getItem("Chase Bank", "sub2", <IoCaretForwardSharp size={15} />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [getItem("Option 7", "7"), getItem("Option 8", "8")]),
    ]),
  ];

  return (
    <div className="">
      <div className={`sidebar ${expanded && "expanded"}`}>
        <div className="sideBarSearchbar">
          <AddTaglet />
        </div>
        <div className={`boxicon-container ${expanded && "expanded-boxicon-container"}`}>
          <div className="PinnedSideBarItems">
          <ProSidebar width={"13rem"} className="p-0 m-0" breakPoint="md">
            <SidebarContent>
              <Menu className="bg-transparent" iconShape="circle">
                {menuItems.map((obj) => (
                  <>
                    <span className="hoverSet">
                      <DropDown />
                      <SubMenu title={obj.name}>
                        {obj.subMenu.map((pi) => <MenuItem className="SubDropMenuItem">{pi.name}</MenuItem>
                        )}
                      </SubMenu>
                    </span>
                  </>
                ))}
              </Menu>
            </SidebarContent>
          </ProSidebar>
          </div>
          <ProSidebar width={"13rem"} className="p-0 m-0" breakPoint="md">
            <SidebarContent>
              <Menu className="bg-transparent" iconShape="circle">
                {menuItems.map((obj) => (
                  <>
                    <span className="hoverSet">
                      <DropDown />
                      <SubMenu title={obj.name}>
                        {obj.subMenu.map((pi) => <MenuItem className="SubDropMenuItem">{pi.name}</MenuItem>
                        )}
                      </SubMenu>
                    </span>
                  </>
                ))}
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
        <InfoPanel />
      </div>
    </div>
  );
};
export default Sidebar;
