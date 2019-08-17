import React from "react"
import './style.css';
import Person from "../person/contactblock";

const Voice = ({person, file, children}) => (
    <Person person={person} className={"voice"}>
        <audio src={file} preload="auto" controls/>
    </Person>
);

export default Voice
