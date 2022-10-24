import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { IoCaretForwardSharp } from 'react-icons/io5';
import List from '@mui/material/List';
import InfoPanel from './InfoPanel';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';
import './styles.scss'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const { Option } = Select;
const { TextArea } = Input;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
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

const Sidebara = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  const [value, setValue] = useState('');
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

  // const loopitem = () => {
  //   menuItems.map((obj,key) => {
  //     obj.name
  //   })
  // }

  const items = [
    getItem('Chase Bank', 'sub2', <IoCaretForwardSharp size={15} />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ])
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
            <span onClick={handleOpen} className='flexCenter GG-10'> <IoMdAdd /> Add Taglet</span>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="TagletModel"
            >
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
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </div>
                <div className="TagModelBox DisNone">
                  <p>Add Asset:</p>
                  <button className="flexCenter addAssetBtn">Browse Asset</button>
                </div>
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
                  <button className='primaryBtn'>Cancel</button>
                  <button className='secondaryBtn'>Create</button>
                </div>
              </Box>
            </Modal>
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
              <Sidebar>
                <Menu>
                  <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                  </SubMenu>
                  <MenuItem> Documentation </MenuItem>
                  <MenuItem> Calendar </MenuItem>
                </Menu>
              </Sidebar>;
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
            ${active === index && "active-description"}`}
              >
                {item.name}
              </p>
              <BsThreeDots className='SidebarDotsIcon' /> */}
            </div>
          );
        })}
        <InfoPanel />
      </div>
    </div>
  );
};
export default Sidebara;