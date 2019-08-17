import React from "react"

import Layout from "../elements/layout"
import SEO from "../elements/seo"
import Header from "../elements/header/header";
import Container from "../elements/container/container";
import IllustrationBackgroundModern from "../background/background_3/backgroundmodern";
import CTA from "../elements/cta/cta";
import Seperator from "../elements/seperator/seperator";
import Title from "../elements/containertitle/title";
import PricingComponent from "../components/pricinig/pricingcomponent";
import Person from "../elements/person/contactblock";
import {Fade} from "react-reveal";

const PreisePage = () => (
    <Layout>
        <SEO title="Brilliante Erklärvideos mit Zufriedenheitsgarantie Gratis testen"
             description={"Gratis Erklärvideo für Dich | Gratis Testen | Keine Anzahlung | Zufriedenheitsgarantie | Kein Abo. | Video wird in Kooperation mit dir erstellt"}/>
        <Header title={"Für kleine, mittlere oder große Budgets"}
                subtitle={"Für deine Bedürfnisse bieten wir dir maßgeschneiderte Pakete an. Vom kurzen Video für private Projekte bis hin zu exklusiven Videos für Unternehmen. Wir machen es jedem möglich, mit Erklärvideos erfolgreich zu sein. Sollte für dich hier nichts dabei sein, schick uns einfach eine Mail - wir erstellen dir gerne dein persönliches Angebot."}>


            <Container id={"pricing"}>
                <PricingComponent/>
            </Container>

        </Header>

        <IllustrationBackgroundModern>

            <Seperator/>


            <CTA/>


            <Seperator/>

            <Container>
                <Title title={"Kontakt zu den Videobakers"}
                       subtitle={"Du hast Fragen oder möchtest dich beraten lassen? Schreib uns einfach eine E-Mail oder klingel durch"}/>

                <Fade>
                    <Person
                        person={require('./../roman')}
                        style={{'width': '260px'}}/>
                </Fade>
            </Container>
        </IllustrationBackgroundModern>


    </Layout>
);

export default PreisePage
