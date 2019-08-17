import React from "react"

import Layout from "../elements/layout"
import SEO from "../elements/seo"
import Header from "../elements/header/header";
import Clients from "../components/clients/clients";
import Container from "../elements/container/container";
import IllustrationBackgroundAlt from "../background/background_2/background";
import IllustrationBackgroundModern from "../background/background_3/backgroundmodern";
import CTA from "../elements/cta/cta";
import Seperator from "../elements/seperator/seperator";
import Title from "../elements/containertitle/title";
import IllustrationBackground from "../background/illustrationbackground/background";
import PricingComponent from "../components/pricinig/pricingcomponent";
import VideoGallery from "../components/videogallery/videogallery";
import PromisesComponent from "../components/promises/promises";
import Person from "../elements/person/contactblock";
import {Fade} from "react-reveal";
import Question from "../elements/question/quote";

const IndexPage = () => (
    <Layout>
        <SEO title="Einfach brilliant erklärt | Videobakers"
             description={"Gratis Erklärvideo für Dich | Gratis Testen | Keine Anzahlung | Zufriedenheitsgarantie | Kein Abo. | Video wird in Kooperation mit dir erstellt"}/>
        <Header title={"Dein Erklärvideo."}
                titleSecondLine={"Zufriedenheit garantiert."}
                button={{href: '#offer', text: 'Erreiche jetzt dein Publikum'}}
                subtitle={"Erreiche deine Ziele im Onlinemarketing mit einem Erklärvideo nach dem besten Rezept. Teste es 30 Tage und zahle nur, wenn du wirklich zufrieden bist."}>
            <Container>
                <Clients/>
            </Container>
        </Header>

        <div id="page-wrap">

            <Container id={"offer"}>
                <Title title={"Das bieten wir dir"}
                       subtitle={"Wir erstellen dir dein Erklärvideo mit Zufriedenheitsgarantie. Lasse dir von uns abstrakte Konzepte einfach und verständlich als qualitativ hochwertiges Erklärvideo darstellen."}/>

                <PromisesComponent/>
            </Container>

            <Seperator/>


            <IllustrationBackground>
                <Container>
                    <Title title="Einige unserer erstellten Erklärvideos"
                           subtitle="Videobakers stellt vor - Einige unserer letzten Projekte. Lass dich verzaubern."/>
                    <VideoGallery/>
                </Container>
            </IllustrationBackground>


            <Seperator/>

            <IllustrationBackgroundModern>
                <IllustrationBackgroundAlt>
                    <Container id={"pricing"}>
                        <Title title="Für kleine, mittlere oder große Budgets"
                               subtitle="Wir bieten maßgeschneiderter Preise. Vom kurzen Video für private Projekte bis hin zu exklusiven Erklärvideos für Unternehmen."/>
                        <PricingComponent/>
                    </Container>
                </IllustrationBackgroundAlt>

                <Seperator/>


                <CTA/>


                <Seperator/>

                <Container>
                    <Title title={"Kontakt zu den Videobakers"}
                           subtitle={"Du hast Fragen oder möchtest dich beraten lassen? Schreib uns einfach eine E-Mail oder klingel durch."}/>

                    <Fade>
                        <Person
                            person={require('./../roman')}
                            style={{'width': '260px'}}/>
                    </Fade>
                </Container>


                <Seperator/>

                <Container>
                    <Title title={"Häufig gestellte Fragen"}
                           subtitle={"Alles klar? Falls du noch offene Fragen hast sieh dir die am häufigsten gestellten Fragen an"}/>


                    <Question
                        summary={"Was ist ein Erklärvideo?"}
                        text={"Ein Erklärvideo ist ein in der Regel kurzer, animierter Film, der einen komplexen Sachverhalt einfach auf den Punkt bringt. Ein Video kann dabei ein Produkt oder eine Dienstleistung erklären, aber auch im Rahmen eines Imagefilms von Unternehmen und Organisationen eingesetzt werden. Zudem nutzen viele Betriebe Videos in der internen Kommunikation, im Rahmen von Change-Prozessen oder im Bereich eLearning."}/>


                    <Question summary={"Was kostet ein Video?"}
                              text={"Unsere Erklärfilm-Preise beinhalten stets alle Leistungen, von der ersten Idee über die Drehbuchentwicklung, handgemachte Animation im jeweiligen Animationsstil, Vertonung durch einen Profi-Sprecher, Soundeffekte bis hin zu Musik. In jedem Preis inbegriffen sind stets auch alle Änderungsschleifen im Rahmen der jeweiligen Produktionsphase sowie das gesamte Projektmanagement. Unsere Erklärfilme beginnen in der Regel bei 595€, je nach gewünschter Stilrichtung."}/>

                    <Question summary={"Welche Stile gibt es?"}
                              text={"Beim Thema Erklärvideos gibt es grundsätzlich keine Begrenzung in der Anzahl verschiedener Stilrichtungen. Oberflächlich betrachtet kannst du bei uns zwischen Whiteboard Animation und 2D Animation wählen."}/>

                    <Question summary={"Was mache ich mit meinem Video, wenn es fertig ist?"}
                              text={"Die Einsatzmöglichkeiten eines Erklärvideos sind unglaublich vielfältig. Neben der Verwendung auf der eigenen Website kannst du es zu Werbezwecken besonders gut in Social Media (z.B. Facebook, YouTube, XING, LinkedIn, Instagram oder Snapchat) sowie im Rahmen von Vertriebsaktivitäten wie Email-Newslettern oder auch Messen und Veranstaltungen einsetzen. Wir beraten dich gerne auch über die eigentliche Videoerstellung hinaus, wie du dein nagelneues Erklärvideo am vielversprechendsten einsetzen kannst."}/>

                    <Question
                        summary={"Wie funktioniert das 'Gratis testen' und warum macht Videobakers das ?"}
                        text={"Das ist eine Gute Frage! Im Internet finden sich etliche Anbieter die Erklärvideos zu einem viel zu hohen Preis anbieten. Wir sind von unserer Arbeit überzeugt und wissen, dass wir Ihre Idee genau so umsetzen wie Sie es sich vorstellen. Weil wir davon so überzeugt sind, bieten wir Ihnen einen 30 Tage Test an."}/>

                </Container>


            </IllustrationBackgroundModern>

        </div>


    </Layout>
);

export default IndexPage
