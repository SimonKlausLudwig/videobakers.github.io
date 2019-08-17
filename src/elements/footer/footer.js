import React from "react";
import  "./style.css";

const Footer = ({siteTitle}) => (
    <footer className="site-footer">
        <div className="container">
            <div className="site-footer-inner">

                <div className={"sociallinks"}>
                    <a href={"https://www.linkedin.com/company/videobakers/"}><img
                        alt={"linkedin log"}
                        src={require('./../../images/linkedin.png')}/></a>
                    <a href={"https://facebook.com/videobakers/?ref=bookmarks"}><img
                        alt={"facebook logo"}
                        src={require('./../../images/facebook.png')}/></a>
                    <a href={"https://www.instagram.com/videobakers_de/"}><img
                        alt={"instagram logo"}
                        src={require("./../../images/instagram.png")}/></a>
                </div>

                <ul className="footer-links list-reset">
                    <li>
                        <a href="/impressum/">Impressum</a>
                    </li>
                    <li>
                        <a href="/datenschutz/">Datenschutz</a>
                    </li>
                </ul>

                <div className="list-reset mt-8 mb-8">
                    <div><a href="mailto:info@videobakers.de?subject=Erklärvideo">info@videobakers.de</a></div>
                    <div><a className="mt-8" href={"tel:" + require('./../../roman').phone.replace(/ /g,'')}>{require('./../../roman').phone}</a></div>
                </div>

                <div className="footer-copyright">© 2019 Videobakers, Made with Love in Hessen</div>
            </div>
        </div>
    </footer>
);

export default Footer;
