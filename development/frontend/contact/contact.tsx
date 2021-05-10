import React, {useEffect, useRef, useContext} from "react";

import * as ContactPresets from "./contact_presets";
import * as Functions from "../globalThings/functions";
import * as Styles from "./styles";

import GlobalChangeLocation from "../globalThings/GlobalChangeLocationOn";
import GlobalHeader from "../globalThings/GlobalHeader";
import GlobalPreFooter from "../globalThings/GlobalPrefooter";
import GlobalFooter from "../globalThings/GlobalFooter";

import {FooterTextList} from "../globalThings/GlobalFooter";
import SourcePreloader from "../globalThings/SourcePreloader";
import {MediaContext} from "../globalThings/context";

export default function Contact() {
    return(
        <React.Fragment>
            {/* Для установки стилей для body и root */}
            <ContactPresets.BodyAndRootStyles/>
            {/* Проверка и изменения при изменении ориентации экрана*/}
            <ContactPresets.OrientationChange/>
            {/* Проверка и изменения при изменении размера экрана */}
            <ContactPresets.Resize/>
            {/* Для установки глобальных значений */}
            <ContactPresets.LetGlobalThis/>
            {/* Для анимации появления header, main, footer */}
            <GlobalHeader h1="akad." h2="contact us" p="home / contact"/>
            <Main/>
            <GlobalFooter/>
            <GlobalChangeLocation/>
        </React.Fragment>
    )
}

function Main() {

    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <main style={
            Functions.cloneObject(
                Styles.main
            )
        }>
            <div className="main_conteiner" style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.main_conteiner
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.main_conteiner_Mobile :
                    nowWidthWindow === "tablet" ? Styles.main_conteiner_Tablet :
                    nowWidthWindow === "computerNormalScreen" ? Styles.main_conteiner_NormalScreen : {}
                )
            }>
                <MainBody/>
                <IfRame/>
            </div>
            <GlobalPreFooter/>
        </main>
    )
}

function IfRame() {

    const SourcePreloaderRef = useRef(null);
    const IfRameRef = useRef(null);

    const {nowWidthWindow} = useContext(MediaContext);
 
    useEffect(() => {
        const SourcePreloader = SourcePreloaderRef.current as HTMLElement;
        const IfRame = IfRameRef.current as HTMLElement;

        IfRame.addEventListener("load", () => {
            SourcePreloader.remove();
        });

        return () => {
            IfRame.removeEventListener("load", () => {
                SourcePreloader.remove();
            });
        }
    }, []);

    return(
        <div className="iframeConteiner" style={
            Object.assign(
                {
                    position: "relative",
                    width: "48.684%" /* 555px */
                },
                nowWidthWindow === "mobileScreen" ? {
                    display: "flex",
                    justifyContent: "center",
                    width: "85%"
                } :
                nowWidthWindow === "tablet" ? {
                    display: "none"
                } :
                nowWidthWindow === "computerNormalScreen" ? {
                    width: "40%"
                } : {}
            )
        }>
            <SourcePreloader refProp={SourcePreloaderRef}/>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1469510.5405111327!2d-72.687162299521!3d43.99787768466286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1620397999419!5m2!1sru!2sru" 
            loading="lazy"
            ref={IfRameRef}
            style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.iframe
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.iframe_Mobile :
                    nowWidthWindow === "computerNormalScreen" ? Styles.iframe_NormalScreen : {}
                )
            }/>
        </div>
    )
}

function MainBody() {

    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <div className="main_conteiner__body" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_conteiner__body
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_conteiner__body_Mobile :
                nowWidthWindow === "tablet" ? Styles.main_conteiner__body_Tablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_conteiner__body_NormalScreen : {}
            )
        }>
            <Form/>
            <ContactInfo/>
            <FooterTextList listOtherStyles={
                Object.assign(
                    {
                        margin: "20px 0 0 0",
                        alignSelf: "flex-start"
                    },
                    nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? {
                        alignSelf: "center"
                    } : {}
                )
            }/>
        </div>
    )
}

function Form() {

    const {nowWidthWindow} = useContext(MediaContext);

    async function formSubmite(e: Event) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const elementOfForm = form.children as HTMLCollectionOf<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement>;

        let dataOfUser = {};

        Array.from(elementOfForm).forEach(item => {
            const name = item.getAttribute("name"), value = item.value;

            if (name) {
                dataOfUser[name] = value.length === 0 ? null : value.toLowerCase();
            }
        });

        dataOfUser = JSON.stringify(dataOfUser);

        try {
            const response = await fetch("/contact us/server", {
                method: "POST",
                body: dataOfUser,
                keepalive: true,
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            });
    
            if (response.ok) {
                const jsonData = await response.json();
                console.log(jsonData);
            } else {
                const errorData = await response.json();
                console.log(errorData?.status, errorData?.message);
                throw new Error(`Error`);
            }
        } catch (error) {
            console.log(
                error.message
            );
        }
    }

    return(
        <form style={
            Object.assign(
                Functions.cloneObject(
                    Styles.form
                ),
                nowWidthWindow === "mobileScreen" ? Styles.form_Mobile :
                nowWidthWindow === "tablet" ? Styles.form_Tablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.form_NormalScreen : {}
            )
        } onSubmit={formSubmite}>
            <InputOfForm placeholder="your name" type="text" name="name" otherStyles={
                nowWidthWindow === "tablet" ? Styles.inputOfForm_Tablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.inputOfForm_NormalScreen : {}
            }/>
            <InputOfForm placeholder="your email" type="email" name="email" otherStyles={
                nowWidthWindow === "mobileScreen" ? {
                    margin: "31px 0 0 0"
                } :
                nowWidthWindow === "tablet" ? Styles.inputOfForm_Tablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.inputOfForm_NormalScreen : {}
            }/>
            <InputOfForm placeholder="object" type="text" name="object" otherStyles={
                Object.assign(
                    Functions.cloneObject(
                        Styles.inputOfFormLong
                    ),
                    nowWidthWindow === "tablet" ? Styles.inputOfFormLong_Tablet : {}
                )
            }/>
            <Textarea placeholder="message" isResize={false} name="message" otherStyles={
                nowWidthWindow === "tablet" ? Styles.inputOfFormLong_Tablet : {}
            }/>
            <Button/>
        </form>
    )
}

function InputOfForm(props: {
    placeholder: string;
    type: string;
    name: string;
    otherStyles?: {}
}) {

    const {nowWidthWindow} = useContext(MediaContext);

    useEffect(() => {
        const styleTag = document.querySelector("style");

        styleTag?.append(`
            input::placeholder {
                font-family: Montserrat, sans-serif;
                font-size: 12px;
                line-height: 48px;
                font-weight: 700;
                text-transform: uppercase;
                color: #cccccc;
            }
        `);
    }, []);

    function focus(e: FocusEvent) {
        const target = e.currentTarget as HTMLElement;

        Functions.changeStyleElem(target, {
            outline: "none"
        })
    }

    const styleInput = Object.assign(
        Functions.cloneObject(
            Styles.inputOfForm
        ),
        props.otherStyles ? props.otherStyles : {}
    );

    return (
        <input type={props.type} name={props.name} placeholder={props.placeholder} onFocus={focus} style={
            Object.assign(
                styleInput,
                nowWidthWindow === "mobileScreen" ? Styles.inputOfForm_Mobile : {}
            )
        }/>
    )
}

function Textarea({
    isResize = true,
    ...props
}: {
    placeholder: string;
    isResize: boolean;
    name: string;
    otherStyles?: {}
}) {

    useEffect(() => {
        const styleTag = document.querySelector("style");

        styleTag?.append(`
            textarea::placeholder {
                font-family: Montserrat;
                font-size: 12px;
                line-height: 48px;
                font-weight: 700;
                text-transform: uppercase;
                color: #cccccc;
            }
        `)
    }, []);

    const textareaStyle = Object.assign(
        Functions.cloneObject(
            Styles.textarea
        ),
        isResize ? {} : {resize: "none"}
    );

    function focus(e: FocusEvent) {
        const target = e.currentTarget as HTMLElement;

        Functions.changeStyleElem(target, {
            outline: "none"
        })
    }

    return (
        <textarea name={props.name} autoComplete="off" autoCorrect="on" placeholder={props.placeholder} style={
            Object.assign(
                textareaStyle,
                props.otherStyles ? props.otherStyles : {}
            )
        } onFocus={focus}></textarea>
    )
}

function Button() {

    function enter(e: PointerEvent) {
        const target = e.currentTarget as HTMLElement;
        Functions.changeStyleElem(target, {
            color: "#7beec7",
            backgroundColor: "#ffffff",
            boxShadow: "0px 0px 0px 6px rgba(123, 238, 199, 1)"
        });
    }

    function leave(e: PointerEvent) {
        const target = e.currentTarget as HTMLElement;
        Functions.changeStyleElem(target, {
            color: "#ffffff",
            backgroundColor: "#7beec7",
            boxShadow: "0px 0px 0px 0px rgba(123, 238, 199, 1)"
        });
    }

    function focus(e: FocusEvent) {
        const target = e.currentTarget as HTMLElement;

        Functions.changeStyleElem(target, {
            outline: "none"
        })
    }

    return(
        <button type="submit" style={Styles.buttonOfForm} onPointerEnter={enter} onPointerLeave={leave} onFocus={focus}>send</button>
    )
}

function ContactInfo() {

    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <div className="main_conteiner__contactInfo" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_conteiner__contactInfo
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_conteiner__contactInfo_Mobile :
                nowWidthWindow === "tablet" ? Styles.main_conteiner__contactInfo_Tablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_conteiner__contactInfo_NormalScreen : {}
            )
        }>
            <h3 style={Styles.main_conteiner__contactInfo___h3}>CONTACT INFO</h3>
            <p className="contactInfo_description" style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.main_conteiner__contactInfo___p
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.main_conteiner__contactInfo___p_Mobile : {}
                )
            }>
                Lorem ipsum dolor sit amet, conse adipisicing elit. Libero incidunt quod ab mollitia quia dolorum conse.
            </p>
            <p className="contactInfo_info" style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.contactInfo_info
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.contactInfo_info_Mobile : {}
                )
            }>
            13D, Functional apartment, Unique colony,<br/>
            Agadir 86360<br/>
            +212 124-566-780<br/> 
            +212 124-566-780<br/>
            <span style={Styles.contactInfo_info__span}>
                email@website.com
            </span>
            </p>
        </div>
    )
}