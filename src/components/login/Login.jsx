import { Box, Checkbox, FormControlLabel, FormGroup, Modal, Typography, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Shared/Input/Input'
function Login() {
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const InputLabels = [
        {
            key: 1,
            label: 'Account Name'
        },
        {
            key: 2,
            label: 'User Name'
        },
        {
            key: 3,
            label: 'Password'
        },
    ]
    return (
        <div className="SignUp Login flexCenter">
            <div className="innerContainer">
                <h2>User Login</h2>
                {InputLabels.map((obj, index) =>
                    <Input key={index} data={obj} />
                )}
                <div className="rememberPassword">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    </FormGroup>
                    <p className='forgotPass'>Forgot your Password</p>
                </div>
                <button className="signupBtn">Log in</button>
                <div className="cant-Login">
                    <span onClick={handleOpen}>Can't Log in ?</span> | <Link to='/signup'><span>Sign up for account</span></Link>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="loginModal flexCenter">
                    <div className="loginModalTitle">
                        <h2>Can't Login</h2>
                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        We Will send a Recovery Link to
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Enter Email"
                        variant="outlined"
                        type='email'
                    />
                    <button>Send Recovery Link</button>
                    <span onClick={handleClose}>Return To Login</span>
                </Box>
            </Modal>
        </div>
    )
}

export default Login