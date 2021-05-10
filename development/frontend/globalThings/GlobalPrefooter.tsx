import React, {useContext} from "react";
import * as Contexts from "./context";
import * as GlobalStyles from "./GlobalStyles";
import * as Functions from "./functions";

export default function PreFooter() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_prefooter" style={
            Object.assign(Functions.cloneObject(GlobalStyles.mainPrefooterStyles),
            nowWidthWindow === "mobileScreen" ? GlobalStyles.mainPrefooterStylesMobile :
            nowWidthWindow === "tablet" ? GlobalStyles.mainPrefooterStylesTablet :
            nowWidthWindow === "computerNormalScreen" ? GlobalStyles.mainPrefooterStylesMedium : {})
        }>
            <PreFooterText/>
            <PreFooterForm/>
        </div>
    )
}

function PreFooterText() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_prefooter__text" style={
            Object.assign(
                Functions.cloneObject(GlobalStyles.mainPrefooterTextStyle),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.mainPrefooterTextStyleMobile :
                nowWidthWindow === "tablet" ? GlobalStyles.mainPrefooterTextStyleTablet :
                nowWidthWindow === "computerNormalScreen" ? GlobalStyles.mainPrefooterTextStyleMedium : {}
            )
        }>
            <h2 style={
                Object.assign(
                    Functions.cloneObject(GlobalStyles.youThink),
                    nowWidthWindow === "mobileScreen" ? GlobalStyles.youThinkMobile :
                    nowWidthWindow === "tablet" ? GlobalStyles.youThinkTablet :
                    nowWidthWindow === "computerNormalScreen" ? GlobalStyles.youThinkMedium : {}
                )
            }>YOU THINK WE'RE COOL ? LET'S WORK TOGETHER</h2>
            <PrefooterButton/>
        </div>
    )
}

function PrefooterButton() {
    const focus = (e: { currentTarget: HTMLElement; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            outline: "none"
        });
    };

    const enter = (e: { currentTarget: HTMLElement; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            backgroundColor: "#7beec7",
            color: "#ffffff",
            boxShadow: "inset 0px 0px 0px 2px #ffffff"
        });
    };

    const leave = (e: { currentTarget: HTMLElement; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            backgroundColor: "#ffffff",
            color: "#7beec7",
            boxShadow: "inset 0px 0px 0px 0px #ffffff"
        });
    };

    return(
        <button style={GlobalStyles.shape11} onFocus={focus} onPointerEnter={enter} onPointerLeave={leave}>get in touch</button>
    )
}

function PreFooterForm() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_prefooter__form" style={
            Object.assign(
                Functions.cloneObject(GlobalStyles.mainPrefooterFormStyle),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.mainPrefooterFormStyleMobile :
                nowWidthWindow === "tablet" ? GlobalStyles.mainPrefooterFormStyleTablet :
                nowWidthWindow === "computerNormalScreen" ? GlobalStyles.mainPrefooterFormStyleMedium : {}
            )
        }>
            <PreFooterFormText/>
            <PreFooterFormSubmit/>
        </div>
    )
}

function PreFooterFormText() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    return(
        <div className="main_prefooter__form___text" style={
            Object.assign(
                Functions.cloneObject(GlobalStyles.mainPrefooterFormTextStyle),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.mainPrefooterFormTextStyleMobile :
                nowWidthWindow === "tablet" ? GlobalStyles.mainPrefooterFormTextStyleTablet : {}
            )
        }>
            <h2 style={
                Object.assign(
                    Functions.cloneObject(GlobalStyles.stayInformed),
                    nowWidthWindow === "mobileScreen" ? GlobalStyles.stayInformedMobile :
                    nowWidthWindow === "tablet" ? GlobalStyles.stayInformedTablet : {}
                )
            }>STAY INFORMED WITH OUR NEWSLETTER</h2>
            <p style={
                Object.assign(Functions.cloneObject(GlobalStyles.loremIpsumStyle),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.loremIpsumStyleMobile :
                nowWidthWindow === "tablet" ? GlobalStyles.loremIpsumStyleTablet : {})
            }>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

function PreFooterFormSubmit() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    const focus = (e: { currentTarget: HTMLInputElement }) => {

        if (e.currentTarget.value === "your email") {
            e.currentTarget.value = "";
        }

        Functions.changeStyleElem(e.currentTarget, {
            outline: "none",
            color: "#60606e"
        });
    };

    const blur = (e: {currentTarget: HTMLInputElement}) => {
        if (e.currentTarget.value.length == 0) {
            Functions.changeStyleElem(e.currentTarget, {
                color: "#cdcdcd"
            });
            e.currentTarget.value = "your email";
        }
    };

    const enter = (e: { currentTarget: HTMLElement; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            backgroundColor: "#ffffff",
            color: "#7beec7",
            boxShadow: "inset 0px 0px 0px 2px #7beec7"
        });
    };

    const leave = (e: { currentTarget: HTMLElement; }) => {
        Functions.changeStyleElem(e.currentTarget, {
            backgroundColor: "#7beec7",
            color: "#ffffff",
            boxShadow: "inset 0px 0px 0px 0px #7beec7"
        });
    };

    return(
        <form action="/contact" method="POST" style={
            Object.assign(
                Functions.cloneObject(GlobalStyles.form),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.formMobile :
                nowWidthWindow === "tablet" ? GlobalStyles.formTablet :
                nowWidthWindow === "computerNormalScreen" ? GlobalStyles.formMedium : {}
            )
        }>
            <input type="email" name="email" defaultValue="your email" style={GlobalStyles.formInput} onFocus={focus} onBlur={blur}/>
            <button type="submit" style={GlobalStyles.formButton} onPointerEnter={enter} onPointerLeave={leave}>send</button>
        </form>
    )
}