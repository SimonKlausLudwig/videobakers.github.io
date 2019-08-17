import React from "react"

import Layout from "../elements/layout"
import Container from "../elements/container/container";
import Header from "../elements/header/header";
import IllustrationBackgroundModern from "../background/background_3/backgroundmodern";
import SEO from "../elements/seo";
import {Helmet} from "react-helmet";

const VoicesPage = () => (
    <Layout>

        <Helmet>
            <script src='/chat.js'></script>
        </Helmet>

        <SEO title="Impressum" metaDescription={"Videobakers Impressum"}/>

        <Header title={"Impressum"}>
        </Header>

        <IllustrationBackgroundModern>

            <Container id="container_test">

                <div className="impressum"><p>Angaben gemäß § 5 TMG</p><p>Videobakers UG i.G.
                    <br/>
                    Steinäcker 11/1
                    <br/>
                    88048 Friedrichshafen<br/>
                    <br/><br/>
                    Kontakt:<br/>
                    {require('./../roman').phone}<br/>
                    <a href="mailto:info@videobakers.de">info@videobakers.de</a><br/>
                </p><p><strong>Vertretungsberechtigte Geschäftsführer:</strong><br/>
                    Simon Ludwig <br/> Roman Breyer<br/><br/>
                    <strong>Haftungsausschluss: </strong><br/><br/><strong>Google Analytics</strong><br/><br/>
                    Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google
                    Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die
                    eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten
                    Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen
                    Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen
                    benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die
                    Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung
                    verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an
                    Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag
                    von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in
                    Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung
                    Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                    gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die
                    Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch
                    Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck
                    einverstanden.<br/><br/><strong>Google AdSense</strong><br/><br/>
                    Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA (''Google'').
                    Google Adsense verwendet sog. ''Cookies'' (Textdateien), die auf Ihrem Computer gespeichert werden
                    und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense verwendet auch
                    sog. ''Web Beacons'' (kleine unsichtbare Grafiken) zur Sammlung von Informationen. Durch die
                    Verwendung des Web Beacons können einfache Aktionen wie der Besucherverkehr auf der Webseite
                    aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten Informationen
                    über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) werden an einen Server von
                    Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre
                    Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten
                    und Anzeigen für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und
                    der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen
                    gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese
                    Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen
                    Daten der Google in Verbindung bringen. Das Speichern von Cookies auf Ihrer Festplatte und die
                    Anzeige von Web Beacons können Sie verhindern, indem Sie in Ihren Browser-Einstellungen ''keine
                    Cookies akzeptieren'' wählen (Im MS Internet-Explorer unter
                    ''Extras &gt; Internetoptionen &gt; Datenschutz &gt; Einstellung''; im Firefox unter
                    ''Extras &gt; Einstellungen &gt; Datenschutz &gt; Cookies''); wir weisen Sie jedoch darauf hin, dass
                    Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen
                    können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie
                    erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten
                    Zweck einverstanden.</p><br/>
                    Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der <a
                        href="https://www.kanzlei-hasselbach.de/">Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und
                        Familienrecht</a>
                </div>

            </Container>

        </IllustrationBackgroundModern>
    </Layout>
);

export default VoicesPage
