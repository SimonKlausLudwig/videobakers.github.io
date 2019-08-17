import React from "react"
import './style.css';
import classnames from 'classnames';

const Block = ({text, href, key, children, className, style, path}) => (
    <div key={key} style={style} className={classnames("vidblock", className)}>{children}</div>
);

export default Block
