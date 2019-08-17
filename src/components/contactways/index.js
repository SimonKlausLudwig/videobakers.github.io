import React from "react"
import {Fade} from "react-reveal";
import Field from "../../elements/field/field";
import "./style.css";

const ContactWaysComponnet = ({title, subtitle, prices}) => {
    return <div className={"contactt"}>
        <Fade left>

            <Field header={"Telefonberatung"}
                   cnt={0}
                   contact={{
                       href: 'tel:' + require("../../simon").phone.replace(/ /g,''),
                       'text': require("../../simon").phone + " anrufen"
                   }}
                   img={"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-telephone-outline-512.png"}
                   description={"Du möchtest persönlich beraten werden? Kein Problem. Ruf einfach bei uns an und wir besprechen alles persönlich mit dir. Schnell und einfach. "}/>

        </Fade>

        <Fade left>
            <Field header={"WhatsApp"}
                   cnt={1}
                   id={"whatsapp"}
                   contact={{
                       href: 'https://wa.me/491607731436',
                       'text': require("../../simon").phone + " schreiben"
                   }}
                   img={"https://cdn4.iconfinder.com/data/icons/43-social-media-line-icons/24/Whatsapp-512.png"}
                   description={"Schnell - Unkompliziert. Schreib‘ uns eine schnelle WhatsApp Nachricht. Klicke einfach auf den Button, um mit uns zu chatten."}/>
        </Fade>

        <Fade left>
            <Field header={"E-Mail"}
                   cnt={2}
                   contact={{
                       href: 'mailto:hello@videobakers.de?subject=Mein%20Erklärvideo',
                       'text': "hello@videobakers.de"
                   }}
                   img={"https://cdn3.iconfinder.com/data/icons/other-icons/48/talk_chat_message-512.png"}
                   description={"Natürlich bieten wir auch den konventionellen Weg Kontakt aufzunehmen an. Klicke einfach auf den Button, um eine E-Mail zu schreiben."}/>
        </Fade>

        <Fade left>
            <Field header={"Kontaktformular"}
                   cnt={3}
                   contact={{
                       href: 'https://videobakers.freshdesk.com/support/tickets/new',
                       'text': 'Jetzt Zum Formular'
                   }}
                   img={"https://cdn2.iconfinder.com/data/icons/education-lineal-style/512/documentcvpaperexamform-512.png"}
                   description={"Ganz schnell und direkt ohne die Seite zu verlassen. Nutze einfach das eingebaute Kontaktformular. Wir melden uns dann bei dir."}/>


        </Fade>


    </div>

};

export default ContactWaysComponnet;
