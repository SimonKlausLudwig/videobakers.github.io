import React from "react"
import Quote from "../../elements/quote/quote";
import "./style.css";
import {Fade} from "react-reveal";

const VideoGallery = ({title, subtitle, prices}) => {
    return <div className={"gallery"}>

        <Fade>

            <video poster={require('../../images/mietwise_screen.png')} style={{"width": "100%", "height": "auto"}} controls>
                <source src={require("../../videos/mietwise.mp4") + ""} type="video/mp4"/>
            </video>

            <video poster={require('../../images/buc_screen.png')} style={{"width": "100%", "height": "auto"}}  controls>
                <source src={require("../../videos/buc.mp4")} type="video/mp4"/>
            </video>

            <video poster={require('../../images/bestellkind_screen.png')} style={{"width": "100%", "height": "auto"}} controls>
                <source src={require("../../videos/bestellkind.mp4") + ""} type="video/mp4"/>
            </video>

            <Quote
                author={"Mietwise"}
                path={"/projekt/mietwise"}
                link={"https://buc-software.de"}
                text={"Ich fühle mich hier gut aufgehoben. Prompte Arbeit und stets zu meiner Zufriedenheit. Das Team von Videobakers hat mir viel Arbeit abgenommen. Dafür Danke!"}/>

            <Quote
                author={"Bülent Ucar - BUC-Software"}
                path={"/projekt/buc"}
                text={"Sehr professionell von A-Z."}/>

            <Quote
                author={"Andre - Bestellkind"}
                path={"/projekt/bestellkind"}
                text={"Als Designer war ich bei Bestellkind auch für das vermarkten des Startups zuständig. Das Video das wir bei Videobakers bestellt haben, hat sehr dazu beigetragen die Restaurantbesitzer zu überzeugen. Das nächste Video wird definitiv wieder bei Videobakers bestellt!"}/>
        </Fade>
    </div>

};

export default VideoGallery;
