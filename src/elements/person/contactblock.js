import React from "react"
import './style.css';
import Block from "../block/block";
import Text from "../text/text";
import classnames from "classnames";

const Person = ({person, style, children, className}) => (
    <Block
        className={classnames("person", className)} style={style}>
        <img alt={"Mitarbeiter " + person.name} src={require("../../images/" + person.image)}/>
        <div className="name">{person.name}</div>
        <Text>{person.description}</Text>

        <div className="footer">
            <Text><a
                href={"mailto:" + person.email + "?subject=Erklärvideo"}>{person.email}</a></Text>
            {(person.phone !== '-' && !!person.phone) && <Text><a className="mt-8" href={"tel:" + person.phone.replace(/ /g,'')}>{person.phone}</a></Text>}
            {children}
        </div>
    </Block>
);

export default Person
