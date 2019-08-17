import React from "react"
import "./style.css";
import Button from "../button/button";

const BlockAlternative = ({title,imgalt, subtitle, img, path,style, id}) => {
    return <a href={path} style={style} className="block text-center" id={id}>



        <div style={{'padding': '24px'}}>
            <h3 className="blogheading">{title}</h3>
            <p className="text-sm">{subtitle}</p>


            <Button>Zum Beitrag</Button>
        </div>


    </a>
};

export default BlockAlternative
