import React, {useState, useEffect, useRef, useContext, CSSProperties, memo} from "react";
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

    const headerRef = useRef<HTMLElement>(null), forwardHeaderRef = useRef<HTMLDivElement>(null);

    const [wasClick, setWasClick] = useState(false);

    useEffect(() => {
        const header = headerRef.current as HTMLElement,
        textOfHeader = document.querySelector(".header_forward__body___main____description > p") as HTMLParagraphElement;

        if (down && nowWidthWindow !== "mobileScreen") {
            Functions.changeStyleElem(header, {
                height: `${header.clientHeight + textOfHeader.clientHeight}px`
            });
        } 
        if (down === false && nowWidthWindow !== "mobileScreen") {
            Functions.changeStyleElem(header, {
                height: `${header.clientHeight - (textOfHeader.clientHeight - 16) / 2}px` /* "850px" */
            });
        }
    }, [down]);

    useEffect(() => {
        const header = headerRef.current as HTMLElement;
        if (nowWidthWindow === "mobileScreen") {
            Functions.changeStyleElem(header, {
                height: "auto"
            });
        }
    }, [nowWidthWindow]);

    return(
        <header ref={headerRef} style={Object.assign(Functions.cloneObject(Styles.HeaderStyle), {
            backgroundImage: `url(${Layer_1})`,
            backgroundAttachment: "scroll"
        })}>
            <div className="header_forward" ref={forwardHeaderRef} style={
                Functions.cloneObject(
                    Styles.HeaderForwardStyle
                )
            }>
                <HeaderForwardHead wasClick={wasClick} setWasClick={setWasClick}/>
                <MobileAndTabletNavVersion wasClick={wasClick}/>
                <HeaderForwardBody/>
            </div>
        </header>
    )
}

function HeaderForwardHead(props: { wasClick: any; setWasClick: any; }) {

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
        <h1 style={
            Functions.cloneObject(
                Styles.Akad
            )
        }>akad.</h1>
    )
}

function HeaderHeadList(props: { wasClick: any; }) {

    const listRef = useRef<HTMLUListElement>(null);

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        const listElem = listRef.current;

        if (props.wasClick && listElem) {
            Functions.changeStyleElem(listElem, {
                transform: "scaleX(1)"
            });
        } else if (!props.wasClick && listElem) {
            Functions.changeStyleElem(listElem, {
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

function HeaderHeadButton({wasClick, setWasClick}: { wasClick: boolean; setWasClick: (arg0: boolean) => void; }) {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        if (nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet") {
            setWasClick(false);
        }
    }, [nowWidthWindow]);

    useEffect(() => {

        const buttonElem = buttonRef.current;

        if (wasClick && buttonElem) {
            const collectionOfLines = buttonElem.children as HTMLCollectionOf<HTMLElement>

            Functions.changeStyleElem(collectionOfLines[0], {
                top: "7px",
                width: "23px",
                transform: "rotate(45deg)"
            });
            Functions.changeStyleElem(collectionOfLines[1], {
                opacity: 0
            });
            Functions.changeStyleElem(collectionOfLines[2], {
                top: "7px",
                transform: "rotate(-45deg)"
            });

        } else if (wasClick === false && buttonElem) {
            const collectionOfLines = buttonElem.children as HTMLCollectionOf<HTMLElement>

            Functions.changeStyleElem(collectionOfLines[0], {
                top: 0,
                width: "31px",
                transform: "rotate(0)"
            });
            Functions.changeStyleElem(collectionOfLines[1], {
                opacity: 1
            });
            Functions.changeStyleElem(collectionOfLines[2], {
                top: "14px",
                transform: "rotate(0)"
            });
        }
    }, [wasClick]);

    const focus = (e: { currentTarget: any; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            outline: "none"
        });
    };

    const click = () => {
        setWasClick(!wasClick);
    };

    return(
        <button style={Object.assign(Functions.cloneObject(Styles.HeaderHeadButton),
            nowWidthWindow === "mobileScreen" ? Styles.HeaderHeadButtonMobile : {})} onFocus={focus} onClick={click}
            ref={buttonRef}>
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
        <div className="header_forward__body" style={
            Functions.cloneObject(
                Styles.headerForwardBody
            )
        }>
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
            <h4 style={
                Functions.cloneObject(
                    Styles.weRe
                )
            }>we’re</h4>
            <h3 style={
                Object.assign(Functions.cloneObject(Styles.shape5),
                nowWidthWindow === "mobileScreen" ? Styles.shape5Mobile :
                nowWidthWindow === "tablet" ? Styles.shape5Table : {})
            }>creative agency</h3>
            <p style={
                Functions.cloneObject(
                    Styles.loremIpsum
                )
            }>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
            <Functions.Img src={Layer_4} alt="Layer_4" isCanBeDownload={true} className="header_forward__body___main____img" style={
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

    const refTextOfHeader = useRef<HTMLParagraphElement>(null);
    const {down, setDown} = useContext(Contexts.HeaderContext);
    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        const textOfHeader = refTextOfHeader.current;
        if (down && textOfHeader) {
            Functions.changeStyleElem(textOfHeader, {
                height: `${textOfHeader.clientHeight * 2 + 16}px`,
                maxHeight: `${textOfHeader.clientHeight * 2 + 16}px`
            });
        }
        if (down === false && textOfHeader) {
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

function HeaderForwardBodyMainButton(props: { setDown: (arg0: boolean) => void; down: boolean | null; }) {

    const refButton = useRef(null);

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const focus = (e: { currentTarget: any; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            outline: "none"
        });
    };

    const enter = (e: { currentTarget: any; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            transition: ".35s ease-out",
            backgroundColor: "#ffffff",
            color: "#7beec7",
            boxShadow: "0 0 0 3px #7beec7"
        });
    };

    const leave = (e: { currentTarget: any; }) => {
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
        <main style={
            Functions.cloneObject(
                Styles.main
            )
        }>
            <WhyCooseUs/>
            <OurPortfolio/>
            <GlobalPreFooter/>
        </main>
    )
}

function WhyCooseUs() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_whyChooseUs" style={
            Functions.cloneObject(
                Styles.whyChooseUsStyle
            )
        }>
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
            nowWidthWindow === "mobileScreen" ? Styles.whyChooseUsMainListsStyleMobile as CSSProperties :
            nowWidthWindow === "tablet" ? Styles.whyChooseUsMainListsStyleTablet : {})
        }>
            <WhyChooseUsMainListsItem src={infinity} alt="infiniry" className="main_lists__item"
            h3="unlimited options" styleForH3={{
                margin: "26px 0 0 0"
            }} list={["Branding", "Design & Copywriting", "Concept development", "User Experience"]} styleForListsItem={
                nowWidthWindow === "mobileScreen" ? {margin: "0px"} :
                nowWidthWindow === "tablet" ? {margin: "0px"} : {margin: "27px 0px 0px 0px"}
            }/>

            <WhyChooseUsMainListsItem src={arrows} alt="arrows" className="main_lists__item"
            h3="DESIGN & DEVELOPMENT" styleForH3={{
                margin: "19px 0 0 0"
            }} list={["Information architecture", "Interface design", "Product Design", "Integrated ad Companies"]} styleForListsItem={
                nowWidthWindow === "mobileScreen" ? {margin: "20px 0px 0px 0px"} :
                nowWidthWindow === "tablet" ? {margin: "0px"} : {margin: "20px 0px 0px 132px"}
            }/>

            <WhyChooseUsMainListsItem src={buy} alt="buy" className="main_lists__item"
            h3="e-commerce" styleForH3={{
                margin: "19px 0 0 0"
            }} list={["Prototyping", "Technical Consulting", "Web applications", "Quality testing"]} styleForListsItem={
                nowWidthWindow === "mobileScreen" ? {margin: "20px 0px 0px 0px"} :
                nowWidthWindow === "tablet" ? {margin: "0px"} : {margin: "67px 0 0 0"}
            }/>

            <WhyChooseUsMainListsItem src={options} alt="options" className="main_lists__item"
            h3=" CUSTOMIZABLE DESIGN" styleForH3={{
                margin: "21px 0 0 0"
            }} list={["Information architecture", "Interface design", "Product Design", "Integrated ad Companies"]} styleForListsItem={
                nowWidthWindow === "mobileScreen" ? {margin: "20px 0px 0px 0px"} :
                nowWidthWindow === "tablet" ? {margin: "0px"} : {margin: "63px 0px 0px 160px"}
            }/>
        </div>
    )
}

function WhyChooseUsMainListsItem(props: { styleForListsItem: any; src: any; alt: any; className: any; styleForH3: any; h3: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; list: string[]; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const enter = (e: { currentTarget: any; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            color: "#60606e"
        });
    };

    const leave = (e: { currentTarget: any; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            color: '#999999',
        });
    };

    return(
        <div className="lists_item" style={Object.assign(Functions.cloneObject(Styles.whyChooseUsMainListsItemStyle), 
            nowWidthWindow === "mobileScreen" ?
            Object.assign(
                Styles.whyChooseUsMainListsItemStyleMobile,
                props.styleForListsItem
                ) :
                props.styleForListsItem
        )}>
            <Functions.Img src={props.src} alt={props.alt} className={props.className}/>
            <h3 style={Object.assign(Functions.cloneObject(Styles.unlimitedOptions), {
                ...props.styleForH3
            })}>{props.h3}</h3>
            <ul style={Styles.ListsItemUlStyle}>
                {props.list.map((item: string, index: number) => {
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
        <div className="main_ourPortfolio" style={
            Functions.cloneObject(
                Styles.mainOurPortfolio
            )
        }>
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
            {nowWidthWindow === "mobileScreen" ? <OurPortfolioMainMobile/> : <OurPortfolioMain/>}
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
                nowWidthWindow === "tablet" ? Styles.mainOurPortfolioMainStylesTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.mainOurPortfolioMainStylesMedium : {}
            )
        }>
            <ChooseCategory category={category} setCategoty={setCategoty}/>
            <Categories category={category}/>
        </div>
    )
}

function ChooseCategory(props: { category: any; setCategoty: any; }) {
    return(
        <div className="chooseCategory" style={
            Functions.cloneObject(
                Styles.chooseCategoryStyles
            )
        }>
            <ChooseCategoryTitle/>
            <ChooseCategoryList category={props.category} setCategoty={props.setCategoty}/>
        </div>
    )
}

function ChooseCategoryTitle() {
    return(
        <h2 style={
            Functions.cloneObject(
                Styles.chooseCategoryH2Styles
            )
        }>choose category</h2>
    )
}

function ChooseCategoryList(props: { setCategoty: (arg0: any) => void; category: string; }) {
    const items = ["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"];

    const firstLiRef = useRef<HTMLLIElement>(null);

    const pointerDown = (e: { currentTarget: { textContent: any; }; }) => {
        props.setCategoty(e.currentTarget.textContent);
    };

    /* Функция для изменения отступа верхнего <li/>, в зависимости от состояния*/

    const forFirstLiFunction = (elem: HTMLElement) => {
        Functions.changeStyleElem(elem, {
            margin: elem.textContent === props.category ? "0 0 0 -19px" : 0
        });
    };

    /* Процесс инициализации верхней функции */

    useEffect(() => {
        firstLiRef.current ? forFirstLiFunction(firstLiRef.current) : undefined;
    });

    return(
        <ul style={Functions.cloneObject(
            Styles.chooseCategoryUlStyles
        )}>
            {items.map((item, index) => {
                return <li ref={index === 0 ? firstLiRef : null} key={index} style={
                    props.category === item ? Object.assign(Functions.cloneObject(Styles.CategoryUlItemStyles), Styles.CategoryUlItemActiveStyles) as CSSProperties : 
                    Styles.CategoryUlItemStyles
                } onPointerDown={pointerDown}>
                    {item}
                </li>
            })}
        </ul>
    )
}

function Categories({category}: { category: string; }) {

    const categoryRef = useRef<HTMLDivElement>(null);
    const {nowWidthWindow} = useContext(Contexts.MediaContext);
    const arrayOfImages = [Layer_5, Layer_8, Layer_11, Layer_6, Layer_9, Layer_14, Layer_7, Layer_10, Layer_13];
    const arrayOfCategories = [
        ["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"],
        ["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"],
        ["All", "webdesign", "advertising"],
        ["All", "webdesign", "graphic design", "logo design", "advertising"],
        ["All", "webdesign", "advertising"],
        ["All", "webdesign", "graphic design", "fashion", "advertising"],
        ["All", "webdesign", "graphic design", "fashion", "logo design", "advertising"],
        ["All", "logo design", "advertising"],
        ["All", "graphic design", "fashion", "advertising"]
    ];
    let indexLet = -1;

    useEffect(() => {
        const cateroryElement = categoryRef.current as HTMLDivElement;
        Functions.changeFlexGapToMargin(cateroryElement, {
            gap: 0
        });

        return () => {
            Functions.changeFlexGapToMargin(cateroryElement, {
                gap: "30px"
            });
        }
    }, []);

    useEffect(() => {
        const styleTag = document.querySelector("style");
        if (styleTag) {
            styleTag.append(`
            .categories::-webkit-scrollbar {
                background-color: #60606e;
                width: 5px;
                height: 2px;
            }

            .categories::-webkit-scrollbar-button {
                display: none;
            }

            .categories::-webkit-scrollbar-thumb {
                background-color: #7beec7;
                border-radius: 5px;
                height: 5px;
            }

            .categories::-webkit-scrollbar-thumb:hover {
                background-color: #d2f9ec;
            }
            `);
        }
    }, []);

    return(
        <div className="categories" style={
            Object.assign(
                Functions.cloneObject(Styles.categories),
                nowWidthWindow === "tablet" ? Styles.categoriesTablet :
                nowWidthWindow === "computerNormalScreen"
                && document.documentElement.clientWidth < 1190 ? Styles.categoriesMedium : {}
            )
        } ref={categoryRef}>
            {
                arrayOfImages.map((item, index) => {
                    if (arrayOfCategories[index].includes(category)) {
                        indexLet += 1;
                        return(
                            <ImageOfCategoryMemoized key={index} index={indexLet} isCanBeDownload={true} category={category} arrayOfCategories={arrayOfCategories[index]} src={item} alt="category_image"
                            style={Styles.itemCategory} />
                        )
                    } else {
                        return(
                            <ImageOfCategoryMemoized key={index} index={index} isCanBeDownload={true} category={category} arrayOfCategories={arrayOfCategories[index]} src={item} alt="category_image"
                            style={Styles.itemCategory} />
                        )
                    }
                })
            }         
        </div>
    )
}

const ImageOfCategoryMemoized = memo(ImageOfCategory);

function ImageOfCategory(
    {isCanBeDownload, category, src, alt, style, arrayOfCategories, click, index}:
    {isCanBeDownload: boolean, category?: string, src: string, alt: string, style: CSSProperties, arrayOfCategories?: string[], click?: boolean | null; index?: number}
) {
    const imageRef = useRef<HTMLImageElement>(null);
    const [sizeOfImage, setSizeOfImage] = useState<{height: string; width: string}>(
        {
            height: "",
            width: ""
        }
    );

    useEffect(() => {
        if ( !(sizeOfImage.height && sizeOfImage.width) ) {
            const image = imageRef.current as HTMLImageElement;
            setSizeOfImage(
                {
                    height: `${image.clientHeight}px`,
                    width: `${image.clientWidth}px`
                }
            );
            Functions.changeStyleElem(image, {
                height: "0px",
                width: "0px"
            });
        }
    }, []);

    useEffect(() => {
        const image = imageRef.current as HTMLImageElement;
        if (arrayOfCategories) {
            const isIncludes = arrayOfCategories.includes(category as string);
            Functions.changeStyleElem(image, {
                height: isIncludes ? sizeOfImage.height : "0px",
                width: isIncludes ? sizeOfImage.width : "0px"
            });
        }
        if (click) {
            Functions.changeStyleElem(image, {
                height: "auto",
                width: "100%"
            });
        }
        if (click === false) {
            Functions.changeStyleElem(image, {
                height: "0px",
                width: "0px"
            });
        }
    }, [category, sizeOfImage, arrayOfCategories, click]);

    useEffect(() => {
        const imageOfCategory = imageRef.current as HTMLImageElement;
        if (category && index) {
            if (+index === 0) {
                Functions.changeFlexGapToMargin(imageOfCategory, {
                    margin: 0
                });
            }
            if (+index < 3 && +index > 0) {
                Functions.changeFlexGapToMargin(imageOfCategory, {
                    margin: "30px 0 0 0"
                });
            }
            if (+index === 3 || +index === 6) {
                Functions.changeFlexGapToMargin(imageOfCategory, {
                    margin: "0 0 0 30px"
                });
            }
            if ( (+index > 3 && +index < 6) || (+index > 6 && +index <= 8) ) {
                Functions.changeFlexGapToMargin(imageOfCategory, {
                    margin: "30px 0 0 30px"
                });
            }
        }
    }, [category, index]);

    return(
        <Functions.Img ref={imageRef} isCanBeDownload={isCanBeDownload} src={src} alt={alt} style={style} />
    )
}

function OurPortfolioMainMobile() {

    const [click, setClick] = useState<null | boolean>(null);

    return(
        <div className="main_ourPortfolio__mainMobile" style={Styles.mainOurPortfolioMainMobileStyles}>
            <CategoriesMobileButton setClick={setClick} click={click}/>
            <CategoriesMobile click={click}/>
        </div>
    )
}

function CategoriesMobileButton(props: { setClick: (arg0: boolean) => void; click: boolean | null; }) {

    const enter = (e: { currentTarget: any; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            transition: ".35s ease-out",
            backgroundColor: "#ffffff",
            color: "#7beec7",
            boxShadow: "0 0 0 3px #7beec7"
        });
    };

    const leave = (e: { currentTarget: any; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            transition: ".35s ease-in",
            backgroundColor: "#7beec7",
            color: "#ffffff",
            boxShadow: "0 0 0 0 #7beec7"
        });
    };

    return(
        <button style={
            Functions.cloneObject(
                Styles.categoriesMobileButton
            )
        } onPointerEnter={enter} onPointerLeave={leave} onClick={
            () => props.setClick(props.click === null ? true : !props.click)
        }>
            {props.click === null || props.click === false ? "Show categories" : "Hide categories"}
        </button>
    )
}

function CategoriesMobile({click}: { click: boolean | null; }) {
    const categoryRef = useRef<HTMLDivElement>(null);
    const arrayOfImages = [Layer_5, Layer_6, Layer_7, Layer_8, Layer_9, Layer_10, Layer_11, Layer_14, Layer_13];

    useEffect(() => {
        const category = categoryRef.current as HTMLDivElement;
        const childrenOfCategory = category.children as HTMLCollectionOf<HTMLImageElement>;

        Functions.changeStyleElem(category, {
            gap: 0
        });
        Functions.changeFlexGapToMargin(childrenOfCategory, {
            margin: "10px 0 0 0",
        }, true);

        return () => {
            Functions.changeStyleElem(category, {
                gap: "10px"
            });
            Functions.changeFlexGapToMargin(childrenOfCategory, {
                margin: 0,
            }, true);
        }
    }, []);

    useEffect(() => {
        const category = categoryRef.current as HTMLDivElement;
        if (click) {
            Functions.changeStyleElem(category, {
                height: "auto",
                margin: "20px 0 0 0"
            });
        }
        if (click === false) {
            Functions.changeStyleElem(category, {
                height: "0px",
                margin: "0px"
            });
        }
    }, [click]);

    return(
        <div className="categories_mobile" id="categories" style={
            Functions.cloneObject(
                Styles.mainOurPortfolioMainMobileStylesCategory
            )
        } ref={categoryRef}
        >
            {
                arrayOfImages.map((item, index) => (
                    <ImageOfCategoryMemoized click={click} isCanBeDownload={true} key={index} src={item} alt="category_image" style={
                        Object.assign(
                            Functions.cloneObject(
                                Styles.itemCategory
                            )
                        )
                    } />
                ))
            }
        </div>
    )
}