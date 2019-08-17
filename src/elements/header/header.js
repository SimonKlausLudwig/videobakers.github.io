import React from "react"
import Button from "../button/button.js";
import IllustrationBackground from "../../background/illustrationbackground/background";
import './style.css';
import {slide as Menu} from 'react-burger-menu'

const Header = ({title, subtitle, titleSecondLine, children, button}) => (

    <IllustrationBackground>

        <Menu right customBurgerIcon={<img alt="menu burger icon"
                                           src={"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDM3XzIwLV9tZW51X194MkNfX3VpX194MkNfX3VzZXJfaW50ZXJmYWNlX194MkNfIj48Zz48bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxMy40MTY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyLjYxMzE7IiB4MT0iMjYuNyIgeDI9IjQ4Ni4yNSIgeTE9IjEwNS42NDMiIHkyPSIxMDUuNjQzIi8+PGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTMuNDE2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Mi42MTMxOyIgeDE9IjI2LjciIHgyPSI0ODYuMjUiIHkxPSIyNTYuNTExIiB5Mj0iMjU2LjUxMSIvPjxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEzLjQxNjc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIuNjEzMTsiIHgxPSIyNi43IiB4Mj0iNDg2LjI1IiB5MT0iNDA3LjMxMiIgeTI9IjQwNy4zMTIiLz48L2c+PC9nPjxnIGlkPSJMYXllcl8xIi8+PC9zdmc+"}/>}
              transition={"push"} animation={"push"} pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}>

            <a href={"/"}><img alt="videobakers logo" title={"videobakers logo"} className={"logoheader"}
                               src={require('../../images/logo.png')}/></a>

            <a className="menu-item" href="/">Home</a>
            <a className="menu-item" href="/prozess">Das Erfolgskonzept</a>
            <a className="menu-item" href="/blog">Blog</a>
            <a className="menu-item" href="/preise">Preise</a>
            <a className="menu-item" href="/ueberuns">Über Uns</a>
            <Button href={"/kontakt/"}>Kontakt</Button>
        </Menu>


        <div className={"navbar-wrapper"}>
            <div className={"navbar"}>
                <a id="icon" href={"/"}><img alt="videobakers logo" title={"videobakers logo"} className={"logoheader"}
                                             src={require('../../images/logo.png')}/></a>
                <a className={"sublink"} href="/prozess">Das Erfolgskonzept</a>
                <a className={"sublink"} href="/blog">Blog</a>
                <a className={"sublink"} href="/preise">Preise</a>
                <a className={"sublink"} href="/ueberuns">Über uns</a>
                <Button className={"sublink"} href="/kontakt/">Kontakt</Button>
            </div>

        </div>

        <div style={{
            'display': 'flex',
            'padding': '48px 0 88px 0',
            'justifyContent': 'center',
            'textAlign': 'center'
        }}>
            <div style={{'maxWidth': '620px', 'padding': '0 16px'}}>
                <h1 className={"heading"}>{title}{!titleSecondLine ? '' : <br/>}{titleSecondLine}</h1>
                <p style={{'marginBottom': '32px'}}>{subtitle}</p>
                {button && <Button href={button.href}>{button.text}</Button>}
            </div>
        </div>
        {children}
    </IllustrationBackground>
);

export default Header
