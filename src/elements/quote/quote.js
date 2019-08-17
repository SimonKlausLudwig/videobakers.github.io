import React from "react"
import './style.css';
import Block from "../block/block";
import Text from "../text/text";

const Quote = ({text, href, children, className, style, author,path}) => (
    <Block path={path} className={"quote"} style={{"width": 'initial', 'maxWidth': 'initial'}}>
        <Text className={"quotebody"}>{text}</Text>

        <p className={"author"}>{author}</p>
    </Block>
);

export default Quote
