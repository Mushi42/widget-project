import React, { useState, useEffect } from 'react';
import { IoCaretForwardSharp } from 'react-icons/io5';
import './styles.scss'

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
  let menuItems = [
    {
      name: "Look Up Taglet",
      iconName: "menu",
    },
    {
      name: "Add Taglet",
      iconName: "home",
      type: "solid",
    },
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

  return (
    <div className=''>
      <div className={`sidebar ${expanded && "expanded"}`}>
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
    </div>
  );
};
export default Sidebar;