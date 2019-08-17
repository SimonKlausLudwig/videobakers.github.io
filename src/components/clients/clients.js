import React from "react";
import "./style.css";

const Clients = () => (
    <div className={"vid_clients"}>
        <a rel="noopener noreferrer" target="_blank" href={"http://www.webworkers.io"}><img alt="Kundenlogo von Webworker"
                                        src={require('../../images/webworkers.png')}/></a>
        <a rel="noopener noreferrer" target="_blank" href={"http://www.newbrnd.de"}><img alt="Kundenlogo von Newbrnd" src={require('../../images/newbrnd.svg')}/></a>
        <a rel="noopener noreferrer" target="_blank" href={"http://www.mietwise.de"}><img alt="Kundenlogo von Mietwise" src={require('../../images/mario.png')}/></a>
    </div>
);

export default Clients;
