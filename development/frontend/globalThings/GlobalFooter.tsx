import React, {PointerEventHandler, useContext} from "react";
import {Link} from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

import * as GlobalStyles from "./GlobalStyles";
import * as Contexts from "./context";
import * as Functions from "./functions";

export default function Footer() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <footer style={
            Object.assign(
                Functions.cloneObject(GlobalStyles.footerStyle),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.footerStyleMobile :
                nowWidthWindow === "tablet" ? GlobalStyles.footerStyleTablet : {}
            )
        }>
            <FooterList/>
            <FooterText/>
        </footer>
    )
}

function FooterList() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const list = ["Home", "-", "about us", "-", "services", "-", "portfolio", "-", "blog", "-", "contact us"];

    const enter = (e: { currentTarget: HTMLElement; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            color: "#cdcdcd"
        });
    };

    const leave = (e: { currentTarget: HTMLElement; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            color: "#9a9a9a"
        });
    };

    return(
        <ul style={
            Object.assign(
                Functions.cloneObject(GlobalStyles.footerUlStyles),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.footerUlStylesMobile :
                nowWidthWindow === "tablet" ? GlobalStyles.footerUlStylesTablet : {}
            )
        }>
            {list.map((item, index) => {
                return index % 2 === 0 ?
                <li key={index} style={{
                    cursor: "pointer"
                }}>
                    <Link to={`/${item === "portfolio" ? "Home#portfolio" : item}`} style={GlobalStyles.homeAbout} onPointerEnter={enter} onPointerLeave={leave}>{item}</Link>
                </li>
                :
                <li key={index} style={GlobalStyles.homeAbout}>
                    {item}
                </li>
            })}
        </ul>
    )
}

function FooterText() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="footer_text" style={
            Object.assign(
                Functions.cloneObject(GlobalStyles.footerTextStyle),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.footerTextStyleMobile :
                nowWidthWindow === "tablet" ? GlobalStyles.footerTextStyleTablet : {}
            )
        }>
            <h5 style={
                Object.assign(
                    Functions.cloneObject(GlobalStyles.createdBy),
                    nowWidthWindow === "mobileScreen" ? GlobalStyles.createdByMobile : {}
                )
            }>Created by akhouad 2016. All Rights Reserved</h5>
            <FooterTextList/>
        </div>
    )
}

export function FooterTextList({
    listOtherStyles = null
}: {
    listOtherStyles?: {} | null
}) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const enterOnLogo: PointerEventHandler<HTMLDivElement> = (e) => {
        const current = e.currentTarget;
        const classNameOfCurrent = current.className;

        switch(classNameOfCurrent) {
            case "facebook":
                Functions.changeStyleElem(current, {
                    color: "#1d21de"
                });
                break;
            case "twitter":
                Functions.changeStyleElem(current, {
                    color: "#7af8ff"
                });
                break;
            case "youtube":
                Functions.changeStyleElem(current, {
                    color: "#de1d3b"
                })
                break;
            case "linkedin":
                Functions.changeStyleElem(current, {
                    color: "#261dde"
                })
                break;
            case "pinterest":
                Functions.changeStyleElem(current, {
                    color: "#de1d48"
                })
                break;
            case "instagram":
                Functions.changeStyleElem(current, {
                    color: "#de1d8c"
                })
                break;
        }
    }

    const leaveFromLogo: PointerEventHandler<HTMLDivElement> = (e) => {
        const current = e.currentTarget;
        Functions.changeStyleElem(current, {
            color: "#999999"
        });
    }

    const list = [ <IonIcon name="logo-facebook" className="facebook" style={GlobalStyles.logoStyle} onPointerEnter={enterOnLogo} onPointerLeave={leaveFromLogo} />,
    <IonIcon name="logo-twitter" className="twitter" style={GlobalStyles.logoStyle} onPointerEnter={enterOnLogo} onPointerLeave={leaveFromLogo} />,
    <IonIcon name="logo-youtube" className="youtube" style={GlobalStyles.logoStyle} onPointerEnter={enterOnLogo} onPointerLeave={leaveFromLogo} />,
    <IonIcon name="logo-linkedin" className="linkedin" style={GlobalStyles.logoStyle} onPointerEnter={enterOnLogo} onPointerLeave={leaveFromLogo} />,
    <IonIcon name="logo-pinterest" className="pinterest" style={GlobalStyles.logoStyle} onPointerEnter={enterOnLogo} onPointerLeave={leaveFromLogo} />,
    <IonIcon name="logo-instagram" className="instagram" style={GlobalStyles.logoStyle} onPointerEnter={enterOnLogo} onPointerLeave={leaveFromLogo} /> ];

    const listStyle = Object.assign(
        Functions.cloneObject(GlobalStyles.footerTextUl),
        nowWidthWindow === "mobileScreen" ? GlobalStyles.footerTextUlMobile :
        nowWidthWindow === "tablet" ? GlobalStyles.footerTextUlTablet : {}
    );

    return(
        <ul style={
            Object.assign(
                listStyle,
                listOtherStyles ? listOtherStyles : {}
            )
        }>
            {list.map((item, index) => {
                return(
                    <li key={index} style={{
                        cursor: "pointer"
                    }}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}