import React, {useState, useEffect, useRef, useContext} from "react";
import * as Contexts from "./context";
import * as GlobalStyles from "./GlobalStyles";
import * as Functions from "./functions";
import {
    NavLink
} from "react-router-dom";

import Header_forward from "./images/header_forward.png";

export default function GlobalHeader(props: { h1: any; h2: any; p: any; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const [wasClick, setClick] = useState(null);

    return(
        <header style={
            Object.assign(
                Functions.cloneObject(
                    GlobalStyles.header
                ),
                {
                    backgroundImage: `url(${Header_forward})`
                }
            )
        }>
            <div className="header_forward" style={
                Functions.cloneObject(
                    GlobalStyles.header_forward
                )
            }>
                <div className="header_forward__top" style={
                    Functions.cloneObject(
                        GlobalStyles.header_foraward__top
                    )
                }>
                    <h1 style={
                        Functions.cloneObject(
                            GlobalStyles.h1_title
                        )
                    }>{props.h1}
                    </h1>
                    <HeaderHeadList wasClick={wasClick}/>
                    <HeaderHeadButton wasClick={wasClick} setClick={setClick}/>
                </div>
                <MobileAndTabletNavVersion wasClick={wasClick}/>
                <div className="header_forward__main" style={
                    Object.assign(
                        Functions.cloneObject(
                            GlobalStyles.header_forward__main
                        ),
                        nowWidthWindow === "mobileScreen" ? GlobalStyles.header_forward__mainMobile :
                        nowWidthWindow === "tablet" ? GlobalStyles.header_forward__mainTablet :
                        nowWidthWindow === "computerNormalScreen" ? GlobalStyles.header_forward__mainNormalScreen : {}
                    )
                }>
                    <h2 style={
                        Functions.cloneObject(
                            GlobalStyles.h2
                        )
                    }>{props.h2}</h2>
                    <p style={
                        Functions.cloneObject(
                            GlobalStyles.p
                        )
                    }>{props.p}</p>
                </div>
            </div>
        </header>
    )
}

function HeaderHeadButton(props: { wasClick: boolean | null; setClick: (arg0: boolean) => void; }) {

    const [target, setTarget] = useState(false);

    useEffect(() => {

        if (props.wasClick && target) {
            target.children[0].style.top = "7px";
            target.children[1].style.opacity = 0;
            target.children[2].style.top = "7px";

            target.children[0].style.width = "23px";

            target.children[0].style.transform = "rotate(45deg)";
            target.children[2].style.transform = "rotate(-45deg)";

        } else if (props.wasClick === false && target) {
            target.children[0].style.top = 0;
            target.children[1].style.opacity = 1;
            target.children[2].style.top = "14px";

            target.children[0].style.width = "31px";

            target.children[0].style.transform = "rotate(0)";
            target.children[2].style.transform = "rotate(0)";
        }
    }, [props.wasClick, target]);

    const focus = (e: { currentTarget: HTMLElement; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            outline: "none"
        });
    };

    const click = (e: { currentTarget: any; }) => {
        props.setClick(props.wasClick === null ? true : !props.wasClick);
        setTarget(e.currentTarget);
    };

    return(
        <div className="header_button" style={
            Functions.cloneObject(
                GlobalStyles.header_button
            )
        } onFocus={focus} onClick={click}>
            <div className="header_button__line" style={
                Object.assign(
                    Functions.cloneObject(
                        GlobalStyles.header_button__line
                    ),
                    GlobalStyles.header_button__line1
                )
            }></div>
            <div className="header_button__line" style={
                Object.assign(
                    Functions.cloneObject(
                        GlobalStyles.header_button__line
                    ),
                    GlobalStyles.header_button__line2
                )
            }></div>
            <div className="header_button__line" style={
                Object.assign(
                    Functions.cloneObject(
                        GlobalStyles.header_button__line
                    ),
                    GlobalStyles.header_button__line3
                )
            }></div>
        </div>
    )
}

function HeaderHeadList(props: { wasClick: boolean; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const listRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        if (props.wasClick) {
            list.animate([
                {
                    transform: "scaleX(0)"
                },
                {
                    transform: "scaleX(1)"
                }
            ], {
                duration: 250,
                easing: "linear",
                fill: "forwards"
            });
        } else if (props.wasClick === false) {
            list.animate([
                {
                    transform: "scaleX(1)"
                },
                {
                    transform: "scaleX(0)"
                }
            ], {
                duration: 250,
                easing: "linear",
                fill: "forwards"
            });
        }
    }, [props.wasClick]);

    const home = ["Home", "about us", "services", "portfolio", "blog", "contact us"];

    return(
        <ul style={
            Object.assign(
                Functions.cloneObject(
                    GlobalStyles.HeaderHeadList
                ),
            nowWidthWindow === "mobileScreen" || 
            nowWidthWindow === "tablet" ? GlobalStyles.HeaderHeadListMobileAndTablet : {}
            )
        } ref={listRef}>
            {
                home.map(item => <li key={item} style={
                    Functions.cloneObject(
                        GlobalStyles.HeaderHeadListItems
                    )
                }>
                    <NavLink to={`/${item === "portfolio" ? "Home#portfolio" : item}`} activeStyle={{
                        color: "#7beec7"
                    }} style={
                        Object.assign(
                            Functions.cloneObject(
                                GlobalStyles.HeaderHeadListItemsA
                            ),
                            nowWidthWindow === "computerNormalScreen" ? GlobalStyles.HeaderHeadListItemsANormalScreen : {}
                        )
                    }>
                        {item}
                    </NavLink>
                </li>)
            }
        </ul>
    )
}

/* Мобильная и планшетная версия навигации */

export function MobileAndTabletNavVersion(props: { wasClick: boolean; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const refUl = useRef(null);

    const home = ["Home", "about us", "services", "portfolio", "blog", "contact us"];

    useEffect(() => {
        const ulElement = refUl.current, ulElementChildren = ulElement.children;

        let timeShow = 0;

        if (props.wasClick) {
            Functions.changeStyleElem(ulElement, {
                transition: ".5s linear", 
                transform: "translateY(50px)",
                opacity: "1",
                height: "413px"
            });

            for (let i = 0; i < ulElementChildren.length; i++) {
                setTimeout(() => {
                    Functions.changeStyleElem(ulElementChildren[i], {
                        transform: "translateX(0)",
                        opacity: "1" 
                    });
                }, timeShow * 200);

                timeShow++;
            }

            timeShow = 0;
        } else if (props.wasClick === false) {

            for (let i = 0; i < ulElementChildren.length; i++) {
                setTimeout(() => {
                    Functions.changeStyleElem(ulElementChildren[ulElementChildren.length - (i + 1)], {
                        transform: "translateX(-15px)",
                        opacity: "0" 
                    });
                }, timeShow * 100);
                
                timeShow++;
            }

            timeShow = 0;

            Functions.changeStyleElem(ulElement, {
                transition: ".8s linear", 
                transform: "translateY(-10px)",
                opacity: "0",
                height: "0px"
            });

        }
        
    }, [props.wasClick]);

    return(
        <ul id="mobileAndTabletNav" ref={refUl} style={
            Object.assign({
                display: "none"
            },
            nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? GlobalStyles.MobileVersionNavStyle : {})
        }>
            {
                home.map((item, index) => {
                    return(
                        <li key={index} style={
                            index === 0 ?
                            Object.assign(Functions.cloneObject(GlobalStyles.MobileNavVersionLiStyle),
                            {
                                margin: 0
                            })
                            : GlobalStyles.MobileNavVersionLiStyle
                        }>
                            <NavLink to={`/${item}`} style={
                                GlobalStyles.MobileNavVersionLiNavLinkStyle
                            }
                            activeStyle={
                                GlobalStyles.MobileNavVersionLiNavLinkActiveStyle
                            }>
                                {item}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}