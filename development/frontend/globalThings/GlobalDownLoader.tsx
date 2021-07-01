import React, {FocusEventHandler, PointerEventHandler, useContext, useEffect, useRef} from "react";
import {LoaderContext, MediaContext} from "./context";
import {useLocation} from "react-router-dom";

import * as Functions from "./functions";
import * as GlobalStyles from "./GlobalStyles";

export default function DownLoader() {

    const downloaderRef = useRef<HTMLDivElement>(null);
    const {data} = useContext(LoaderContext);
    const {nowWidthWindow} = useContext(MediaContext);

    useEffect(() => {
        if (data) {
            const dataUp = data.up;

            if (dataUp) {
                const downloader = downloaderRef.current;
                if (downloader) {
                    Functions.changeStyleElem(downloader, {
                        bottom: 0
                    });
                }
            }
        }
    }, [data]);

    useEffect(() => {
        const clickDocument = () => {
            const downloader = downloaderRef.current;
            if (downloader) {
                Functions.changeStyleElem(downloader, {
                    bottom: `${-downloader.clientHeight}px`
                });
            }
        };

        document.addEventListener("click", clickDocument);

        return () => {
            document.removeEventListener("click", clickDocument);
        };
    });

    const click = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };

    return(
        <div id="downloader" style={
            Object.assign(
                Functions.cloneObject(
                    GlobalStyles.downloader
                ),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.downloaderMobile : {}
            )
        } ref={downloaderRef} onClick={click}>
            <ul className="downloader_inf" style={
                Object.assign(
                    Functions.cloneObject(
                        GlobalStyles.downloader_inf
                    ),
                    nowWidthWindow === "mobileScreen" ? GlobalStyles.downloader_infMobile : {}
                )
            }>
                <li style={
                    Functions.cloneObject(
                        GlobalStyles.downloader_inf__li
                    )
                }>Name: {data?.name}</li>
                <li style={
                    Functions.cloneObject(
                        GlobalStyles.downloader_inf__li
                    )
                }>Type: {data?.type}</li>
                <li style={
                    Functions.cloneObject(
                        GlobalStyles.downloader_inf__li
                    )
                }>Ext: {data?.ext}</li>
                <li style={
                    Functions.cloneObject(
                        GlobalStyles.downloader_inf__li
                    )
                }>Size: {data?.size}</li>
            </ul>
            <Button/>
        </div>
    )
}

function Button() {

    const {nowWidthWindow} = useContext(MediaContext);
    const {data} = useContext(LoaderContext);

    type HandlerType = PointerEventHandler<HTMLButtonElement> & FocusEventHandler<HTMLButtonElement>;

    const enter: HandlerType = (e) => {
        const elem = e.currentTarget;
        Functions.changeStyleElem(elem, {
            backgroundColor: "#ffffff",
            color: "#7beec7"
        });
    };

    const out: HandlerType = (e) => {
        const elem = e.currentTarget;
        Functions.changeStyleElem(elem, {
            backgroundColor: "#7beec7",
            color: "#ffffff"
        });
    };

    const click = () => {
        if (data?.src  && data?.ext) {
            Functions.downloadThing(data.src, data.ext);
        }
    };

    return(
        <button style={
            Object.assign(
                Functions.cloneObject(
                    GlobalStyles.downloader_button
                ),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.downloader_buttonMobile :
                nowWidthWindow === "tablet" ? GlobalStyles.downloader_buttonTablet : {}
            )
        }
        onPointerEnter={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? () => undefined : enter}
        onPointerLeave={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? () => undefined : out}
        onFocus={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? enter : () => undefined}
        onBlur={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? out : () => undefined}
        onSelect={() => false} onClick={click}>
            Download
        </button>
    )
}