import React, { useState, useRef } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { BiUser, BiImageAdd, BiUserPlus } from "react-icons/bi";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
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
function ProfileBar() {
    const [showProfile, setShowProfile] = useState("ProfileBar DisNone");
    const [Profile, setProfile] = React.useState(false);
    const handleProfileOpen = () => setProfile(true);
    const handleProfileClose = () => setProfile(false);
    const inputRef = useRef(null);
    const handleClick = () => {
        // 👇️ open file input box on click of other element
        inputRef.current.click();
    };
    return (
        <>
            <FaRegUserCircle
                onClick={() =>
                    setShowProfile(
                        showProfile === "ProfileBar DisNone" ? "ProfileBar DisBlock" : "ProfileBar DisNone"
                    )
                }
            />
            <div className={showProfile}>
                <div className="UserProfileDrop">
                    <div onClick={handleProfileOpen} className="userImg flexCenter">
                        <BiUser className="UserIcon" />
                        <BiImageAdd className="AddUserIcon" />
                    </div>
                    <h2>Joe Doe</h2>
                    <button>Manage Your Epax Users</button>
                </div>
                <div className="profileUsers">
                    <BiUser className="AccountUserIcon" />
                    <p>Joe Doe</p>
                </div>
                <div className="profileUsers">
                    <BiUser className="AccountUserIcon" />
                    <p>Jane Doe</p>
                </div>
                <div className="profileUsers">
                    <BiUser className="AccountUserIcon" />
                    <p>Smith Doe</p>
                </div>
                <div className="profileUsers">
                    <BiUserPlus />
                    <p>Add Another Account</p>
                </div>
            </div>
            <Modal
                open={Profile}
                onClose={handleProfileClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='ChangeProfModal' sx={style}>
                    <div className="TagletModelHead flexCenter">
                        <h2>Change Picture</h2>
                        <AiOutlineClose onClick={handleProfileClose} />
                    </div>
                    <div className="flexCenter">
                        <div onClick={handleProfileOpen} className="userImg changeProfImg flexCenter">
                            <BiUser className="UserIcon" />
                        </div>
                    </div>
                    <div className="changeProfilePicBtns">
                        <button onClick={handleClick} className='flexCenter GG-10'><GrAdd />Upload Image</button>
                        <input style={{ display: "none" }} ref={inputRef} type="file" />
                        <button>Drag and drop Image</button>
                    </div>
                    <div className="canSaveBtns">
                        <span>Cancel</span>
                        <span>Save</span>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ProfileBar