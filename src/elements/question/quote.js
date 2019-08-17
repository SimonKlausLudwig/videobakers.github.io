import React from "react"
import './style.css';

const Question = ({summary, text}) => (
    <details>
        <summary>{summary}</summary>
        <p>{text}</p>
    </details>


);

export default Question
