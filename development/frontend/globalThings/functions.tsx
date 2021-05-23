import type * as Types from "./types";

import React, {useContext} from "react";
import {titleStyle, titleStyleH2, titleStyleH2Block, titleStyleP} from "../globalThings/GlobalStyles";
import {LoaderContext} from "./context";

export const cloneObject = (obj: object) => {
    if (obj === null || obj === undefined || typeof obj !== "object") return obj;

    const cloneObj = Object.assign({}, obj);

    return cloneObj;
};

export function changeStyleElem<Type extends HTMLElement | HTMLUListElement | HTMLDivElement | HTMLParagraphElement>(event: Type, style: object) {
    if (!event) return;
    const target = event;

    for (let key in style) {
        target.style[key] = style[key];
    };
};

export const createTagGoogleFonts = (href) => {
    const head = document.querySelector("head"), link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", href);

    head!.appendChild(link);
};

export const createTagLinkInHead = (relAttr, typeAttr, url) => {
    const head = document.querySelector("head"), link = document.createElement("link");
    link.setAttribute("rel", relAttr);
    link.setAttribute("type", typeAttr);
    link.setAttribute("href", url);

    head!.appendChild(link);
};

export const checkKeysOfObject = (object, validator) => {
    const validatorKeys = Object.keys(validator);

    for (let key of validatorKeys) {
        if (!(key in object)) {
            delete validator.key;
        }
    }

    return validator;
};

/* Специальные функции для item-ов в category */

export const hideElem = (elem) => {

    changeStyleElem(elem, {
        height: 0,
        width: 0
    });
};

export const showElem = (elem: HTMLElement, index: number) => {

    if (globalThis.wasWrited === false) {
        globalThis.elemHeight[index] = elem.clientHeight;
        globalThis.elemWidth[index] = elem.clientWidth;
    }

    changeStyleElem(elem, {
        height: globalThis.elemHeight[index] + "px",
        width: globalThis.elemWidth[index] + "px",
    });

    if (elem.parentElement) {
        if (elem.parentElement.children.length - index === 1) {
            globalThis.wasWrited = true;
        }
    }
};

/* Функция для установления контекста ширины окна */

export const setValueContextWindow = (setNowWidthWindow, timeout) => {
    setTimeout(() => {
        const windowWidth = document.documentElement.clientWidth;
        if (windowWidth > 1179) {
            setNowWidthWindow("computerLargeScreen");
        } else if (windowWidth <= 1179 && windowWidth > 800) {
            setNowWidthWindow("computerNormalScreen");
        } else if (windowWidth <= 800 && windowWidth > 500) {
            setNowWidthWindow("tablet");
        } else if (windowWidth <= 500) {
            setNowWidthWindow("mobileScreen");
        }
    }, timeout);
}

/* -------- */

export const appearElem = (elem, timeOut) => {
    if (typeof elem == null) return;
    setTimeout(changeStyleElem, timeOut, elem, {
        transition: "0.35s ease-in",
        transform: "translate(0, 0)",
        opacity: 1
    });
};

export const downloaderBottomStart = () => {
    const downloader = (document.getElementById("downloader") ?? null) as Types.HTMLDivElements;
    if (downloader) {
        changeStyleElem(downloader, {
            bottom: `-${
                Math.round((downloader.clientHeight + 7) * 100 / (document.documentElement.clientHeight / 1.5))
            }%`
        });
    }
};

export const downloadThing = (src: string, ext: string) => {
    if (ext.match(/png|jpeg|gif|pdf|docx/) && src) {
        const a = document.createElement("a");
        a.setAttribute("download", "true");
        a.setAttribute("href", src);
        a.click();
        a.remove();
    } else {
        alert("Don`t supported type of files or other problems");
    }
};

export class CreateUrlRequest {
    public url: string;
    public response?: null | Response;
    public ok?: boolean = false;
    public body?: string | JSON | {};
    public method?: string;
    public keepalive?: boolean;

    constructor(
        url = "",
        options = {
            body: "",
            method: "GET",
            keepalive: false
        } as {
            body?: string;
            method?: string;
            keepalive?: boolean | undefined
        }
    ) {
        this.url = url;
        this.body = options.body;
        this.method = options.method;
        this.keepalive = options.keepalive;
    }

    public async toFetch() {
        const response = await fetch(this.url, {
            body: this?.body ? this.body : undefined,
            method: this?.method ? this.method : "GET",
            keepalive: this?.keepalive ? this.keepalive : false
        });
        this.response = response;
        if (this.response!.ok) this.ok = true;
        return this;
    }

    public async toMethod(method: string) {
        if (this.response) {
            switch(method) {
                case "json":
                    return await this.response.json();
                case "text":
                    return await this.response.text();
                case "blob":
                    return await this.response.blob();
                case "formData":
                    return await this.response.formData();
                default:
                    return null;
            }
        } else {
            return null;
        }
    }
}

export function Img(props) {

    const {setData} = useContext(LoaderContext);

    const downloadImage = (e: { currentTarget: any; }) => {
        const image = e.currentTarget, src = image.getAttribute("src"), alt = image.getAttribute("alt"),
        type = image.tagName.toLowerCase() === "input" ? "file" : image.tagName.toLowerCase(), ext = src.match(/(?:\/)\w*(?:;)/i)[0].match(/\w+/)[0],
        size = `${image.clientHeight}:${image.clientWidth}`;
        const data = Object.create(null, {
            name: {
                value: alt
            },
            type: {
                value: type
            },
            ext: {
                value: ext
            },
            size: {
                value: size
            },
            up: {
                value: true
            },
            src: {
                value: src
            }
        });

        setData(data);
    };

    return(
        <img data-category={props.category} data-order={props.order} src={props.src} alt={props.alt} className={props.className} style={
            Object.assign({
                cursor: props.isCanBeDownload ? "pointer" : "auto"
            },
                typeof props.style === "object" ? props.style : {}
            )
        }
        onClick={
            props.isCanBeDownload ? downloadImage :
            props.clickFunc ? props.clickFunc : undefined
        }/>
    )
}

export function TitleText({
    id = "",
    ...props
}) {
    return(
        <div className="title" style={Object.assign(cloneObject(titleStyle), {
            ...props.otherStylesTitle
        })}>
            <h2 id={id ? id : undefined} style={
                    cloneObject(
                        titleStyleH2
                    )
                }>
                    {props.title}
                    <div className="title_underBlock" style={Object.assign(cloneObject(titleStyleH2Block), {
                        ...props.otherStylesTitleUnderBlock
                    })}/>
                </h2>
            <p style={
                Object.assign(
                    cloneObject(
                        titleStyleP
                    ),
                    {
                        ...props.titleStylePOthers
                    }
                )
            }>
                {props.description}
            </p>
        </div>
    )
}