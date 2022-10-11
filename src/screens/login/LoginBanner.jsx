import React from 'react'
import bannerLogo from '../../assets/images/Vector.png'

const LoginBanner = () => {
    return (
        <div className="banner pos-relative">
            <div className="login-banner">
            </div>
            <div className="login-banner-logo pos-absolute">
                <img src={bannerLogo} alt="logo" />
                <h2>Sweeshers</h2>
            </div>
        </div>
    );
}
export default LoginBanner;