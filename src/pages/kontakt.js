import React from "react"

import Layout from "../elements/layout"
import Container from "../elements/container/container";
import Header from "../elements/header/header";
import IllustrationBackgroundModern from "../background/background_3/backgroundmodern";
import SEO from "../elements/seo";
import Seperator from "../elements/seperator/seperator";
import ContactWaysComponnet from "../components/contactways";

const VoicesPage = () => (
    <Layout>

        <SEO title="Unsere Stimmen" metaDescription={"Egal ob Männlich oder Weiblich. Bei Videobakers gibt es alle."}/>

        <Header title={"Dein Projekt bei Videobakers"}
                subtitle={"Mit persönlicher Beratung per Telefon oder E-Mail in dein Projekt starten."}>
        </Header>

        <IllustrationBackgroundModern>

            <Container id="container_test">

                <div className={"contactContainer"}>

                    <ContactWaysComponnet/>

                </div>


            </Container>

            <Seperator/>

        </IllustrationBackgroundModern>
    </Layout>
);

export default VoicesPage
