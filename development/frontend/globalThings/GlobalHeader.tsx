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

    const [wasClick, setClick] = useState(false);

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

function HeaderHeadButton(props: {
    wasClick: boolean;
    setClick: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const buttonElem = buttonRef.current;

        if (props.wasClick && buttonElem) {
            const blackLinesOfButtons = buttonElem.children as HTMLCollectionOf<HTMLElement>

            Functions.changeStyleElem(blackLinesOfButtons[0], {
                top: "7px",
                width: "23px",
                transform: "rotate(45deg)"
            });
            Functions.changeStyleElem(blackLinesOfButtons[1], {
                opacity: 0
            });
            Functions.changeStyleElem(blackLinesOfButtons[2], {
                top: "7px",
                transform: "rotate(-45deg)"
            });

        } else if (!props.wasClick && buttonElem) {
            const blackLinesOfButtons = buttonElem.children as HTMLCollectionOf<HTMLElement>

            Functions.changeStyleElem(blackLinesOfButtons[0], {
                top: 0,
                width: "31px",
                transform: "rotate(0)"
            });
            Functions.changeStyleElem(blackLinesOfButtons[1], {
                opacity: 1
            });
            Functions.changeStyleElem(blackLinesOfButtons[2], {
                top: "14px",
                transform: "rotate(0)"
            });
        }

    }, [props.wasClick]);

    const focus = (e: { currentTarget: HTMLElement; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            outline: "none"
        });
    };

    const click = () => {
        props.setClick(!props.wasClick);
    };

    return(
        <div className="header_button" style={
            Functions.cloneObject(
                GlobalStyles.header_button
            )
        } onFocus={focus} onClick={click} ref={buttonRef}>
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

function HeaderHeadList(props: { wasClick: boolean | null; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const list = listRef.current;
        if (props.wasClick && list) {
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
        } else if (props.wasClick === false && list) {
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

    const refUl = useRef<HTMLUListElement>(null);

    const home = ["Home", "about us", "services", "portfolio", "blog", "contact us"];

    useEffect(() => {
        const ulElement = refUl.current;

        let timeShow = 0;

        if (props.wasClick && ulElement) {
            const ulElementChildren = ulElement.children as HTMLCollectionOf<HTMLElement>;

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
        } else if (props.wasClick === false && ulElement) {
            const ulElementChildren = ulElement.children as HTMLCollectionOf<HTMLElement>;

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
                            }
                            onClick={
                                (e: MouseEvent) => {
                                    props.wasClick ? undefined : e.preventDefault();
                                }
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