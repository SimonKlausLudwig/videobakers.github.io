import React from "react"
import "./style.css";
import Button from "../button/button";
import Block from "../block/block";
import Text from "../text/text";

const PricingTable = ({title, subtitle, prices,price}) => {
    return <Block>
        <div className="pricingtable">
            <div className="pricheader">
                <h3 className="title">{title} <br/> {price}€</h3>
                <Text className="subtitle">{subtitle}</Text>
            </div>
            <ul>
                {prices.map(i => <li key={i}><span>{i}</span></li>)}
            </ul>
        </div>
        <Button href={"/kontakt/"}>Jetzt loslegen</Button>
    </Block>

};

export default PricingTable
