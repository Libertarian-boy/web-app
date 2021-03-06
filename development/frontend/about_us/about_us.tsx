import React, {useEffect, useState, useRef, useContext, PointerEventHandler, Dispatch, SetStateAction} from "react";

import * as Functions from "../globalThings/functions";
import * as Styles from "./styles";
import * as AboutUsPresets from "./about_us__presets";
import * as Contexts from "../globalThings/context";

import GlobalHeader from "../globalThings/GlobalHeader";
import GlobalPreFooter from "../globalThings/GlobalPrefooter";
import GlobalFooter from "../globalThings/GlobalFooter";
import GlobalChangeLocationOn from "../globalThings/GlobalChangeLocationOn";

import Phone from "./images/Phone.png";
import Infin from "./images/Infinity.png";
import Wordpress from "./images/Wordpress.png";
import Download from "./images/Download.png";
import Options from "./images/Options.png";
import Support from "./images/Support.png";

import Person_1 from "./images/Person_1.png";
import Person_2 from "./images/Person_2.png";
import Person_3 from "./images/Person_3.png";
import Person_4 from "./images/Person_4.png";
import Person_5 from "./images/Person_5.png";
import Person_6 from "./images/Person_6.png";
import Person_7 from "./images/Person_7.png";
import Person_8 from "./images/Person_8.png";
import Circle_man from "./images/circle_man.png";
import logo_1 from "./images/logo_1.png";
import logo_2 from "./images/logo_2.png";
import logo_3 from "./images/logo_3.png";
import logo_4 from "./images/logo_4.png";
import logo_5 from "./images/logo_5.png";
import logo_6 from "./images/logo_6.png";

export default function AboutUs() {

    return(
        <React.Fragment>
            {/* Для установки стилей для body и root */}
            <AboutUsPresets.BodyAndRootStyles/>
            {/* Проверка и изменения при изменении ориентации экрана*/}
            <AboutUsPresets.OrientationChange/>
            {/* Проверка и изменения при изменении размера экрана */}
            <AboutUsPresets.Resize/>
            {/* Для анимации появления header, main, footer */}
            <GlobalChangeLocationOn/>
            <GlobalHeader h1="akad." h2="about us" p="home / about"/>
            <Main/>
            <GlobalFooter/>
        </React.Fragment>
    )
}

function Main() {
    return(
        <main style={
            Functions.cloneObject(
                Styles.main
            )
        }>
            <Information/>
            <SomeBenefits/>
            <TheDreamTeam/>
            <GlobalPreFooter/>
        </main>
    )
}

function Information() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_information" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_information
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_informationMobile :
                nowWidthWindow === "tablet" ? Styles.main_informationTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_informationNormalScreen : {}
            )
        }>
            <Inf h2="about us" h3="We are awesome" second={false}/>
            <Inf h2="What We Do" h3="Creative & Digital" second={true}/>
        </div>
    )
}

function Inf(props: { second: any; h2: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; h3: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_information__inf" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_information__inf
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_information__infMobile :
                nowWidthWindow === "tablet" ? Styles.main_information__infTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_information__infNormalScreen : {},
                props.second ? nowWidthWindow === "mobileScreen" ? Styles.main_information__inf___2Mobile :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_information__inf___2NormalScreen :
                Styles.main_information__inf___2 : {}
            )
        }>
            <h2 style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.h2
                    ),
                    nowWidthWindow === "tablet" ? Styles.h2Tablet : {}
                )
            }>
                {props.h2}
                <div className="inf_h2__block" style={
                    Object.assign(
                        Functions.cloneObject(
                            Styles.inf_h2__block
                        ),
                        nowWidthWindow === "tablet" ? Styles.inf_h2__blockTablet : {}
                    )
                }></div>
            </h2>
            <h3 style={
                Functions.cloneObject(
                    Styles.h3
                )
            }>
                {props.h3}
            </h3>
            <p style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.p
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.pMobile :
                    nowWidthWindow === "tablet" ? Styles.pTablet : {}
                )
            }>
                Lorem ipsum dolor sit amet, Conctetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud упражнение ullamcorper Suscipit lobortis nisl ut aliquip ex ea Commodo Concquat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consquat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.
            </p>
        </div>
    )
}

function SomeBenefits() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_someBenefits" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_someBenefits
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_someBenefitsMobile :
                nowWidthWindow === "tablet" ? Styles.main_someBenefitsTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_someBenefitsNormalScreen : {}
            )
        }>
            <Functions.TitleText title="some benefits"
            otherStylesTitle={
                Object.assign(
                    {
                        margin: 0
                    },
                    nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? Styles.someBenefits_titleMobileAndTablet : {}
                )
            }
            titleStylePOthers={
                Styles.titleStylePOthers
            }
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <SomeBenefitsMain/>
        </div>
    )
};

function SomeBenefitsMain() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_someBenefits__main" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_someBenefits__main
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_someBenefits__mainMobile :
                nowWidthWindow === "tablet" ? Styles.main_someBenefits__mainTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_someBenefits__mainNormalScreen : {}
            )
        }>
            <Benefit src={Phone} nameItem="FULLY RESPONSIVE" down={false}/>
            <Benefit src={Infin} nameItem="UNLIMITED OPTIONS" down={false}/>
            <Benefit src={Wordpress} nameItem="WORDPRESS" down={false}/>
            <Benefit src={Download} nameItem="e-commerce" down={nowWidthWindow === "tablet" || nowWidthWindow === "computerNormalScreen" ? false : true}/>
            <Benefit src={Options} nameItem="CUSTOMIZABLE DESIGN" down={nowWidthWindow === "tablet" || nowWidthWindow === "computerNormalScreen" ? false : true}/>
            <Benefit src={Support} nameItem="SUPPORT" down={nowWidthWindow === "tablet" || nowWidthWindow === "computerNormalScreen" ? false : true}/>
        </div>
    )
}

function Benefit(props: { down: any; src: any; nameItem: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="someBenefits_main__item" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.someBenefits_main__item
                ),
                nowWidthWindow === "mobileScreen" ? Styles.someBenefits_main__itemMobile :
                nowWidthWindow === "tablet" ? Styles.someBenefits_main__itemTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.someBenefits_main__itemNormalScreen : {},
                props.down ? nowWidthWindow === "mobileScreen" ? Styles.someBenefits_main__item___downMobile :
                Styles.someBenefits_main__item___down : {}
            )
        }>
            <div className="item_head" style={
                Functions.cloneObject(
                    Styles.item_head
                )
            }>
                <div className="item_head__block" style={
                    Functions.cloneObject(
                        Styles.item_head__block
                    )
                }>
                    <Functions.Img src={props.src} alt="pict" className="someBenefits_main__item___image"/>
                </div>
                <h4 style={
                    Object.assign(
                        Functions.cloneObject(
                            Styles.h4
                        ),
                        nowWidthWindow === "mobileScreen" ? Styles.h4Mobile : {}
                    )
                }>
                    {props.nameItem}
                </h4>
            </div>
            <p style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.benefit_p
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.benefit_pMobile :
                    nowWidthWindow === "tablet" ? Styles.benefit_pTablet : {}
                )
            }>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae.
            </p>
        </div>
    )
}

function TheDreamTeam() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_theDreamTeam" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_theDreamTeam
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_theDreamTeamMobile :
                nowWidthWindow === "tablet" ? Styles.main_theDreamTeamTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_theDreamTeamNormalScreen : {}
            )
        }>
            <Functions.TitleText title="THE DREAM TEAM"
            otherStylesTitle={
                Object.assign(
                    {
                        margin: 0
                    },
                    nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? Styles.someBenefits_titleMobileAndTablet : {}
                )
            }
            titleStylePOthers={
                Styles.titleStylePOthers
            }
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TheDreamTeamMain/>
            <GrayBlock/>
            <MainTheDreamTeamDown/>
        </div>
    )
}

function TheDreamTeamMain() {

    const [scrollWidth, setScrollWidth] = useState(11);
    const [numberOfTeamMobile, setNumberOfTeamMobile] = useState<undefined | number>(undefined);
    const teamConteinerRef = useRef(null);
    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        const styleElem = document.querySelector("style");
        if (styleElem) {
            styleElem.append(`
                .main_theDreamTeam__main::-webkit-scrollbar {
                    width: 0px;
                    background: transparent;
                }
                .main_theDreamTeam__main {
                    -ms-overflow-style: none;
                    scrollbar-width: 0px
                }
        `);
        }
    }, []);

    const scroll = (e: { currentTarget: any; }) => {
        const elem = e.currentTarget;
        setScrollWidth(
            Math.ceil(elem.scrollLeft * 100 / elem.scrollWidth) + 11
        );
    };

    const pointerUp = (e: { currentTarget: any; }) => {
        const elem = e.currentTarget;

        elem.animate([{
            scrollleft: elem.scrollLeft
        }, {
            screenLeft: 55
        }], {
            duration: 500,
            easing: "ease-in",
            fill: "forwards"
        });
    };

    return(
        <React.Fragment>
            <div className="main_theDreamTeam__main" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_theDreamTeam__main
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_theDreamTeam__mainMobile :
                nowWidthWindow === "tablet" ? Styles.main_theDreamTeam__mainTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_theDreamTeam__mainNormalScreen : {}
            )
        } ref={teamConteinerRef} onScroll={scroll} onPointerUp={pointerUp}>
            <TheDreamTeamMainItem src={Person_1} person="Person_1" down={false} numberOfTeamMobile={numberOfTeamMobile} 
            mobileAndTabletOrder={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 1 : undefined}
            setNumberOfTeamMobile={setNumberOfTeamMobile} />
            <TheDreamTeamMainItem src={Person_2} person="Person_2" down={false} numberOfTeamMobile={numberOfTeamMobile} 
            mobileAndTabletOrder={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 2 : undefined}
            setNumberOfTeamMobile={setNumberOfTeamMobile} />
            <TheDreamTeamMainItem src={Person_3} person="Person_3" down={false} numberOfTeamMobile={numberOfTeamMobile}
            mobileAndTabletOrder={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 3 : undefined}
            setNumberOfTeamMobile={setNumberOfTeamMobile} />
            <TheDreamTeamMainItem src={Person_4} person="Person_4" down={false} numberOfTeamMobile={numberOfTeamMobile} 
            mobileAndTabletOrder={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 4 : undefined}
            setNumberOfTeamMobile={setNumberOfTeamMobile} />
            <TheDreamTeamMainItem src={Person_5} person="Person_5" numberOfTeamMobile={numberOfTeamMobile} 
            mobileAndTabletOrder={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 5 : undefined}
            setNumberOfTeamMobile={setNumberOfTeamMobile}
            down={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" || nowWidthWindow === "computerNormalScreen" ? false : true} />
            <TheDreamTeamMainItem src={Person_6} person="Person_6" numberOfTeamMobile={numberOfTeamMobile} 
            mobileAndTabletOrder={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 6 : undefined}
            setNumberOfTeamMobile={setNumberOfTeamMobile}
            down={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" || nowWidthWindow === "computerNormalScreen" ? false : true} />
            <TheDreamTeamMainItem src={Person_7} person="Person_7" numberOfTeamMobile={numberOfTeamMobile} 
            mobileAndTabletOrder={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 7 : undefined}
            setNumberOfTeamMobile={setNumberOfTeamMobile}
            down={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" || nowWidthWindow === "computerNormalScreen" ? false : true} />
            <TheDreamTeamMainItem src={Person_8} person="Person_8" numberOfTeamMobile={numberOfTeamMobile} 
            mobileAndTabletOrder={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 8 : undefined}
            setNumberOfTeamMobile={setNumberOfTeamMobile} 
            down={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" || nowWidthWindow === "computerNormalScreen" ? false : true} />
        </div>
        <TheDreamTeamMainProgress scrollWidth={`${scrollWidth}`}/>
        </React.Fragment>
    )
}

function TheDreamTeamMainItem(
    {down, src, person, mobileAndTabletOrder, numberOfTeamMobile, setNumberOfTeamMobile}:
    {down: any; src: any; person: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    mobileAndTabletOrder: number | undefined; numberOfTeamMobile: undefined | number;
    setNumberOfTeamMobile: Dispatch<SetStateAction<undefined | number>>})
{

    const {nowWidthWindow} = useContext(Contexts.MediaContext);
    const itemRef = useRef<HTMLDivElement>(null);
    const [wasEnter, setWasEnter] = useState<boolean | null>(null);

    useEffect(() => {
        const item = itemRef.current as HTMLDivElement;
        const img = item.children[0] as HTMLElement, backward = item.children[1] as HTMLElement;
        if ( mobileAndTabletOrder && numberOfTeamMobile ) {
            if (mobileAndTabletOrder !== numberOfTeamMobile) {
                setWasEnter(false);
                Functions.changeStyleElem(img, {
                    zIndex: 2,
                    transform: "rotateY(0)"
                });
                Functions.changeStyleElem(backward, {
                    zIndex: 1,
                    transform: "rotateY(180deg)"
                });
            }
        }
    }, [mobileAndTabletOrder, numberOfTeamMobile]);

    useEffect(() => {
        const item = itemRef.current;

        if (item) {
            const img = item.children[0] as HTMLElement, backward = item.children[1] as HTMLElement;

            if (mobileAndTabletOrder && nowWidthWindow === "mobileScreen") {
                switch(mobileAndTabletOrder) {
                    case 1:
                        Functions.changeStyleElem(item, {
                            margin: 0
                        });
                        break;
                    case 8:
                        Functions.changeStyleElem(item, {
                            margin: "0 25px 0 25px"
                        });
                        break;
                    default:
                        Functions.changeStyleElem(item, {
                            margin: "0 0 0 25px"
                        });
                        break;
                }
            }

            if (wasEnter) {
                Functions.changeStyleElem(img, {
                    zIndex: 1,
                    transform: "rotateY(-180deg)",
                    backfaceVisibility: "hidden"
                });
                Functions.changeStyleElem(backward, {
                    zIndex: 2,
                    transform: "rotateY(0)",
                    backfaceVisibility: "visible"
                });
            } else if (wasEnter === false) {
                Functions.changeStyleElem(img, {
                    zIndex: 2,
                    transform: "rotateY(0)",
                    backfaceVisibility: "visible"
                });
                Functions.changeStyleElem(backward, {
                    zIndex: 1,
                    transform: "rotateY(-180deg)",
                    backfaceVisibility: "hidden"
                });
            }
        }
    });

    const enter: PointerEventHandler = () => {
        if ( nowWidthWindow === "computerLargeScreen" || nowWidthWindow === "computerNormalScreen") {
            setWasEnter(true);
        }
    };

    const leave: PointerEventHandler<HTMLDivElement> = () => {
        if ( nowWidthWindow === "computerLargeScreen" || nowWidthWindow === "computerNormalScreen") {
            setWasEnter(false);
        }
    };

    const click: PointerEventHandler<HTMLDivElement> = () => {
       if( nowWidthWindow === "tablet" || nowWidthWindow === "mobileScreen" ) {
            setWasEnter(true);
            setNumberOfTeamMobile(mobileAndTabletOrder);
            const theDreamTeam_main__item = itemRef.current as HTMLDivElement;
            const img = theDreamTeam_main__item.children[0] as HTMLImageElement;
            if (img.tagName.toLowerCase() === "img") img.click();
       }
        
    }

    return(
        <div className="theDreamTeam_main__item"
        style={
            Object.assign(
                Functions.cloneObject(
                    Styles.theDreamTeam_main__item
                ),
                nowWidthWindow === "mobileScreen" ? Styles.theDreamTeam_main__itemMobile :
                nowWidthWindow === "tablet" ? Styles.theDreamTeam_main__itemTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.theDreamTeam_main__itemNormalScreen : {},
                down ? Styles.theDreamTeam_main__item___down : {}
            )
        }
        ref={itemRef}
        onPointerEnter={enter}
        onPointerLeave={leave}
        onClick={click}>
            <Functions.Img src={src} alt={person} isCanBeDownload={true} className="theDreamTeam_main__item___image" style={
                Functions.cloneObject(
                    Styles.theDreamTeam_main__item___img
                )
            }/>
            <div className="item_backward" style={
                Functions.cloneObject(
                    Styles.item_backward
                )
            }>
                <h5 style={
                    Functions.cloneObject(
                        Styles.h5
                    )
                }>
                    {person}
                </h5>
            </div>
        </div>
    )
}

/* Мобильная версия (показатель прокрукти) */

function TheDreamTeamMainProgress(props: { scrollWidth: string; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const progressRef = useRef<HTMLProgressElement>(null);

    useEffect(() => {
        const progressElem = progressRef.current;

        if (progressElem) {
            progressElem.setAttribute("value", props.scrollWidth);
        }
    }, [props.scrollWidth]);

    useEffect(() => {
        const styleElem = document.querySelector("style");
        if (styleElem) {
            styleElem.append(`
                progress {
                    background-color: #7beec7;
                }
                progress::-webkit-progress-bar {
                    background-color: #7beec7;
                }
                progress::-webkit-progress-value {
                    background-color: #7e98a8;
                }
                progress::-moz-progress-bar {
                    background-color: #7beec7;
                }
        `);
        }
    }, []);

    return(
        <progress max="100" value="11" ref={progressRef} style={
            Object.assign(
                {
                    display: "none"
                },
                nowWidthWindow === "mobileScreen" ? Styles.mobileProgressBar : {}
            )
        }/>
    )
} 

/* -------- */

function GrayBlock() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const ref_grayBlock = useRef<HTMLDivElement>(null);

    const [wasClick, setWasClick] = useState<boolean | null>(null);

    useEffect(() => {
        const grayBlock = ref_grayBlock.current as HTMLDivElement;
        const paragOfGrayBlock = grayBlock.children[0] as HTMLParagraphElement;
        if ( nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ) {
            Functions.changeStyleElem(paragOfGrayBlock, {
                maxHeight: `${paragOfGrayBlock.scrollHeight}px`
            });
        }
    }, [nowWidthWindow]);

    useEffect(() => {
        const grayBlock = ref_grayBlock.current;
        if (grayBlock) {
            const p = grayBlock.children[0] as HTMLParagraphElement, button = grayBlock.children[1];
            if ( nowWidthWindow === "computerLargeScreen" || nowWidthWindow === "computerNormalScreen" ) {
                if (wasClick) {
                    Functions.changeStyleElem(p, {
                        maxHeight: `${p.scrollHeight}px`
                    });
        
                    button.textContent = "hide text";
                } else if (wasClick === false) {
                    Functions.changeStyleElem(p, {
                        maxHeight: `${p.scrollHeight / 4}px`
                    });
        
                    button.textContent = "read more";
                }
            }
        }
    }, [wasClick, nowWidthWindow]);

    const enter = (e: { currentTarget: any; }) => {
        const target = e.currentTarget;

        Functions.changeStyleElem(target, {
            color: "#7beec7",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 0 3px #7beec7"
        });
    };

    const leave = (e: { currentTarget: any; }) => {
        const target = e.currentTarget;

        Functions.changeStyleElem(target, {
            color: "#ffffff",
            backgroundColor: "#7beec7",
            boxShadow: "0 0 0 0 #7beec7"
        });
    };

    const focus = (e: { currentTarget: any; }) => {
        const target = e.currentTarget;

        Functions.changeStyleElem(target, {
            outline: "2px dotted #7beec7"
        });
    };

    const blur = (e: { currentTarget: any; }) => {
        const target = e.currentTarget;

        Functions.changeStyleElem(target, {
            outline: "0 dotted #ffffff"
        });
    };

    const click = () => {
        setWasClick(wasClick === null ? true : !wasClick);
    };

    return(
        <div className="main_theDreamTeam__grayBlock" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_theDreamTeam__grayBlock
                ),
                nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? Styles.main_theDreamTeam__grayBlockMobileAndTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_theDreamTeam__grayBlockNormalScreen : {}
            )
        } ref={ref_grayBlock}>
            <p style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.grayBlock_p
                    ),
                    nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? Styles.grayBlock_pMobileAndTablet :
                    nowWidthWindow === "computerNormalScreen" ? Styles.grayBlock_pNormalScreen : {}
                )
            }>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br/>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br/>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br/>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            </p>
            <button style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.grayBlock_button
                    ),
                    nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? Styles.grayBlock_buttonMobileAndTablet :
                    nowWidthWindow === "computerNormalScreen" ? Styles.grayBlock_buttonNormalScreen : {}
                )
            } onPointerEnter={enter} onPointerLeave={leave} onFocus={focus} onBlur={blur} onClick={click}>
                read more
            </button>
        </div>
    )
}

function MainTheDreamTeamDown() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_theDreamTeam__down" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_theDreamTeam__down
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_theDreamTeam__downMobile :
                nowWidthWindow === "tablet" ? Styles.main_theDreamTeam__downTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_theDreamTeam__downNormalScreen : {}
            )
        }>
            <Slider/>
            <Icons/>
        </div>
    )
}

function Slider() {

    const sliderRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(1);

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            const slides = slider.children as HTMLCollectionOf<HTMLElement>;
            Array.from(slides).forEach(item => {
                Functions.changeStyleElem(item, {
                    transform: `translateX(-${100 * (active - 1)}%)`
                });
            });
        }
    }, [active]);

    return(
        <div className="slider_conteiner" style={
            Functions.cloneObject(
                Styles.slider_conteiner
            )
        }>
            <div className="theDreamTeam_down__slider" style={
                Functions.cloneObject(
                    Styles.theDreamTeam_down__slider
                )
            } ref={sliderRef}>
            <Slide/>
            <Slide/>
            <Slide/>
            <Slide/>
        </div>
        <SliderButtons active={active} setActive={setActive}/>
        </div>
    )
}

function Slide() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const buttonFocus = (e: { currentTarget: any; }) => {
        const event = e.currentTarget;
        Functions.changeStyleElem(event, {
            color: "#7beec7",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 0 2px #7beec7",
            outline: "none"
        })
    };

    const buttonBlur = (e: { currentTarget: any; }) => {
        const event = e.currentTarget;
        Functions.changeStyleElem(event, {
            color: "#ffffff",
            backgroundColor: "#7beec7",
            boxShadow: "0 0 0 0 #7beec7"
        })
    };

    return(
        <div className="down_slider__slide" style={
            Functions.cloneObject(
                Styles.down_slider__slide
            )
        }>
            <Functions.Img src={Circle_man} alt="circle_man" className="circle_man" style={
                Functions.cloneObject(
                    Styles.slider_slide__img
                )
            }/>
            <p style={
                Functions.cloneObject(
                    Styles.Slider_slide__p 
                )
            }>
                Quisque iaculis lorem vestibulum eros vehicula, non congue elit dictum. Donec mollis aliquet lorem, eu porttitor sapien semper in. Duis ac erat luctus, gravida lectus sit amet, consectetur orci. Suspendisse libero mauris.
            </p>
            <button style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.slider_slide__button
                    ),
                    nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? Styles.slider_slide__buttonMobileAndTablet : {}
                )
            } onFocus={buttonFocus} onBlur={buttonBlur}>
                john doe
            </button>
        </div>
    ) 
}

function SliderButtons(props: { active: any; setActive: any; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="theDreamTeam_down__buttons" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.theDreamTeam_down__buttons
                ),
                nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? Styles.theDreamTeam_down__buttonsMobileAndTablet : {}
            )
        }>
            <SliderButtonsButton order={1} active={props.active} setActive={props.setActive} mobileAndTabletValue={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 1 : undefined}/>
            <SliderButtonsButton order={2} active={props.active} setActive={props.setActive} mobileAndTabletValue={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 2 : undefined}/>
            <SliderButtonsButton order={3} active={props.active} setActive={props.setActive} mobileAndTabletValue={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 3 : undefined}/>
            <SliderButtonsButton order={4} active={props.active} setActive={props.setActive} mobileAndTabletValue={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? 4 : undefined}/>
        </div>
    )
}

function SliderButtonsButton(props: { setActive: (arg0: any) => void; order: any; active: any; mobileAndTabletValue: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const click = (e: { currentTarget: any; }) => {
        const event = e.currentTarget;
        props.setActive(event.dataset.order)
    };

    const focus = (e: { currentTarget: any; }) => {
        const event = e.currentTarget;
        Functions.changeStyleElem(event, {
            outline: "none"
        });
    };

    return(
        <button data-order={props.order} style={
            Object.assign(
                Functions.cloneObject(
                    Styles.down_buttons__button
                ),
                nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? Styles.down_buttons__buttonMobileAndTablet : {},
                props.active == props.order ? nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? Styles.down_buttons__buttonActiveMobileAndTablet :
                Styles.down_buttons__buttonActive : {}
            )
        } onClick={click} onFocus={focus}>
            {props.mobileAndTabletValue}
        </button>
    )
}

function Icons() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="theDreamTeam_down__icons" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.theDreamTeam_down__icons
                ),
                nowWidthWindow === "mobileScreen" ? Styles.theDreamTeam_down__iconsMobile :
                nowWidthWindow === "tablet" ? Styles.theDreamTeam_down__iconsTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.theDreamTeam_down__iconsNormalScreen : {}
            )
        }>
            <Icon src={logo_1} alt="logo_1" mobileFirst={true}/>
            <Icon src={logo_2} alt="logo_2" mobileFirst={false}/>
            <Icon src={logo_3} alt="logo_3" mobileFirst={false}/>
            <Icon src={logo_4} alt="logo_4" mobileFirst={false}/>
            <Icon src={logo_5} alt="logo_5" mobileFirst={false}/>
            <Icon src={logo_6} alt="logo_6" mobileFirst={false}/>
        </div>
    )
}

function Icon(props: { mobileFirst: any; src: any; alt: any; }) {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const click = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };

    const enter = (e: { currentTarget: any; }) => {
        const event = e.currentTarget;

        Functions.changeStyleElem(event, {
            backgroundColor: "#7beec7"
        });
    };

    const leave = (e: { currentTarget: any; }) => {
        const event = e.currentTarget;

        Functions.changeStyleElem(event, {
            backgroundColor: "#ffffff"
        });
    };

    return(
        <div className="down_icoons__icon" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.down_icoons__icon
                ),
                nowWidthWindow === "mobileScreen" ? props.mobileFirst ? {} :
                Styles.down_icoons__iconMobile :
                nowWidthWindow === "tablet" ? Styles.down_icoons__iconTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.down_icoons__iconNormalScreen : {}
            )
        } onPointerEnter={enter} onPointerLeave={leave} onClick={click}>
            <Functions.Img src={props.src} alt={props.alt} isCanBeDownload={true} style={
                nowWidthWindow === "computerNormalScreen" ? Styles.down_icoons__icon___imgNormalScreen : {}
            }></Functions.Img>
        </div>
    )
}