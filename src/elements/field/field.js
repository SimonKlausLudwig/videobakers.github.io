import React from "react";
import "./style.css";
import Text from "../text/text";
import Button from "../button/button";
import {Zoom} from "react-reveal";

const Field = ({children, description, id, title, contact, style, header, img, cnt}) => (
    <Zoom delay={cnt*300}>
            <div style={style} className={"fiiield"} id={id}>
                    <div className="ie"><img
                        src={img} alt="Feature tile icon 01"/>
                    </div>
                    <h3>{header}</h3>
                    <Text>{description}</Text>
                    <Button href={contact.href}>{contact.text}</Button>
            </div>
    </Zoom>
);

export default Field;
