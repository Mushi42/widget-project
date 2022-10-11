import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

import './index.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setisLoading] = useState(false)

  // const loginData = useSelector((state) => state.users.loginData);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (loginData.email) {
  //     setEmail(loginData.email);
  //     setisLoading(false)
  //   }
  // }, [loginData.email]);

  // const onSubmt = (e) => {
  //   e.preventDefault();
  //   setisLoading(true)
  //   dispatch(userAction.sendOtpMail(email, navigate));
  // }

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    </>
  );
}
export default Login;