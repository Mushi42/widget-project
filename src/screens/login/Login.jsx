import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import LoginBanner from "./LoginBanner";
import { Spin } from 'antd';


const Login = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setisLoading] = useState(false)

  const loginData = useSelector((state) => state.users.loginData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData.email) {
      setEmail(loginData.email);
      setisLoading(false)
    }
  }, [loginData.email]);

  const onSubmt = (e) => {
    e.preventDefault();
    setisLoading(true)
    dispatch(userAction.sendOtpMail(email, navigate));
  }
  return (
    <div className="login">
      <LoginBanner />
      <div className="login-email">
        <div className="enter-email">
          <h2>What is your email?</h2>
          <p>
            To verify who you are. we’ll send a confirmation code to this
            email
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isLoading ? <Spin />
            :
            <button
              onClick={onSubmt}
              disabled={!email.length}
              className="login-continue"
            >
              Continue
            </button>
          }
        </div>
      </div>
    </div>
  );
}
export default Login;