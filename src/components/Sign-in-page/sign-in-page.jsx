import React from "react";
import ButtonCustome from "../Custom-Components/buttonCustom";
import { InputCustom } from "../Custom-Components/inputCustom";
import '../Custom-Components/inputCustom.styles.scss'
import './sign-in-page.styles.scss';
import AccountHeader from "./account-header";
const SignIn = ({ variant, type, ...rest }) => { 
    return (
        <div className="sign-in">
            <AccountHeader/>
            
            <div className="sign-in-container">
                
                <div className="container-title">
                        <p>Sign In</p>
                </div>
                <div className="label">
                    <label>Email Address</label>
                </div>
                <InputCustom type="text" variant="gray"/>
                
                <div className="label">
                    <label>Password</label>
                </div>
                <InputCustom type="password" variant="gray"/>
            
                <ButtonCustome type="submit" variant="sign-in">Sign In</ButtonCustome>

                <div className="links">
                    <a href="#">
                        Forgot email?
                    </a>
                    <p> &nbsp; | &nbsp;  </p>
                    <a href="#">
                        Forgot password?
                    </a>
                </div>
                <div className="or-section">
                    <div className="left-line">
                        <hr />
                    </div>
                    <label>or</label>
                    <div className="right-line">
                        <hr className="heee"/>
                    </div>
                </div>

                <ButtonCustome type="submit" variant="create">Create Account</ButtonCustome>

                <div className="bottom-section">
                    <div className="wrap">
                        <p className="one">Tesla@2021</p>
                        <p className="two">Privacy & Legal</p>
                        <p className="three">Contact</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;