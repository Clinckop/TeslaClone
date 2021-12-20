import React from "react";
import './inputCustom.styles.scss'

export const InputCustom =({variant, type}) => (
    <input type={type} className={`class-with-${variant}` }/>
)