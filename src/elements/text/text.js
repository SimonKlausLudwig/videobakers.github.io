import React from "react"
import './style.css';
import classnames from 'classnames';

const Text = ({text, href, children, className, style}) => (
    <div className={classnames("defaulttext",className)}>
        {children}
    </div>
);

export default Text
