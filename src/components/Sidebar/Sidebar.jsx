import React, { useState, useEffect, useRef } from "react";
import { IoCaretForwardSharp } from "react-icons/io5";
import List from "@mui/material/List";
import { Dropdown, Space } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import InfoPanel from "./InfoPanel";
import { Input } from "antd";
import "./styles.scss";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { default as SelectMenu } from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DropDown from './DropDown'
const { TextArea } = Input;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  const onChange = (event) => {
    setSelectedTaglet(event.target.value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

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
  const [value, setValue] = useState("");
  const [selectedTaglet, setSelectedTaglet] = useState("Taglet");
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const changeSmall = useMediaQuery("(max-height: 550px)");
  const inputRef = useRef(null);

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
      icon: <IoCaretForwardSharp />,
      type: "solid",
      subMenu: [
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
          <div className="SideBar-top">
            <AiOutlineSearch />
            <input type="text" placeholder="Look Up Taglet" />
          </div>
          <div className="SideBar-top addTaglet">
            <span onClick={handleOpen} className="flexCenter GG-10">
              {" "}
              <IoMdAdd /> Add Taglet
            </span>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="TagletModel">
              <Box sx={style}>
                <div className="TagletModelHead flexCenter">
                  <h2>New Taglet</h2>
                  <AiOutlineClose onClick={handleClose} />
                </div>
                <div className="TagModelBox">
                  <p>Please enter a new taglet name:</p>
                  <Input />
                </div>
                <div className="TagModelBox">
                  <p>Select Taglet type:</p>
                  <FormControl fullWidth size="small">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedTaglet}
                      onChange={onChange}>
                      <SelectMenu value={"Taglet"}>Taglet</SelectMenu>
                      <SelectMenu value={"Shortcut"}>Shortcut</SelectMenu>
                      <SelectMenu value={"Asset"}>Asset</SelectMenu>
                    </Select>
                  </FormControl>
                </div>
                {selectedTaglet === "Asset" && (
                  <div className="TagModelBox">
                    <p>Add Asset</p>
                    <button className="browse-button w-100" onClick={handleClick}>
                      Browse Assets
                    </button>
                    <input style={{ display: "none" }} ref={inputRef} type="file" />
                  </div>
                )}
                <div className="TagModelBox">
                  <p>Description:</p>
                  <TextArea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    autoSize={{
                      minRows: 3,
                      maxRows: 5,
                    }}
                  />
                </div>
                <div className="TagModalBtns">
                  <button className="primaryBtn">Cancel</button>
                  <button className="secondaryBtn">Create</button>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
        {/* {menuItems.map((item, index) => {
          let middle = false;
          if (!(index === 0 || index === menuItems.length - 1)) {
            middle = true;
          } */}
        {/* return ( */}
        <div
          className={`boxicon-container ${expanded && "expanded-boxicon-container"}`}
        // onMouseEnter={() => {
        //   if (middle) {
        //     setHovered(index);
        //   }
        // }}
        // onMouseLeave={() => {
        //   if (middle) {
        //     setHovered(null);
        //   }
        // }}
        // onClick={() => {
        //   if (middle) {
        //     setActive(index);
        //   }
        //   if (index === 0) {
        //     setExpanded(!expanded);
        //   }
        // }}
        // key={index}
        >
          <ProSidebar className="p-0 m-0" breakPoint="md">
            <SidebarContent>
              <Menu className="bg-transparent" iconShape="circle">
                {menuItems.map(({ name }) => (
                  <>
                    <span className="hoverSet">
                      <DropDown />
                      <SubMenu title={name}>
                        <MenuItem className="SubDropMenuItem"> SubMenu Item </MenuItem>
                      </SubMenu>
                    </span>
                  </>
                ))}
              </Menu>
            </SidebarContent>
          </ProSidebar>
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

          {/* <div className={`${middle && "boxicon"} 
                      ${!middle && "first-and-last-trash-fix"}
                      ${active === index && "active"}
                      `}>

                {item.name !== "Eduhance" && (

                  <IoCaretForwardSharp size={15} />
                )}
              </div> */}
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
          {/* <p
                className={`description 
            ${expanded && "show-description"}
            ${active === index && "active-description"}`}>
                {item.name}
              </p> */}

        </div>
        {/* })} */}
        <InfoPanel />
      </div>
    </div>
  );
};
export default Sidebar;
