import React, {useEffect, useContext, useState, useRef} from "react";

import {MediaContext} from "../globalThings/context";
import * as Function from "../globalThings/functions";
import * as ServicesPresets from "./services_presets";
import * as Styles from "./styles";

import GlobalChangeLocation from "../globalThings/GlobalChangeLocationOn";
import GlobalHeader from "../globalThings/GlobalHeader";
import GlobalFooter from "../globalThings/GlobalFooter";
import GlobalPreFooter from "../globalThings/GlobalPrefooter";

import Layer_5 from "./images/layer_5_167.png";
import InfinityImage from "./images/infinity.png";
import Diagram from "./images/diagram.png";
import Light from "./images/light.png";
import Options from "./images/options.png";

export default function Services() {
    return(
        <React.Fragment>
            {/* Для установки стилей для body и root */}
            <ServicesPresets.BodyAndRootStyles/>
            {/* Проверка и изменения при изменении ориентации экрана*/}
            <ServicesPresets.OrientationChange/>
            {/* Проверка и изменения при изменении размера экрана */}
            <ServicesPresets.Resize/>
            {/* Для установки глобальных значений */}
            <ServicesPresets.LetGlobalThis/>
            {/* Для анимации появления header, main, footer */}
            <GlobalChangeLocation/>
            <GlobalHeader h1="akad." h2="our services" p="home / services"/>
            <Main/>
            <GlobalFooter/>
        </React.Fragment>
    )
}

function Main() {
    return(
        <main style={
            Function.cloneObject(
                Styles.main
            )
        }>
            <WhatWeDo/>
            <PricingPlans/>
            <GlobalPreFooter/>
        </main>
    )
}

function WhatWeDo() {

    type ForStateThis = [{
        order: number;
        forLinearGradient: number
    }, (object: {
        order: number;
        forLinearGradient: number
    }) => any];

    const {nowWidthWindow} = useContext(MediaContext);
    const [nowSkilsSlide, setNowSkilsSlide]: ForStateThis = useState({
        order: 1,
        forLinearGradient: 1
    });

    return(
        <div className="main_whatWeDo" style={
            Object.assign(
                Function.cloneObject(
                    Styles.main_whatWeDo
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_whatWeDo_Mobile :
                nowWidthWindow === "tablet" ? Styles.main_whatWeDo_Tablet : {}
            )
        }>
            <Function.TitleText title="What we do"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            otherStylesTitle={
                Object.assign(
                    Function.cloneObject(
                        Styles.whatWeDoTitle
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.whatWeDoTitle_Mobile :
                    nowWidthWindow === "tablet" ? Styles.whatWeDoTitle_Tablet :
                    nowWidthWindow === "computerNormalScreen" ? Styles.whatWeDoTitle_NormalScreen : {}
                )
            }/>
            <WhatWeDoMain/>
            <WhatWeDoSkils setNowSkilsSlide={setNowSkilsSlide}/>
            <WhatWeDoSkilsMobileButtons nowSkilsSlide={nowSkilsSlide} setNowSkilsSlide={setNowSkilsSlide}/>
        </div>
    )
}

function WhatWeDoMain() {

    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <div className="main_whatWeDo__main" style={
            Object.assign(
                Function.cloneObject(
                    Styles.main_whatWeDo__main
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_whatWeDo__main_Mobile :
                nowWidthWindow === "tablet" ? Styles.main_whatWeDo__main_Tablet : {}
            )
        }>
            <WhatWeDoMainText/>
            <WhatWeDoMainImage/>
        </div>
    )
}

function WhatWeDoMainText() {

    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <div className="whatWeDo_main__text" style={
            Object.assign(
                Function.cloneObject(
                    Styles.whatWeDo_main__text
                ),
                nowWidthWindow === "mobileScreen" ? Styles.whatWeDo_main__text_Mobile :
                nowWidthWindow === "tablet" ? Styles.whatWeDo_main__text_Tablet : {}
            )
        }>
            <p className="text_header" style={
                Object.assign(
                    Function.cloneObject(
                        Styles.text_header
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.text_header_Mobile :
                    nowWidthWindow === "tablet" ? Styles.text_header_Tablet : {}
                )
            }>
                Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
            </p>
            <WhatWeDoMainTextCheckBoxes/>
        </div>
    )
}

function WhatWeDoMainTextCheckBoxes() {

    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <div className="whaWeDo_main__text___checkboxes" style={
            Object.assign(
                Function.cloneObject(
                    Styles.whaWeDo_main__text___checkboxes
                ),
                nowWidthWindow === "mobileScreen" ? Styles.whaWeDo_main__text___checkboxes_Mobile :
                nowWidthWindow === "tablet" ? Styles.whaWeDo_main__text___checkboxes_Tablet : {}
            )
        }>
            <div className="conteinerOfCheckboxItems" style={
                Object.assign(
                    Function.cloneObject(
                        Styles.conteinerOfCheckboxItems
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.conteinerOfCheckboxItems_Mobile : {}
                )
            }>
                <CheckBoxItem name="Stunning on all screens" id={"1"}/>
                <CheckBoxItem name="Easy to customize" id={"2"}/>
                <CheckBoxItem name="Make a difference" id={"3"}/>
                <CheckBoxItem name="Imagine and create" id={"4"}/>
                <CheckBoxItem name="Unlimited possibilities" id={"5"}/>
            </div>
            <div className="conteinerOfCheckboxItems" style={
                Function.cloneObject(
                    Styles.conteinerOfCheckboxItems
                )
            }>
                <CheckBoxItem name="Remarkable style" id={"6"}/>
                <CheckBoxItem name="Captivating presentations" id={"7"}/>
                <CheckBoxItem name="Make your portfolio pop" id={"8"}/>
                <CheckBoxItem name="Words that matter" id={"9"}/>
                <CheckBoxItem name="Satisfied clients" id={"10"}/>
            </div>
        </div>
    )
}

function CheckBoxItem(props: {
    name: string,
    id: string | undefined
}) {

    const {nowWidthWindow} = useContext(MediaContext);

    const disabledFunction = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    return(
        <div className="checkboxItem" style={
            Object.assign(
                Function.cloneObject(
                    Styles.checkboxItem
                ),
                nowWidthWindow === "mobileScreen" ? Styles.checkboxItem_Mobile : {}
            )
        }>
            <input type="checkbox" className="styled_checkbox" name={props.name} id={props.id} defaultChecked={true} style={
                Function.cloneObject(
                    Styles.checkbox
                )
            } onClick={disabledFunction}/>
            <label htmlFor={props.id} style={
                Function.cloneObject(
                    Styles.checkboxLabel
                )
            }>
                {props.name}
            </label>
        </div>
    )
}

function WhatWeDoMainImage() {

    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <Function.Img src={Layer_5} alt="layer_5" isCanBeDownload={true} style={
            Object.assign(
                Function.cloneObject(
                    Styles.whaWeDo_main__image
                ),
                nowWidthWindow === "mobileScreen" ? Styles.whaWeDo_main__image_Mobile :
                nowWidthWindow === "tablet" ? Styles.whaWeDo_main__image_Tablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.whaWeDo_main__image_NormalScreen : {}
            )
        }/>
    )
}

function WhatWeDoSkils(props: {
    setNowSkilsSlide(order: {
        order: number;
        forLinearGradient: number
    }): any
}) {

    const {nowWidthWindow} = useContext(MediaContext);

    const onScroll = (e: {currentTarget: any}) => {
        const sliderElement = e.currentTarget as HTMLElement,
            sliderElementScrollWidth = sliderElement.scrollWidth,
            sliderElementScrollLeft = sliderElement.scrollLeft;

        const order = Math.round(sliderElementScrollLeft / Math.ceil(sliderElementScrollWidth / 4)) + 1; /* Находим значение текущего слайда - order */
        const forLinearGradient = +((sliderElementScrollLeft / Math.ceil(sliderElementScrollWidth / 4)).toFixed(3)) + 1; /* Находим процент, выраженный в числах с плавающей точкой */
        
        props.setNowSkilsSlide({
            order: order,
            forLinearGradient: forLinearGradient
        });
    };

    return(
        <div className="whatWeDo_skils" style={
            Object.assign(
                Function.cloneObject(
                    Styles.whatWeDo_skils
                ),
                nowWidthWindow === "mobileScreen" ? Styles.whatWeDo_skils_Mobile :
                nowWidthWindow === "computerNormalScreen" ? Styles.whatWeDo_skils_NormalScreen : {}
            )
        } onScroll={onScroll}>
            <SkilItem src={Diagram} title="KEEP PULSE GOING"
            styleForGreenBlock={{
                left: "-7px",
                bottom: "4px"
            }}/>
            <SkilItem src={InfinityImage} title="PASS THE LIMITS"
            styleForItem={{
                margin: "12px 0 0 0"
            }}
            styleForGreenBlock={{
                bottom: "-8px",
                left: "-7px"
            }}
            stylePlusForH3={{
                margin: "43px 0 0 0"
            }}/>
            <SkilItem src={Light} title="GREAT IDEAS" styleForGreenBlock={{
                bottom: "7px",
                left: "-16px"
            }}/>
            <SkilItem src={Options} title="AWESOME SUPPORT"
            styleForItem={{
                margin: "4px 0 0 0"
            }}
            styleForGreenBlock={{
                bottom: "0px",
                left: "-7px"
            }} stylePlusForH3={{
                margin: "35px 0 0 0"
            }}/>
        </div>
    )
}

/* Mobile buttons for buttons */

function WhatWeDoSkilsMobileButtons(props: {
    setNowSkilsSlide(object: {
        order: number;
        forLinearGradient: number
    }): any;
    nowSkilsSlide: {
        order: number;
        forLinearGradient: number;
    }
}) {

    const {nowWidthWindow} = useContext(MediaContext);
    const buttonsForSkilsRef = useRef(null);

    useEffect(() => {
        const buttonsForSkilsElem = buttonsForSkilsRef.current as unknown as HTMLElement,
              buttonsForSlilsButtons = buttonsForSkilsElem.children as HTMLCollectionOf<HTMLElement>;

        if (buttonsForSlilsButtons) {
            Array.from(buttonsForSlilsButtons)
            .forEach(button => {
                const order = button.dataset.order,
                    lastOrder = Math.floor(props.nowSkilsSlide.forLinearGradient),
                    nextOrder = Math.ceil(props.nowSkilsSlide.forLinearGradient);

                if (order) {

                    let percent = props.nowSkilsSlide.forLinearGradient - props.nowSkilsSlide.order;

                    if (percent < 0) {
                        percent = 1 + percent;
                    }

                    percent *= 100; /* Процент */

                    if (lastOrder === nextOrder) {
                        if (+order === nextOrder) {
                            Function.changeStyleElem(button, {
                                background: `linear-gradient(90deg, rgba(123, 238, 199, 1) ${100 - percent}%, rgba(123, 238, 199, 0.4) ${100 - percent}%)`
                            });
                        } else {
                            Function.changeStyleElem(button, {
                                background: `linear-gradient(90deg, rgba(123, 238, 199, 1) ${percent}%, rgba(123, 238, 199, 0.4) ${percent}%)`
                            });
                        }
                    } else {
                        if (+order === lastOrder) {
                            Function.changeStyleElem(button, {
                                background: `linear-gradient(90deg, rgba(123, 238, 199, 1) ${100 - percent}%, rgba(123, 238, 199, 0.4) ${100 - percent}%)`
                            });
                        } else if (+order === nextOrder) {
                            Function.changeStyleElem(button, {
                                background: `linear-gradient(90deg, rgba(123, 238, 199, 1) ${percent}%, rgba(123, 238, 199, 0.4) ${percent}%)`
                            });
                        } else {
                            Function.changeStyleElem(button, {
                                background: `linear-gradient(90deg, rgba(123, 238, 199, 1) 0%, rgba(123, 238, 199, 0.4) 0%)`
                            });
                        }                      
                    }
                }
            });
        }

    }, [props.nowSkilsSlide]);

    return (
        <div className="whatWeDo_buttonsForSkils" style={
            Object.assign(
                {
                    display: "none"
                },
                nowWidthWindow === "mobileScreen" ? Styles.whatWeDo_buttonsForSkils : {}
            )
        } ref={buttonsForSkilsRef}>
            <button data-order="1" className="whatWeDo_buttonsForSkils__button" style={
                Styles.whatWeDo_buttonsForSkils__button
            }></button>
            <button data-order="2" className="whatWeDo_buttonsForSkils__button" style={
                Styles.whatWeDo_buttonsForSkils__button
            }></button>
            <button data-order="3" className="whatWeDo_buttonsForSkils__button" style={
                Styles.whatWeDo_buttonsForSkils__button
            }></button>
            <button data-order="4" className="whatWeDo_buttonsForSkils__button" style={
                Styles.whatWeDo_buttonsForSkils__button
            }></button>
        </div>
    )
}

function SkilItem(props: {
    src: string | URL;
    title: string;
    styleForItem?: {}
    styleForGreenBlock?: {}
    stylePlusForH3?: {}
}) {

    const {nowWidthWindow} = useContext(MediaContext);

    const allStylesForSkilsItem = Object.assign(
        Function.cloneObject(
            Styles.whatWeDo_skils__item
        ),
        props.styleForItem ? props.styleForItem : {}
    );

    const whatWeDo_skils__item___h3StyleMain = Object.assign(
        Function.cloneObject(
            Styles.whatWeDo_skils__item___h3
        ),
        props.stylePlusForH3 ? props.stylePlusForH3 : {}
    );

    return(
        <div className="whatWeDo_skils__item" style={
            Object.assign(
                allStylesForSkilsItem,
                nowWidthWindow === "mobileScreen" ? Styles.whatWeDo_skils__item_Mobile :
                nowWidthWindow === "tablet" ? Styles.whatWeDo_skils__item_Tablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.whatWeDo_skils__item_NormalScreen : {}
            )
        }>
            <div className="item_imageAndBlock" style={
                Function.cloneObject(
                    Styles.item_imageAndBlock
                )
            }>
                <Function.Img src={props.src} alt={props.title} isCanBeDownload={false}/>
                <div className="item_imageAndBlock__block" style={
                    Object.assign(
                        Function.cloneObject(
                            Styles.item_imageAndBlock__block
                        ),
                        props.styleForGreenBlock ? props.styleForGreenBlock : {}
                    )
                }></div>
            </div>
            <h3 style={
                Object.assign(
                    whatWeDo_skils__item___h3StyleMain,
                    nowWidthWindow === "tablet" ? Styles.whatWeDo_skils__item___h3_Tablet :
                    nowWidthWindow === "computerNormalScreen" ? Styles.whatWeDo_skils__item___h3_NormalScreen : {}
                )
            }>{props.title}</h3>
            <p style={
                Function.cloneObject(
                    Styles.whatWeDo_skils__item___p
                )
            }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt .
            </p>
        </div>
    )
}

function PricingPlans() {

    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <div className="main_pricingPlans" style={
            Function.cloneObject(
                Styles.main_pricingPlans
            )
        }>
            <Function.TitleText title="pricing plans"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            otherStylesTitle={
                Object.assign(
                    {
                        margin: "151px 0 0 0"
                    },
                    nowWidthWindow === "mobileScreen" ? Styles.main_pricingPlans__title_Mobile :
                    nowWidthWindow === "tablet" ? Styles.main_pricingPlans__title_Tablet :
                    nowWidthWindow === "computerNormalScreen" ? Styles.main_pricingPlans__title_NormalScreen : {}      
                )
            }/>
            <PricingPlansMain/>
        </div>
    )
}

function PricingPlansMain() {

    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <div className="main_pricingPlans__main" style={
            Object.assign(
                Function.cloneObject(
                    Styles.main_pricingPlans__main
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_pricingPlans__main_Mobile :
                nowWidthWindow === "tablet" ? Styles.main_pricingPlans__main_Tablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_pricingPlans__main_NormalScreen : {}
            )
        }>
            <PricingPlansMainPlan title="BASIC" price="$35.99 Monthly"/>
            <PricingPlansMainPlan title="ADVANCED" price="$55.99 Monthly" pricingPlans_main__planStyleOther={{
                margin: nowWidthWindow === "tablet" ? "10px 0 0 0" :
                        nowWidthWindow === "computerNormalScreen" ? 0 : "0 0 0 35px"
            }}/>
            <PricingPlansMainPlan title="smart" price="$75.99 Monthly" pricingPlans_main__planStyleOther={{
                margin: nowWidthWindow === "tablet" ? "10px 0 0 0 " :
                        nowWidthWindow === "computerNormalScreen" ? 0 : "0 35px 0 35px"
            }}/>
        </div>
    )
}

function PricingPlansMainPlan(props: {
    title: string;
    price: string | number;
    pricingPlans_main__planStyleOther?: any
}) {

    const {nowWidthWindow} = useContext(MediaContext);

    const onEnter = (e: { currentTarget: HTMLElement; }) => {
        const targer = e.currentTarget;
        Function.changeStyleElem(targer, {
            boxShadow: "0px 0px 50px 0px rgba(0,0,0,0.25)"
        });
    };

    const onLeave = (e: { currentTarget: HTMLElement; }) => {
        const targer = e.currentTarget;
        Function.changeStyleElem(targer, {
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.25)"
        });
    };

    const pricingPlans_main__planStyleMain = Object.assign(
        Function.cloneObject(
            Styles.pricingPlans_main__plan
        ),
        nowWidthWindow === "mobileScreen" ? Styles.pricingPlans_main__plan_Mobile :
        nowWidthWindow === "tablet" ? Styles.pricingPlans_main__plan_Tablet : {}
    );

    return(
        <div className="pricingPlans_main__plan" style={
            Object.assign(
                pricingPlans_main__planStyleMain,
                props.pricingPlans_main__planStyleOther ? props.pricingPlans_main__planStyleOther : {}
            )
        } onPointerEnter={nowWidthWindow === "mobileScreen" ? undefined : onEnter} onPointerLeave={onLeave}>
            <div className="plan_topLine" style={
                Function.cloneObject(
                    Styles.plan_topLine
                )
            }></div>
            <div className="paln_underTopLine" style={
                Function.cloneObject(
                    Styles.paln_underTopLine
                )
            }>
                <div className="plan_underTopLine__white" style={
                    Function.cloneObject(
                        Styles.plan_underTopLine__white
                    )
                }></div>
                <div className="plan_underTopLine__corner" style={
                    Function.cloneObject(
                        Styles.plan_underTopLine__corner
                    )
                }></div>
            </div>
            <div className="plan_main" style={
                Object.assign(
                    Function.cloneObject(
                        Styles.plan_main
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.plan_main_Mobile :
                    nowWidthWindow === "tablet" ? Styles.plan_main_Tablet : {}
                )
            }>
                <h4 style={
                    Function.cloneObject(
                        Styles.plan_main__h4
                    )
                }>
                    {props.title}
                </h4>
                <div className="plan_main__price" style={
                    Function.cloneObject(
                        Styles.plan_main__price
                    )
                }>
                    {props.price}
                </div>
                <div className="plan_main__checkboxes" style={
                    Function.cloneObject(
                        Styles.plan_main__checkboxes
                    )
                }>
                    <CheckBoxItem name="Lorem ipsum dolor sit amet" id={"11"}/>
                    <CheckBoxItem name="Consectetuer adipiscing elit" id={"12"}/>
                    <CheckBoxItem name="Sed diam nonummy" id={"13"}/>
                    <CheckBoxItem name="Nibh euismod tincidunt" id={"14"}/>
                    <CheckBoxItem name="Ut laoreet dolore" id={"15"}/>
                    <CheckBoxItem name="Magna aliquam erat volutpat" id={"16"}/>
                </div>
                <ButtonOfPlan/>
            </div>
        </div>
    )
}

function ButtonOfPlan() {

    const onEnter = (e: {currentTarget: HTMLElement}) => {
        Function.changeStyleElem(e.currentTarget, {
            backgroundColor: "#ffffff",
            color: "#7beec7",
            WebkitBoxShadow: "0px 0px 0px 3px rgba(123, 238, 199, 1)",
            MozBoxShadow: "0px 0px 0px 3px rgba(123, 238, 199, 1)",
            boxShadow: "0px 0px 0px 3px rgba(123, 238, 199, 1)"
        });
    };

    const onLeave = (e: {currentTarget: HTMLElement}) => {
        Function.changeStyleElem(e.currentTarget, {
            backgroundColor: "#7beec7",
            color: "#ffffff",
            WebkitBoxShadow: "0px 0px 0px 0px rgba(123, 238, 199, 0.2)",
            MozBoxShadow: "0px 0px 0px 0px rgba(123, 238, 199, 0.2)",
            boxShadow: "0px 0px 0px 0px rgba(123, 238, 199, 0.2)",
        });
    };

    const onClick = (e: {currentTarget: HTMLElement}) => {
        Function.changeStyleElem(e.currentTarget, {
            WebkitBoxShadow: "0px 0px 3px 11px rgba(123, 238, 199, 0.4)",
            MozBoxShadow: "0px 0px 3px 11px rgba(123, 238, 199, 0.4)",
            boxShadow: "0px 0px 3px 11px rgba(123, 238, 199, 0.4)"
        });
    };

    return(
        <button style={
            Function.cloneObject(
                Styles.paln_main__button
            )
        } onPointerEnter={onEnter} onPointerLeave={onLeave} onClick={onClick}>
            get started
        </button>
    )
}