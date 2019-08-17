import React from "react"

import Layout from "../elements/layout"
import Container from "../elements/container/container";
import Header from "../elements/header/header";
import IllustrationBackgroundModern from "../background/background_3/backgroundmodern";
import Person from "../elements/person/contactblock";
import SEO from "../elements/seo";
import Title from "../elements/containertitle/title";
import Seperator from "../elements/seperator/seperator";
import ShiftGrid from "../elements/shiftgrid";
import CTA from "../elements/cta/cta";
import Voice from "../elements/voice/voice";

const StepsPage = () => (
    <Layout>

        <SEO title="Wir sind Videobakers - Die Köpfe hinter Deinem Video"
             metaDescription={"Videobakers ist ein aufstrebendes junges Team aus kreativen motivierten Mitarbeitern."}/>

        <Header title={"Servus, Moin und Guten Tag!"}
                href={"#container_test"}
                subtitle={<div>
                    <div>Wir sind Videobakers</div>
                    <br/>Entstanden aus der Idee zweier kreativer Köpfe bricht Videobakers heute die Maßstäbe in der modernen 2D-Animation. Wir streben danach, unsere Kunden nachhaltig erfolgreich zu machen, weshalb du bei uns an erster Stelle stehst – jeden Tag.</div>}>
                    </Header>

                    <IllustrationBackgroundModern>

                    <Container id="container_test">


                    <ShiftGrid>
                    <Person
                    person={require('./../simon')}
                    />
                    <Person
                    person={require('./../roman')}
                    />

                    </ShiftGrid>

                    </Container>

                    <Seperator/>


                    <Container id={"offer"}>
                    <Title title={"Die Stimmen hinter unseren Videos"}
                    subtitle={"Wir machen gemeinsame Sache - höre dir Samples unserer Lieblingssprecher an. Bald könnten Sie schon in deinem Video vorkommen."}/>

                    <ShiftGrid>
                    <Voice file={require('./../mp3/1_anna.mp3')}
                    person={{
                        name: 'Anna',
                        image: 'anna.jpeg',
                        description: 'Mit über 2000 Sprachaufnahmen ist Anna eine sehr erfahrene Sprecherin. Ihre klare Stimme zaubert unseren Kunden stets ein Lächeln ins Gesicht.',
                    }}
                    style={{'width': '260px'}}/>
                    <Voice file={require('./../mp3/2_falk.mp3')}
                    person={{
                        name: 'Falk',
                        image: 'falk.jpg',
                        description: 'Falk ist Sprecher und Audioingenieur mit 20 Jahren an Erfahrung. Er beeindruckt seine Zuhörer besonders mit seiner lebendigen und energischen Stimme.',
                    }}
                    style={{'width': '260px'}}/>

                    <Voice file={require('./../mp3/3_oliver.mp3')}
                    person={{
                        name: 'Oliver',
                        image: 'oliver.jpeg',
                        description: 'Oliver ist seit 2014 als Sprecher tätig und ebenfalls zahlreiche Sprachaufnahmen getätigt. Sachliche Themen sind bei Olivers ruhiger Stimme bestens aufgehoben.',
                    }}
                    style={{'width': '260px'}}/>

                    <Voice file={require('./../mp3/4_julis.mp3')}
                    person={{
                        name: 'Julius',
                        image: 'julien.jpeg',
                        description: 'Als Audioingenieur und Sprecher hat Julien über 5 Jahre an Erfahrung sammeln können. Seine weiche, warme und zugleich freundliche Stimme machen ihn einzigartig.',
                    }}
                    style={{'width': '260px'}}/>

                    <Voice file={require('./../mp3/5_michael.mp3')}
                    person={{
                        name: 'Michael',
                        image: 'mann3.png',
                        description: '\n' +
                            'Egal ob im Radio, in Audiobüchern oder auf Youtube. Michael hat bereits viel Erfahrung im Sprechen sammeln können und ist in der Lage in verschiedensten Tonlagen zu ertönen.',
                    }}
                    style={{'width': '260px'}}/>


                    <Voice file={require('./../mp3/6_chris.mp3')}
                    person={{
                        name: 'Chris',
                        image: 'chris.jpeg',
                        description: 'Mittlerweile hat Chris 8 Jahre Erfahrung als Sprecher. Ausgerüstet mit exzellentem Equipment liefert er einzigartige Voiceover.',
                    }}
                    style={{'width': '260px'}}/>

                    </ShiftGrid>
                    </Container>


                    <Seperator/>

                    <CTA/>

                    <Seperator/>

                    </IllustrationBackgroundModern>
                    </Layout>
                    );

                    export default StepsPage
