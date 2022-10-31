import React, { useState, useEffect, useRef } from "react";
import { IoCaretForwardSharp } from "react-icons/io5";
import { ProSidebar, Menu, MenuItem, SidebarContent, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import InfoPanel from "./InfoPanel";
import "./styles.scss";
import DropDown from "./DropDown";
import AddTaglet from "./AddTaglet";
import { connect } from "react-redux";
import { setSideBarPinnedList } from "../../redux/layout/layout.actions";

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }

const Sidebar = ({ sideBarPinnedList, setSideBarPinnedList }) => {
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

  const onPinned = ({ pinned, name }) => {
    let pinnedList = sideBarPinnedList || [];
    if (pinned && !pinnedList.includes(name)) {
      pinnedList = [...pinnedList, name];
    }
    if (!pinned && pinnedList.includes(name)) {
      pinnedList = pinnedList.filter((el) => el !== name);
    }
    setSideBarPinnedList(pinnedList);
  };
  const style = {
    backgroundColor: 'rgba(152, 145, 168, 0.2)',
    borderTopRightRadius: "26px",
    borderBottomRightRadius: "26px",
  }
  const [activeItem,setActiveItem] = useState()
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
                  {[
                    ...menuItems.filter((item) => sideBarPinnedList.includes(item.name)),
                    ...menuItems.filter((item) => !sideBarPinnedList.includes(item.name)),
                  ].map((obj) => (
                    <>
                      <span className="hoverSet">
                        <DropDown
                          pinned={sideBarPinnedList.includes(obj.name)}
                          cb={onPinned}
                          name={obj.name}
                        />
                        <SubMenu className="SubMenuTitle"
                        // onClick={()=> setActiveItem(!style.hasOwnProperty('top')?style:null)} style={activeItem} 
                        title={obj.name}>
                          {obj.subMenu.map((pi) => (
                            <MenuItem className='SubDropMenuItem'>{pi.name}</MenuItem>
                          ))}
                        </SubMenu>
                      </span>
                    </>
                  ))}
                </Menu>
              </SidebarContent>
            </ProSidebar>
          </div>
        </div>
        <InfoPanel />
      </div>
    </div>
  );
};

const mapStateToProps = ({ layout }) => layout;

export default connect(mapStateToProps, { setSideBarPinnedList })(Sidebar);
