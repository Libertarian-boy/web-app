import React, {CSSProperties, useContext, useEffect, useState, forwardRef, ReactElement, Dispatch, SetStateAction, PointerEventHandler} from "react";
import {titleStyle, titleStyleH2, titleStyleH2Block, titleStyleP} from "../globalThings/GlobalStyles";
import {LoaderContext} from "./context";

export const cloneObject = (obj: object) => {
    if (obj === null || obj === undefined || typeof obj !== "object") return obj;

    const cloneObj = Object.assign({}, obj);

    return cloneObj;
};

export function changeStyleElem<Type extends HTMLElement | SVGAElement>(elem: Type, style: CSSProperties) {
    if (!elem) return;
    const entriesOfStyle = Object.entries(style);

    for (let [prop, value] of entriesOfStyle) {
        elem.style[prop as "textAlign"] = value;
    }
};

export const createTagGoogleFonts = (href: string) => {
    const head = document.querySelector("head"), link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", href);

    head!.appendChild(link);
};

export const createTagLinkInHead = (relAttr: string, typeAttr: string, url: string) => {
    const head = document.querySelector("head"), link = document.createElement("link");
    link.setAttribute("rel", relAttr);
    link.setAttribute("type", typeAttr);
    link.setAttribute("href", url);

    head!.appendChild(link);
};

export const checkKeysOfObject = <ObjectType extends Object, ValidatorType extends Object>(object: ObjectType, validator: ValidatorType) => {
    const validatorKeys = Object.keys(validator);

    for (let i = 0; i < validatorKeys.length; i++) {
        if ( !(validatorKeys[i] in object) ) {
            delete validatorKeys[i];
        }
    }

    return validator;
};

export const setValueContextWindow = (setNowWidthWindow: Dispatch<SetStateAction<"" | "mobileScreen" | "tablet" | "computerNormalScreen" | "computerLargeScreen">>, timeout: number) => {
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

export const appearElem = (elem: HTMLElement, timeOut: number) => {
    if (typeof elem == null) return;
    setTimeout(changeStyleElem, timeOut, elem, {
        transition: "0.35s ease-in",
        transform: "translate(0, 0)",
        opacity: 1
    });
};

export const downloaderBottomStart = () => {
    const downloader = (document.getElementById("downloader") ?? null) as HTMLDivElement;
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
    public body?: string | JSON | {} | undefined;
    public method?: string | undefined;
    public keepalive?: boolean | undefined;
    public headers?: any | undefined;
    public signal?: AbortSignal | undefined;

    constructor(
        url = "",
        options = {
            body: undefined,
            method: "GET",
            keepalive: false,
            headers: {},
            signal: undefined
        } as {
            body?: string | JSON | {} | undefined;
            method?: string;
            keepalive?: boolean | undefined;
            headers?: any;
            signal?: AbortSignal | undefined;
        }
    ) {
        this.url = url;
        this.body = options.body;
        this.method = options.method;
        this.keepalive = options.keepalive;
        this.headers = options.headers;
        this.signal = options.signal;
    }

    public async toFetch() {
        const response = await fetch(this.url, {
            body: this?.body ?? undefined,
            method: this?.method ?? "GET",
            keepalive: this?.keepalive ?? false,
            headers: this?.headers ?? {},
            signal: this?.signal ?? undefined
        });
        this.response = response;
        if (this.response!.ok) this.ok = true;
        return this;
    }

    public async toMethod(method: "json" | "text" | "blob" | "formData") {
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

export const Img = forwardRef(function Image (props: {
    category?: any;
    order?: any;
    src: any;
    alt?: any;
    className?: any;
    isCanBeDownload?: boolean;
    style?: CSSProperties;
}, ref?: React.ForwardedRef<HTMLImageElement>) {

    const {setData} = useContext(LoaderContext);

    const downloadImage: PointerEventHandler<HTMLImageElement> = (e) => {
        const image = e.currentTarget, src = image.getAttribute("src") as any, alt = image.getAttribute("alt"),
        type = image.tagName.toLowerCase() === "input" ? "file" : image.tagName.toLowerCase(), ext = src.match(/(?:\/)\w*(?:;)/i)[0].match(/\w+/)[0],
        size = `${image.clientHeight}:${image.clientWidth}`;
        const data = Object.create(null, {
            name: {
                value: alt ?? "image"
            },
            type: {
                value: type ?? "not known"
            },
            ext: {
                value: ext ?? "alernative"
            },
            size: {
                value: size ?? "not known"
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
        <img ref={ref as React.ForwardedRef<HTMLImageElement>} src={props.src as string} alt={props.alt} className={props.className} style={
            Object.assign({
                cursor: props.isCanBeDownload ? "pointer" : "auto"
            },
                typeof props.style === "object" ? props.style : {}
            )
        }
        onClick={props.isCanBeDownload ? downloadImage : () => undefined}/>
    )
});

export function TitleText({
    id = "",
    ...props
}) {
    return(
        <div className="title" style={Object.assign(cloneObject(titleStyle), {
            ...props.otherStylesTitle
        })}>
            <h2 id={id} style={
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