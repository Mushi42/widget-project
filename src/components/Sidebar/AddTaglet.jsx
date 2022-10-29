import React, { useState, useRef } from 'react'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { default as SelectMenu } from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { Input } from "antd";
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
function AddTaglet() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = useState("");
    const [selectedTaglet, setSelectedTaglet] = useState("Taglet");
    const inputRef = useRef(null);
    const onChange = (event) => {
        setSelectedTaglet(event.target.value);
    };
    const handleClick = () => {
        // 👇️ open file input box on click of other element
        inputRef.current.click();
    };
    return (
        <>
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
                            <button onClick={handleClose} className="primaryBtn">Cancel</button>
                            <button className="secondaryBtn">Create</button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default AddTaglet