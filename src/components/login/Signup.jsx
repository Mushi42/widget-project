import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Shared/Input/Input'
function Signup() {
    const InputLabels = [
        {
            key: 1,
            label: 'Account Name'
        },
        {
            key: 2,
            label: 'Enter Email'
        },
        {
            key: 3,
            label: 'User Name'
        },
        {
            key: 4,
            label: 'Password'
        },
        {
            key: 5,
            label: 'Password Again'
        },
    ]
    return (
        <div className="SignUp flexCenter">
            <div className="innerContainer">
                <h2>Sign Up For Your Account</h2>
                {/* {InputLabels.map((key,label) => {
                    <Input key={key} label={label}/>
                })} */}
                <Input />
                <Input />
                <Input />
                <Input />
                <button className="signupBtn">Sign Up</button>
                <p className="loginHere">Already have an EPAx account? <Link to='/login'>
                    <a href="#">Login in</a>
                </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup