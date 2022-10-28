import React, { useState, useEffect, useRef } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Dropdown, Menu, Space } from "antd";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
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
function GridItems() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [showGrid, setShowGrid] = useState("DotsGrid DisNone");
    
    const GridItems = [
        {
            key: 1,
            label: "WorkFlows",
        },
        {
            key: 2,
            label: "News",
        },
        {
            key: 3,
            label: "Newsletter",
        },
        {
            key: 4,
            label: "Reminder",
        },
        {
            key: 5,
            label: "Search",
        },
        {
            key: 6,
            label: "Version",
        },
        {
            key: 7,
            label: "Message",
        },
        {
            key: 8,
            label: "Email",
        },
    ];
    const GridBoxItems = (
        <Menu
            items={[
                {
                    key: "1",
                    label: "Config",
                },
                {
                    key: "2",
                    label: "Disable",
                },
            ]}
        />
    );
    const AddModule = (
        <Menu
            onClick={handleOpen}
            items={[
                {
                    key: "1",
                    icon: <AiOutlineCheck />,
                    label: "WorkFlows",
                },
                {
                    key: "2",
                    icon: <AiOutlineCheck />,
                    label: "News",
                },
                {
                    key: "3",
                    icon: <AiOutlineCheck />,
                    label: "Newsletter",
                },
                {
                    key: "4",
                    icon: <AiOutlineCheck />,
                    label: "Reminder",
                },
                {
                    key: "5",
                    icon: "",
                    label: "Search",
                },
                {
                    key: "6",
                    icon: "",
                    label: "Version",
                },
                {
                    key: "7",
                    icon: "",
                    label: "Message",
                },
                {
                    key: "8",
                    icon: <AiOutlineCheck />,
                    label: "Email",
                },
            ]}
        />
    );
    return (
        <>
            <TbGridDots
                onClick={() =>
                    setShowGrid(showGrid === "DotsGrid DisNone" ? "DotsGrid DisBlock" : "DotsGrid DisNone")
                }
            />
            <div className={showGrid}>
                <div className="GridBoxes">
                    {GridItems.map((obj, index) => (
                        <Dropdown overlay={GridBoxItems} trigger={["click"]}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <div className="GridBox flexCenter">
                                        <span>{obj.label}</span>
                                    </div>
                                </Space>
                            </a>
                        </Dropdown>
                    ))}
                </div>
                <div className="AddModuleBtn">
                    <Dropdown placement="bottomLeft" overlay={AddModule} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <span>Add Module</span>
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <Box sx={style} className="TagletModel">
                        <div className="TagletModelHead flexCenter">
                            <h2>Uninstalling Module</h2>
                            <AiOutlineClose onClick={handleClose} />
                        </div>
                        <p>Remove Reminder Module?</p>
                        <div className="TagModalBtns">
                            <button onClick={handleClose} className="primaryBtn">Cancel</button>
                            <button onClick={handleClose} className="secondaryBtn">Create</button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default GridItems