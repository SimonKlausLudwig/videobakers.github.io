import React from "react";
import "./style.css";
import classnames from "classnames";

const Container = ({children, id, title, subtitle, style, className}) => (
    <div id={id} className={classnames("vid_container", className)} style={style}>
        <div className={"containerinner"}>
            {children}
        </div>
    </div>
);

export default Container;
