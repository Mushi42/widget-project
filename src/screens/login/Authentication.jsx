import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { notifyWarn } from '../../components/Toast';
import LoginBanner from './LoginBanner';
import { userAction } from '../../redux/actions';
import { Spin } from 'antd';

const Authentication = () => {
  const [otp, setOtp] = useState('');

  const loginData = useSelector((state) => state.users.loginData);
  const dispatch = useDispatch();

  const handleChange = (otp) => setOtp(otp);

  const onResend = () => {
    if(!loginData.email) return notifyWarn("kindly go back and input email!");
    dispatch(userAction.sendOtpMail(loginData.email));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!loginData.optEmailId) return;
    dispatch(userAction.verifyOTP(loginData.optEmailId, otp));
    setisLoading(true)
  }

  const [isLoading, setisLoading] = useState(false)
  return (
    <div className="login">
      <LoginBanner />
      <div className="verification-section enter-email">
        <div className="inner-container">
          <div className="back-to-email">
            <Link to="/">
              <FontAwesomeIcon
                className="back-icon"
                icon={faArrowLeftLong}
              ></FontAwesomeIcon>
            </Link>
            <span>OTP Verification</span>
          </div>
          <h2>We sent your confirmation code to your email address</h2>
          <p className="resend-time">
            Enter this code before it expires in <span>1 min : 56s</span>
          </p>
          <form onSubmit={onSubmit}>
            <div className="verify-input">
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                className="otpInput"
                style={{ justifyContent: 'spaceBeteen' }}
              />
            </div>
            <p className="resend-time">
              Didn’t receive a code?{' '}
              <span onClick={onResend} className="resend-btn">
                Resend
              </span>
            </p>
            {isLoading ? <Spin />
            :
            <button type="submit" className="login-continue">
              Continue
            </button>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
