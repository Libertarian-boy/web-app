import React, {useState, useEffect, useRef, useContext} from "react";
import {
    NavLink
} from "react-router-dom";

import * as HomepagePresets from "./homepage_presets";
import * as Contexts from "../globalThings/context";
import * as Styles from "./styles";
import * as Functions from "../globalThings/functions";

import GlobalPreFooter from "../globalThings/GlobalPrefooter";
import GlobalFooter from "../globalThings/GlobalFooter";
import GlobalChangeLocationOn from "../globalThings/GlobalChangeLocationOn";
import {MobileAndTabletNavVersion} from "../globalThings/GlobalHeader";

import Layer_1 from "./images/Layer_1.png";
import Layer_4 from "./images/Layer_4.png";
import arrows from "./images/arrows.png";
import buy from "./images/buy.png";
import infinity from "./images/infinity.png";
import options from "./images/options.png";
import about_img3 from "./images/about_img3.png";
import Layer_5 from "./images/Layer_5.png";
import Layer_6 from "./images/Layer_6.png";
import Layer_7 from "./images/Layer_7.png";
import Layer_8 from "./images/Layer_8.png";
import Layer_9 from "./images/Layer_9.png";
import Layer_10 from "./images/Layer_10.png";
import Layer_11 from "./images/Layer_11.png";
import Layer_13 from "./images/Layer_13.png";
import Layer_14 from "./images/Layer_14.png";

export default function HomePage() {
    const [down, setDown] = useState(null);
    const value = {down, setDown};
    
    return(
        <React.Fragment>
            <Contexts.HeaderContext.Provider value={value}>
                {/* Установка значения body и root */}
                <HomepagePresets.BodyAndRootStyles/>
                {/* Проверка и изменения при изменении ориентации экрана*/}
                <HomepagePresets.OrientationChange/>
                {/* Проверка и изменения при изменении размера экрана */}
                <HomepagePresets.Resize/>
                {/* Установка глобальных значений */}
                <HomepagePresets.LetGlobalThis/>
                {/* Для анимации появления header, main, footer */}
                <GlobalChangeLocationOn/>
                <Header/>
            </Contexts.HeaderContext.Provider>
            <Main/>
            <GlobalFooter/>
        </React.Fragment>
    )
}

/* Header */

function Header() {
    
    const {down} = useContext(Contexts.HeaderContext), {nowWidthWindow} = useContext(Contexts.MediaContext);

    const headerRef = useRef(null), forwardHeaderRef = useRef(null);

    const [wasClick, setWasClick] = useState(null);

    useEffect(() => {
        const header = headerRef.current, forwardHeader = forwardHeaderRef.current,
        textOfHeader = document.querySelector(".header_forward__body___main____description > p") ?? null;

        if (header && textOfHeader && forwardHeader) {
            if (down && nowWidthWindow !== "mobileScreen") {
                Functions.changeStyleElem(header, {
                    height: `${header.clientHeight + textOfHeader.clientHeight}px`
                });
    
                Functions.changeStyleElem(forwardHeader, {
                    height: `${forwardHeader.clientHeight + textOfHeader.clientHeight}px`
                });
            } else if (down === false && nowWidthWindow !== "mobileScreen") {
                Functions.changeStyleElem(header, {
                    height: `${header.clientHeight - (textOfHeader.clientHeight - 16) / 2}px` /* "850px" */
                });
    
                Functions.changeStyleElem(forwardHeader, {
                    height: `${header.clientHeight - (textOfHeader.clientHeight - 16) / 2}px` /* "850px" */
                });
            }
        }
    }, [down]);

    return(
        <header ref={headerRef} style={Object.assign(Functions.cloneObject(Styles.HeaderStyle), {
            backgroundImage: `url(${Layer_1})`
        })}>
            <div className="header_forward" ref={forwardHeaderRef} style={Styles.HeaderForwardStyle}>
                <HeaderForwardHead wasClick={wasClick} setWasClick={setWasClick}/>
                {/* Мобильная и планшетная версия навигации */}
                <MobileAndTabletNavVersion wasClick={wasClick}/>
                <HeaderForwardBody/>
            </div>
        </header>
    )
}

function HeaderForwardHead(props) {

    return (
        <div className="header_forward__head" style={Styles.HeaderForwardHeadStyle}>
            <Logo/>
            <HeaderHeadList wasClick={props.wasClick}/>
            <HeaderHeadButton wasClick={props.wasClick} setWasClick={props.setWasClick}/>
        </div>
    )
}

function Logo() {
    return(
        <h1 style={Styles.Akad}>akad.</h1>
    )
}

function HeaderHeadList(props) {

    const listRef = useRef(null);

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        if (props.wasClick) {
            Functions.changeStyleElem(listRef.current, {
                transform: "scaleX(1)"
            });
        } else if (props.wasClick === false) {
            Functions.changeStyleElem(listRef.current, {
                transform: "scaleX(0)"
            });
        }
    }, [props.wasClick]);

    const home = ["Home", "about us", "services", "portfolio", "blog", "contact us"];

    return(
        <ul style={
            Object.assign(Functions.cloneObject(Styles.HeaderHeadList),
            nowWidthWindow === "mobileScreen" ? Styles.HeaderHeadListMobile : 
            nowWidthWindow === "tablet" ? Styles.HeaderHeadListTablet : {})
        } ref={listRef}>
            {
                home.map(item => <li key={item} style={Styles.HeaderHeadListItems}>
                    <NavLink to={`/${item === "portfolio" ? "Home#portfolio" : item}`} activeStyle={{
                        color: "#7beec7"
                    }} style={
                        Object.assign(
                            Functions.cloneObject(Styles.HeaderHeadListItemsA),
                            nowWidthWindow === "computerNormalScreen" ? Styles.HeaderHeadListItemsAMedium : {}
                        )
                    }>
                        {item}
                    </NavLink>
                </li>)
            }
        </ul>
    )
}

function HeaderHeadButton(props) {

    const [target, setTarget] = useState(false);
    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {

        if (props.wasClick && target) {
            target.children[0].style.top = "7px";
            target.children[1].style.opacity = 0;
            target.children[2].style.top = "7px";

            target.children[0].style.width = "23px";

            target.children[0].style.transform = "rotate(45deg)";
            target.children[2].style.transform = "rotate(-45deg)";

            /* Изменения линий кнопки в headerHead*/
        } else if (props.wasClick === false && target) {
            target.children[0].style.top = 0;
            target.children[1].style.opacity = 1;
            target.children[2].style.top = "14px";

            target.children[0].style.width = "31px";

            target.children[0].style.transform = "rotate(0)";
            target.children[2].style.transform = "rotate(0)";
        }
    }, [props.wasClick, target]);

    const focus = (e) => {
        Functions.changeStyleElem(e.currentTarget, {
            outline: "none"
        });
    };

    const click = (e) => {
        props.setWasClick(props.wasClick === null ? true : !props.wasClick);
        setTarget(e.currentTarget);
    };

    return(
        <button style={Object.assign(Functions.cloneObject(Styles.HeaderHeadButton),
            nowWidthWindow === "mobileScreen" ? Styles.HeaderHeadButtonMobile : {})} onFocus={focus} onClick={click}>
            <div className="buttonLineFirst" style={Object.assign(Functions.cloneObject(Styles.HeaderHeadButtonLine), {
                width: "31px",
                top: 0
            })}></div>
            <div className="buttonLineSecond" style={Object.assign(Functions.cloneObject(Styles.HeaderHeadButtonLine), {
                width: "15px",
                top: "7px"
            })}></div>
            <div className="buttonLineThird" style={Object.assign(Functions.cloneObject(Styles.HeaderHeadButtonLine), {
                width: "23px",
                top: "14px"
            })}></div>
        </button>
    )
}

function HeaderForwardBody() {
    return(
        <div className="header_forward__body" style={Styles.headerForwardBody}>
            <HeaderForwardBodyTitle/>
            <HeaderForwardBodyMain/>
        </div>
    )
}

function HeaderForwardBodyTitle() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="header_forward__body___title" style={
            Object.assign(Functions.cloneObject(Styles.HeaderForwardTitle),
            nowWidthWindow === "mobileScreen" ? Styles.HeaderForwardTitleMobile :
            nowWidthWindow === "tablet" ? Styles.HeaderForwardTitleTablet : {})
        }>
            <h4 style={Styles.weRe}>we’re</h4>
            <h3 style={
                Object.assign(Functions.cloneObject(Styles.shape5),
                nowWidthWindow === "mobileScreen" ? Styles.shape5Mobile :
                nowWidthWindow === "tablet" ? Styles.shape5Table : {})
            }>creative agency</h3>
            <p style={Styles.loremIpsum}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

function HeaderForwardBodyMain() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="header_forward__body___main" style={
            Object.assign(
                Functions.cloneObject(Styles.HeaderForwardBodyMain),
                nowWidthWindow === "mobileScreen" ? Styles.HeaderForwardBodyMainMobile :
                nowWidthWindow === "tablet" ? Styles.HeaderForwardBodyMainTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.HeaderForwardBodyMainMedium : {}
            )
        }>
            <Functions.Img src={Layer_4} alt="Layer_4" className="header_forward__body___main____img" style={
                Object.assign(
                    {},
                    nowWidthWindow === "mobileScreen" ? Styles.HeaderForwardBodyMainImgMobile :
                    nowWidthWindow === "computerNormalScreen"
                    && document.documentElement.clientWidth < 1190 ? Styles.HeaderForwardBodyMainImgMedium : {}
                )
            }/>
            <HeaderForwardBodyMainText/>
        </div>
    )
}

function HeaderForwardBodyMainText() {

    const refTextOfHeader = useRef(null);
    const {down, setDown} = useContext(Contexts.HeaderContext);
    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        const textOfHeader = refTextOfHeader.current;
        if (down) {
            Functions.changeStyleElem(textOfHeader, {
                height: `${textOfHeader.clientHeight * 2 + 16}px`,
                maxHeight: `${textOfHeader.clientHeight * 2 + 16}px`
            });
        } else if (down === false) {
            Functions.changeStyleElem(textOfHeader, {
                height: `${(textOfHeader.clientHeight - 16) / 2}px`,
                maxHeight: `${(textOfHeader.clientHeight - 16) / 2}px`
            });
        }
    }, [down]);

    return(
        <div className="header_forward__body___main____description" style={
            Object.assign(
                Functions.cloneObject(Styles.HeaderForwardBodyMainDescription),
                nowWidthWindow === "mobileScreen" ? Styles.HeaderForwardBodyMainDescriptionMobile :
                nowWidthWindow === "tablet" ? Styles.HeaderForwardBodyMainDescriptionTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.HeaderForwardBodyMainDescriptionMedium : {}
            )
        }>
            <h4 style={
                Object.assign(
                    Functions.cloneObject(Styles.historyOf),
                    nowWidthWindow === "mobileScreen" ? Styles.historyOfMobile : {}
                )
            }>
                HISTORY OF AGENCY
                <div className="h4_underBlock" style={Styles.shape4}></div>
            </h4>
            <p style={
                Object.assign(Functions.cloneObject(Styles.porroQuisquam),
                    nowWidthWindow === "mobileScreen" ? Styles.porroQuisquamMobile :
                    nowWidthWindow === "tablet" ? Styles.porroQuisquamTablet : {}
                )
            } ref={refTextOfHeader}>
                Porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi modi tempora incidunt ut labore. <br/>
                Porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi modi tempora incidunt ut labore.
            </p>
            <HeaderForwardBodyMainButton down={down} setDown={setDown}/>
        </div>
    )
}

function HeaderForwardBodyMainButton(props) {

    const refButton = useRef(null);

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const focus = (e) => {
        Functions.changeStyleElem(e.currentTarget, {
            outline: "none"
        });
    };

    const enter = (e) => {
        Functions.changeStyleElem(e.currentTarget, {
            transition: ".35s ease-out",
            backgroundColor: "#ffffff",
            color: "#7beec7",
            boxShadow: "0 0 0 3px #7beec7"
        });
    };

    const leave = (e) => {
        Functions.changeStyleElem(e.currentTarget, {
            transition: ".35s ease-in",
            backgroundColor: "#7beec7",
            color: "#ffffff",
            boxShadow: "0 0 0 0 #7beec7"
        });
    };

    const click = () => {
        props.setDown(props.down === null ? true : !props.down);
    };

    return(
        <button style={
            Object.assign(
                Functions.cloneObject(Styles.shape7),
                nowWidthWindow === "mobileScreen" ? Styles.shape7Mobile :
                nowWidthWindow === "tablet" ? Styles.shape7Tablet : {}
            )
        } ref={refButton} onFocus={focus} onPointerEnter={enter} onPointerLeave={leave} onClick={click}>
            {props.down === true ? "hide text" : "read more"}
        </button>
    )
}

/* Main */

function Main() {
    return(
        <main style={Styles.main}>
            <WhyCooseUs/>
            <OurPortfolio/>
            <GlobalPreFooter/>
        </main>
    )
}

function WhyCooseUs() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_whyChooseUs" style={Styles.whyChooseUsStyle}>
            <Functions.TitleText title="why choose us" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            otherStylesTitle={
                nowWidthWindow === "mobileScreen" ? Styles.titleStyleMobile :
                nowWidthWindow === "tablet" ? Styles.titleStyleTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.titleStyleMedium : {}
        }/>
            <WhyChooseUsMain/>
        </div>
    )
}

function WhyChooseUsMain() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_whyChooseUs__main" style={Object.assign(
            Functions.cloneObject(Styles.whyChooseUsMainStyle),
            nowWidthWindow === "mobileScreen" ? Styles.whyChooseUsMainStyleMobile :
            nowWidthWindow === "tablet" ? Styles.whyChooseUsMainStyleTablet : {}
        )}>
            <WhyChooseUsMainLists/>
            <Functions.Img src={about_img3} alt="about_img3" isCanBeDownload={true} className="about_img3" style={
                Object.assign(
                    Functions.cloneObject(Styles.whyChooseUsImg),
                    nowWidthWindow === "mobileScreen" ? Styles.whyChooseUsImgMobile : 
                    nowWidthWindow === "tablet" ? Styles.whyChooseUsImgTablet :
                    nowWidthWindow === "computerNormalScreen" ? Styles.whyChooseUsImgMedium : {}
                )
            }/>
        </div>
    )
}

function WhyChooseUsMainLists() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_whyChooseUs__main___lists" style={
            Object.assign(Functions.cloneObject(Styles.whyChooseUsMainListsStyle),
            nowWidthWindow === "mobileScreen" ? Styles.whyChooseUsMainListsStyleMobile :
            nowWidthWindow === "tablet" ? Styles.whyChooseUsMainListsStyleTablet : {})
        }>
            <WhyChooseUsMainListsItem src={infinity} alt="infiniry" className="main_lists__item"
            h3="unlimited options" styleForH3={{
                margin: "26px 0 0 0"
            }} list={["Branding", "Design & Copywriting", "Concept development", "User Experience"]} styleForListsItem={
                nowWidthWindow === "mobileScreen" ? {margin: "0px"} :
                nowWidthWindow === "tablet" ? {margin: "0 0 0 20px"} : {margin: "27px 0px 0px 0px"}
            }/>

            <WhyChooseUsMainListsItem src={arrows} alt="arrows" className="main_lists__item"
            h3="DESIGN & DEVELOPMENT" styleForH3={{
                margin: "19px 0 0 0"
            }} list={["Information architecture", "Interface design", "Product Design", "Integrated ad Companies"]} styleForListsItem={
                nowWidthWindow === "mobileScreen" ? {margin: "20px 0px 0px 0px"} :
                nowWidthWindow === "tablet" ? {margin: "0 0 0 20px"} : {margin: "20px 0px 0px 132px"}
            }/>

            <WhyChooseUsMainListsItem src={buy} alt="buy" className="main_lists__item"
            h3="e-commerce" styleForH3={{
                margin: "19px 0 0 0"
            }} list={["Prototyping", "Technical Consulting", "Web applications", "Quality testing"]} styleForListsItem={
                nowWidthWindow === "mobileScreen" ? {margin: "20px 0px 0px 0px"} :
                nowWidthWindow === "tablet" ? {margin: "20px 0 0 20px"} : {margin: "67px 0 0 0"}
            }/>

            <WhyChooseUsMainListsItem src={options} alt="options" className="main_lists__item"
            h3=" CUSTOMIZABLE DESIGN" styleForH3={{
                margin: "21px 0 0 0"
            }} list={["Information architecture", "Interface design", "Product Design", "Integrated ad Companies"]} styleForListsItem={
                nowWidthWindow === "mobileScreen" ? {margin: "20px 0px 0px 0px"} :
                nowWidthWindow === "tablet" ? {margin: "20px 0 0 20px"} : {margin: "63px 0px 0px 160px"}
            }/>
        </div>
    )
}

function WhyChooseUsMainListsItem(props) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const enter = (e) => {
        Functions.changeStyleElem(e.currentTarget, {
            color: "#60606e"
        });
    };

    const leave = (e) => {
        Functions.changeStyleElem(e.currentTarget, {
            color: '#999999',
        });
    };

    return(
        <div className="lists_item" style={Object.assign(Functions.cloneObject(Styles.whyChooseUsMainListsItemStyle), 
            nowWidthWindow === "mobileScreen" ? Object.assign(Styles.whyChooseUsMainListsItemStyleMobile,
                {...props.styleForListsItem}) :
                {...props.styleForListsItem}
        )}>
            <Functions.Img src={props.src} alt={props.alt} className={props.className}/>
            <h3 style={Object.assign(Functions.cloneObject(Styles.unlimitedOptions), {
                ...props.styleForH3
            })}>{props.h3}</h3>
            <ul style={Styles.ListsItemUlStyle}>
                {props.list.map((item, index) => {
                    return <li key={index} style={Object.assign(
                        Functions.cloneObject(Styles.brandingDesign),
                        nowWidthWindow === "mobileScreen" ? Styles.brandingDesignMobile : {}
                    )} onPointerEnter={enter} onPointerLeave={leave}>{item}</li>
                })}
            </ul>
        </div>
    )
}

function OurPortfolio() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_ourPortfolio" style={Styles.mainOurPortfolio}>
            <Functions.TitleText title="our portfolio" id="portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            otherStylesTitle={
                Object.assign(
                    {
                        margin: "150px 0 0 0"
                    },
                    nowWidthWindow === "mobileScreen" ? Styles.titleStyleMobile :
                    nowWidthWindow === "tablet" ? Styles.titleStyleTablet : {}
                )
            }
            otherStylesTitleUnderBlock={{
                width: "67px"
            }}/>
            <OurPortfolioMain/>
            <OurPortfolioMainMobile/>
        </div>
    )
}

function OurPortfolioMain() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const [category, setCategoty] = useState("All");

    return(
        <div className="main_ourPortfolio__main" style={
            Object.assign(
                Functions.cloneObject(Styles.mainOurPortfolioMainStyles),
                /* nowWidthWindow === "mobileScreen" ?  Styles.mainOurPortfolioMainStylesMobile : */
                nowWidthWindow === "tablet" ? Styles.mainOurPortfolioMainStylesTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.mainOurPortfolioMainStylesMedium : {}
            )
        }>
            <ChooseCategory category={category} setCategoty={setCategoty}/>
            <Categories category={category}/>
        </div>
    )
}

/* Функция портфолио для мобильных устройств */

function OurPortfolioMainMobile() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const [click, setClick] = useState(null);

    return(
        <div className="main_ourPortfolio__mainMobile" style={
            Object.assign(
                {
                    display: "none"
                },
                nowWidthWindow === "mobileScreen" ? Styles.mainOurPortfolioMainMobileStyles : {}
            )
        }>
            <CategoriesMobileButton setClick={setClick} click={click}/>
            <CategoriesMobile click={click}/>
        </div>
    )
}

function CategoriesMobileButton(props) {

    const enter = (e) => {
        Functions.changeStyleElem(e.currentTarget, {
            transition: ".35s ease-out",
            backgroundColor: "#ffffff",
            color: "#7beec7",
            boxShadow: "0 0 0 3px #7beec7"
        });
    };

    const leave = (e) => {
        Functions.changeStyleElem(e.currentTarget, {
            transition: ".35s ease-in",
            backgroundColor: "#7beec7",
            color: "#ffffff",
            boxShadow: "0 0 0 0 #7beec7"
        });
    };

    return(
        <button style={
            Styles.categoriesMobileButton
        } onPointerEnter={enter} onPointerLeave={leave} onClick={
            () => props.setClick(props.click === null ? true : !props.click)
        }>
            {props.click === null || props.click === false ? "Show categories" : "Hide categories"}
        </button>
    )
}

function CategoriesMobile(props) {

    const categoryRef = useRef(null);

    useEffect(() => {
        const category = categoryRef.current, categoryChildren = category.children;

        let intervalCount = 1;

        Functions.changeStyleElem(category, {
            maxWidth: `${globalThis.mobilePortfolioSlider}px`
        });

        if (props.click === true) {
            Functions.changeStyleElem(category, {
                height: "2432px",
                width: `${globalThis.mobilePortfolioSliderWidth}px`,
                transform: "scale3d(1, 1, 1)",
                opacity: "1"
            });

            for (let i = 0; i < categoryChildren.length; i++) {
                const child = categoryChildren[i];
                setTimeout(() => {
                    Functions.changeStyleElem(child, {
                        transform: "translateX(0px)",
                        opacity: "1"
                    });
                }, 250 * intervalCount);

                intervalCount++;
            }
        } else {
            Functions.changeStyleElem(category, {
                height: `0px`,
                width: `0px`,
                transform: "scale3d(0, 0, 1)",
                opacity: "0"
            });

            for (let i = 0; i < categoryChildren.length; i++) {
                const child = categoryChildren[i];
                setTimeout(() => {
                    Functions.changeStyleElem(child, {
                        transform: "translateX(-10px)",
                        opacity: "0"
                    });
                }, 250);
            }
        }
    });

    return(
        <div className="categories" id="categories" style={
            Styles.mainOurPortfolioMainMobileStylesCategory
        } ref={categoryRef}
        >
            <Functions.Img isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"]} src={Layer_5} alt="Layer_5" style={{
                margin: 0,
                transition: ".5s ease-out",
                opacity: 0,
                transform: "translateX(-10px)"
            }}/>
            <Functions.Img isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "logo design"]} src={Layer_6} alt="Layer_6" style={{
                margin: "10px 0 0 0",
                transition: ".5s ease-out",
                opacity: 0,
                transform: "translateX(-10px)"
            }}/>
            <Functions.Img isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"]} src={Layer_7} alt="Layer_7" style={{
                margin: "10px 0 0 0",
                transition: ".5s ease-out",
                opacity: 0,
                transform: "translateX(-10px)"
            }}/>
            <Functions.Img isCanBeDownload={true} category={["All", "webdesign", "graphic design", "logo design"]} src={Layer_8} alt="Layer_8" style={{
                margin: "10px 0 0 0",
                transition: ".5s ease-out",
                opacity: 0,
                transform: "translateX(-10px)"
            }}/>
            <Functions.Img isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"]} src={Layer_9} alt="Layer_9" style={{
                margin: "10px 0 0 0",
                transition: ".5s ease-out",
                opacity: 0,
                transform: "translateX(-10px)"
            }}/>
            <Functions.Img isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "advertising"]} src={Layer_10} alt="Layer_10" style={{
                margin: "10px 0 0 0",
                transition: ".5s ease-out",
                opacity: 0,
                transform: "translateX(-10px)"
            }}/>
            <Functions.Img isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"]} src={Layer_11} alt="Layer_11" style={{
                margin: "10px 0 0 0",
                transition: ".5s ease-out",
                opacity: 0,
                transform: "translateX(-10px)"
            }}/>
            <Functions.Img isCanBeDownload={true} category={["All", "logo design", "advertising"]} src={Layer_14} alt="Layer_13" style={{
                margin: "10px 0 0 0",
                transition: ".5s ease-out",
                opacity: 0,
                transform: "translateX(-10px)"
            }}/>
            <Functions.Img isCanBeDownload={true} category={["All", "graphic design", "fashion", "advertising"]} src={Layer_13} alt="Layer_14" style={{
                margin: "10px 0 0 0",
                transition: ".5s ease-out",
                opacity: 0,
                transform: "translateX(-10px)"
            }}/>            
        </div>
    )
}

/* ------- */

function ChooseCategory(props) {
    return(
        <div className="chooseCategory" style={Styles.chooseCategoryStyles}>
            <ChooseCategoryTitle/>
            <ChooseCategoryList category={props.category} setCategoty={props.setCategoty}/>
        </div>
    )
}

function ChooseCategoryTitle() {
    return(
        <h2 style={Styles.chooseCategoryH2Styles}>choose category</h2>
    )
}

function ChooseCategoryList(props) {
    const items = ["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"];

    const firstLiRef = useRef(null);

    const pointerDown = (e) => {
        props.setCategoty(e.currentTarget.textContent);
    };

    /* Функция для изменения отступа верхнего <li/>, в зависимости от состояния*/

    const forFirstLiFunction = (elem) => {
        Functions.changeStyleElem(elem, {
            margin: elem.textContent === props.category ? "0 0 0 -19px" : 0
        });
    };

    /* Процесс инициализации верхней функции */

    useEffect(() => {
        forFirstLiFunction(firstLiRef.current);
    });

    return(
        <ul style={Styles.chooseCategoryUlStyles}>
            {items.map((item, index) => {
                return <li ref={index === 0 ? firstLiRef : null} key={index} style={
                    props.category === item ? Object.assign(Functions.cloneObject(Styles.CategoryUlItemStyles), Functions.cloneObject(Styles.CategoryUlItemActiveStyles)) : 
                    Styles.CategoryUlItemStyles
                } onPointerDown={pointerDown}>{item}</li>
            })}
        </ul>
    )
}

function Categories(props) {

    const categoryRef = useRef(null);

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        const categoryItems = categoryRef.current.children;

        /* Обнуление свойства для проверки: это ли верхний ряд */

        globalThis.wasFirstLine = false;

        for (let i = 0; i < categoryItems.length; i++) {
            if (categoryItems[i].dataset.category.includes(props.category)) {

                /* Показываем элемент */

                Functions.showElem(categoryItems[i], i);

                /* Устанавливает data-order и order (css) */

                categoryItems[i].dataset.order = globalThis.order;
                categoryItems[i].style.order = globalThis.order;

                /* Провека местоположения элементов для изменения их margin */

                if (globalThis.wasFirstLine) {

                    if (categoryItems[i].dataset.order != 1) {
                        Functions.changeStyleElem(categoryItems[i], {
                            margin: "25px 0 0 25px"
                        });
                    } else {
                        Functions.changeStyleElem(categoryItems[i], {
                            margin: "25px 0 0 0"
                        });
                    }

                } else {

                    if (categoryItems[i].dataset.order != 1) {
                        Functions.changeStyleElem(categoryItems[i], {
                            margin: "0 0 0 25px"
                        });
                    } else {
                        Functions.changeStyleElem(categoryItems[i], {
                            margin: "0px"
                        });
                    }

                }

                /* Проверяем order для определения местоположения (globalThis.wasFirstLine) */

                if (globalThis.order === 3) {
                    globalThis.order = 1;
                    globalThis.wasFirstLine = true;
                } else {
                    globalThis.order++;
                }
            } else {

                /* Прячем элемент */

                Functions.hideElem(categoryItems[i]);
            }
        };

        /* Обнуляем свойство order (отвечающее за очередь) */

        globalThis.order = 1;

    }, [props.category]);

    return(
        <div className="categories" style={
            Object.assign(
                Functions.cloneObject(Styles.categories),
                nowWidthWindow === "tablet" ? Styles.categoriesTablet :
                nowWidthWindow === "computerNormalScreen"
                && document.documentElement.clientWidth < 1190 ? Styles.categoriesMedium : {}
            )
        } ref={categoryRef}>
            <Functions.Img order={1} isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"]} src={Layer_5} alt="Layer_5" style={
                Object.assign(Functions.cloneObject(Styles.topLeftItemCategory), {
                    order: 1
                })
            }/>
            <Functions.Img order={2} isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "logo design"]} src={Layer_6} alt="Layer_6" style={
                Object.assign(Functions.cloneObject(Styles.topItemCategory), {
                    order: 2
                })}/>
            <Functions.Img order={3} isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"]} src={Layer_7} alt="Layer_7" style={
                Object.assign(Functions.cloneObject(Styles.topItemCategory), {
                    order: 3
                })
            }/>
            <Functions.Img order={1} isCanBeDownload={true} category={["All", "webdesign", "graphic design", "logo design"]} src={Layer_8} alt="Layer_8" style={
                Object.assign(Functions.cloneObject(Styles.leftItemCategory), {
                    order: 1
                })
            }/>
            <Functions.Img order={2} isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"]} src={Layer_9} alt="Layer_9" style={
                Object.assign(Functions.cloneObject(Styles.itemCategory), {
                    order: 2
                })
            }/>
            <Functions.Img order={3} isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "advertising"]} src={Layer_10} alt="Layer_10" style={
                Object.assign(Functions.cloneObject(Styles.itemCategory), {
                    order: 3
                })
            }/>
            <Functions.Img order={1} isCanBeDownload={true} category={["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"]} src={Layer_11} alt="Layer_11" style={
                Object.assign(Functions.cloneObject(Styles.leftItemCategory), {
                    order: 1
                })
            }/>
            <Functions.Img order={2} isCanBeDownload={true} category={["All", "logo design", "advertising"]} src={Layer_14} alt="Layer_13" style={
                Object.assign(Functions.cloneObject(Styles.itemCategory), {
                    order: 2
                })
            }/>
            <Functions.Img order={3} isCanBeDownload={true} category={["All", "graphic design", "fashion", "advertising"]} src={Layer_13} alt="Layer_14" style={
                Object.assign(Functions.cloneObject(Styles.itemCategory), {
                    order: 3
                })
            }/>            
        </div>
    )
}