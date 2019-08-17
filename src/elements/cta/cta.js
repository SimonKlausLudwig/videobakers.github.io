import React from "react";
import "./style.css";
import Button from "../button/button";

const CTA = ({title, button}) => (
    <div className={"mycta"}>
        <h2>Erreiche dein Publikum mit uns.</h2>
        <Button href="/kontakt">Jetzt kontaktieren</Button>
    </div>
);

export default CTA;
