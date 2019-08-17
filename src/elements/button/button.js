import React from "react"
import './style.css';
import classnames from "classnames";

const Button = ({text, href, children, className}) => (
    <a className={classnames("vidbutton", className)} href={href}>{children}</a>
);

export default Button
