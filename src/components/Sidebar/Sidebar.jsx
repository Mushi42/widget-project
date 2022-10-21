import React, { useState, useEffect } from 'react';
import { IoCaretForwardSharp } from 'react-icons/io5';
import List from '@mui/material/List';
import InfoPanel from './InfoPanel';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './styles.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Sidebar = () => {
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
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
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
    // {
    //   name: "Look Up Taglet",
    //   iconName: "menu",
    // },
    // {
    //   name: "Add Taglet",
    //   iconName: "home",
    //   type: "solid",
    // },
    {
      name: "Chase Bank",
      iconName: "compass",
      type: "solid",
    },
    {
      name: "Utilities",
      iconName: "envelope",
      type: "solid",
    },
    {
      name: "Pending Files",
      iconName: "spreadsheet",
      type: "solid",
    },
    {
      name: "Digital Vault",
      iconName: "star",
      type: "solid",
    },
    {
      name: "Workflows",
      iconName: "cog",
      type: "solid",
    },
    {
      name: "Reminders",
      iconName: "log-out",
      color: "red",
      rotate: "180",
    },
    {
      name: "Finance",
      iconName: "log-out",
      color: "red",
      rotate: "180",
    },
  ];

  const items = [
    getItem('menuItems', 'sub2', <IoCaretForwardSharp size={15} />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
  ];

  return (
    <div className=''>
      <div className={`sidebar ${expanded && "expanded"}`}>
        <div className="sideBarSearchbar">
          <div className="SideBar-top">
            <AiOutlineSearch />
            <input type="text" placeholder='Look Up Taglet' />
          </div>
          <div className="SideBar-top addTaglet">
            <span className='flexCenter GG-10'> <IoMdAdd /> Add Taglet</span>
          </div>
        </div>
        {menuItems.map((item, index) => {
          let middle = false;
          if (!(index === 0 || index === menuItems.length - 1)) {
            middle = true;
          }
          return (
            <div
              className={`boxicon-container ${expanded && "expanded-boxicon-container"
                }`}
              onMouseEnter={() => {
                if (middle) {
                  setHovered(index);
                }
              }}
              onMouseLeave={() => {
                if (middle) {
                  setHovered(null);
                }
              }}
              onClick={() => {
                if (middle) {
                  setActive(index);
                }
                if (index === 0) {
                  // setExpanded(!expanded);
                }
              }}
              key={index}
            >
              {/* <Menu
              className={`${middle && "boxicon"} 
              ${!middle && "first-and-last-trash-fix"}
              ${active === index && "active"}
              `}
                style={{
                  width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
              /> */}


              <div className={`${middle && "boxicon"} 
                      ${!middle && "first-and-last-trash-fix"}
                      ${active === index && "active"}
                      `}>

                {item.name !== "Eduhance" && (

                  <IoCaretForwardSharp size={15} />
                )}
              </div>
              {/* <box-icon
              class={`${middle && "boxicon"} 
                      ${!middle && "first-and-last-trash-fix"}
                      ${active === index && "active"}
                      `}
              size={changeSmall ? "sm" : "md"}
              name={item.iconName}
              type={item.type}
              color={
                hovered === index || active === index ? "white" : item.color
              }
              animation={active === index && animate ? "tada" : ""}
              rotate={item.rotate}
            ></box-icon> */}
              <p
                className={`description 
            ${expanded && "show-description"}
            ${active === index && "active-description"}`}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
      <InfoPanel />
    </div>
  );
};
export default Sidebar;