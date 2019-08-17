import PropTypes from "prop-types"
import React from "react"
import "./step.css";
import {Fade} from "react-reveal";

const Step = ({siteTitle, number, step,children,text}) => {
    var elements = [<div className={"step el"}>
        <div className="dot"><span className="dot1"></span><span className="dot2"></span></div>
        <h2 className="stepheader">{number}. {step.title}</h2>
        <p className="step_text">{step.text}</p>
    </div>,
        <div className="step_wrapper el step-one-image">
            <Fade>
                {children}
            </Fade>
        </div>];

    if (number % 2 === 0) {
        return elements.reverse();
    }
    return elements;
};

Step.propTypes = {
    siteTitle: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Step.defaultProps = {
    siteTitle: ``,
};

export default Step
