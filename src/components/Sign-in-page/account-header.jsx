import React from "react";
import "./account-header.style.scss";
import { ReactComponent as TeslaLogo } from "../../assets/tesla.svg";
import { ReactComponent as GlobeLogo } from "../../assets/globe.svg";

const AccountHeader = () => {
    return(
        <div className="header">
            <div className="left-section">
                <TeslaLogo className="logo"/>
            </div>
            <div className="right-section">
                <GlobeLogo className="logo"/>
                <p>en-us</p>
            </div>
        </div>
    )
}

export default AccountHeader;