import React from "react";
import "./buttonCustom.styles.scss";

const ButtonCustome = ({type, variant, children}) => (
    <button className={`btn-with-${variant}`} type={type}>{children}</button>
)

export default ButtonCustome;