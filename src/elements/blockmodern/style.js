import React from "react"
import './style.css';
import Block from "../block/block";
import Text from "../text/text";

const BlockModern = ({title, subtitle, img,alt}) => (
    <Block className={"modernblock"}>
        <img alt={alt} src={img}/>
        <h3>{title}</h3>
        <Text>{subtitle}</Text>
    </Block>
);

export default BlockModern
