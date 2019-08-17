import React from "react"
import "./style.css";
import PricingTable from "../../elements/pricingtable/table";
import {Fade} from "react-reveal";

const PricingComponent = ({title, subtitle, prices}) => {
    return <div className={"pricingcomponent"}>
        <Fade left>
            <PricingTable key="economy" title={"Economy"}
                          price={595}
                          subtitle={"Du hast Bedarf nach einem längeren Erklävideo? Mit Economy bekommst du komplexe Inhalte einfach und verständlich im Whiteboard-Stil dargestellt."}
                          prices={["60 Sekunden", "120 Wörter", "Inklusive Hintergrundmusik", "Basic Stimme", "2 Wochen Lieferzeit"]}/>
        </Fade>


        <Fade>
            <PricingTable key="premium" title={"Premium"}
                          price={795}
                          subtitle={"Feinste 2D-Animation, Stil nach Wahl und umfangreiche Beratung. Unser Premium Paket bietet alles, was ein perfektes Erklärvideo ausmacht."}
                          prices={["60 Sekunden", "120 Wörter", "Inklusive Hintergrundmusik", "Premium Stimme", "2 Wochen Lieferzeit", "Stil nach Wahl"]}/>
        </Fade>


        <Fade right>
            <PricingTable key="enterprise" title={"Enterprise"}
                          price={1095}
                          subtitle={"Komplexe Produkte, detaillierte Ausführung der Inhalte und Emotionen, die deine Zuhörer nicht vergessen. Lass' deine Kunden verzaubern."}
                          prices={["90 Sekunden", "180 Wörter", "Inklusive Hintergrundmusik", "Premium Stimme", "2 Wochen Lieferzeit","Stil nach Wahl",  "Mehrsprachig möglich", "2 Storyboardvorschläge"]}/>
        </Fade>

    </div>

};

export default PricingComponent;
