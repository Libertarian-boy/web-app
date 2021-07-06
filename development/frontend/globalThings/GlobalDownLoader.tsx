import React, {FocusEventHandler, PointerEventHandler, useContext, useEffect, useRef} from "react";
import {LoaderContext, MediaContext} from "./context";
import {useLocation} from "react-router-dom";

import * as Functions from "./functions";
import * as GlobalStyles from "./GlobalStyles";

export default function DownLoader() {

    const downloaderRef = useRef<HTMLDivElement>(null);
    const downloader_buttonsRef = useRef<HTMLDivElement>(null);
    const {data} = useContext(LoaderContext);
    const {nowWidthWindow} = useContext(MediaContext);

    const clickDocumentAndCancel = () => {
        const downloader = downloaderRef.current;
        if (downloader) {
            Functions.changeStyleElem(downloader, {
                bottom: "-100%"
            });
        }
    };

    useEffect(() => {
        const downloader_buttons = downloader_buttonsRef.current as HTMLDivElement;
        const lastButton = downloader_buttons.children[1] as HTMLButtonElement;
        Functions.changeFlexGapToMargin(downloader_buttons, {
            rowGap: 0
        });
        Functions.changeFlexGapToMargin(lastButton, {
            margin: "15px 0 0 0",
        });

        return () => {
            Functions.changeFlexGapToMargin(downloader_buttons, {
                rowGap: "15px"
            });
            Functions.changeFlexGapToMargin(lastButton, {
                margin: 0
            });
        }
    }, []);

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

        document.addEventListener("click", clickDocumentAndCancel);

        return () => {
            document.removeEventListener("click", clickDocumentAndCancel);
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
                    Object.assign(
                        Functions.cloneObject(
                            GlobalStyles.downloader_inf__li
                        ),
                        nowWidthWindow === "mobileScreen" || nowWidthWindow === "computerNormalScreen"
                        || nowWidthWindow === "computerLargeScreen" ? GlobalStyles.downloader_inf__liMobileAndLargeAndMedium : {}
                    )
                }>Name: {data?.name}</li>
                <li style={
                    Object.assign(
                        Functions.cloneObject(
                            GlobalStyles.downloader_inf__li
                        ),
                        nowWidthWindow === "mobileScreen" || nowWidthWindow === "computerNormalScreen"
                        || nowWidthWindow === "computerLargeScreen" ? GlobalStyles.downloader_inf__liMobileAndLargeAndMedium : {}
                    )
                }>Type: {data?.type}</li>
                <li style={
                    Object.assign(
                        Functions.cloneObject(
                            GlobalStyles.downloader_inf__li
                        ),
                        nowWidthWindow === "mobileScreen" || nowWidthWindow === "computerNormalScreen"
                        || nowWidthWindow === "computerLargeScreen" ? GlobalStyles.downloader_inf__liMobileAndLargeAndMedium : {}
                    )
                }>Ext: {data?.ext}</li>
                <li style={
                    Object.assign(
                        Functions.cloneObject(
                            GlobalStyles.downloader_inf__li
                        ),
                        nowWidthWindow === "mobileScreen" || nowWidthWindow === "computerNormalScreen"
                        || nowWidthWindow === "computerLargeScreen" ? GlobalStyles.downloader_inf__liMobileAndLargeAndMedium : {}
                    )
                }>Size: {data?.size}</li>
            </ul>
            <div className="downloader_buttons" ref={downloader_buttonsRef} style={
                Object.assign(
                    Functions.cloneObject(
                        GlobalStyles.downloader_buttons
                    ),
                    nowWidthWindow === "mobileScreen" ? GlobalStyles.downloader_buttonsMobile :
                    nowWidthWindow === "tablet"  ? GlobalStyles.downloader_buttonsTablet :
                    {}
                )
            }>
                <Button type="download" />
                <Button type="cancel" downloader={downloaderRef.current} />
            </div>
        </div>
    )
}

function Button({type, downloader}: {type: "download" | "cancel"; downloader?: HTMLDivElement | null}) {

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
        if (type === "download") {
            if (data?.src  && data?.ext) {
                Functions.downloadThing(data.src, data.ext);
            }
        }
        if (type === "cancel") {
            if (downloader) {
                Functions.changeStyleElem(downloader, {
                    bottom: "-100%"
                });
            }
        }
    };

    return(
        <button style={
            Object.assign(
                Functions.cloneObject(
                    GlobalStyles.downloader_button
                ),
                nowWidthWindow === "mobileScreen" ? GlobalStyles.downloader_buttonMobile :
                nowWidthWindow === "tablet" ? GlobalStyles.downloader_buttonTablet :
                nowWidthWindow === "computerNormalScreen" ? GlobalStyles.downloader_buttonMedium : {}
            )
        }
        onPointerEnter={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? () => undefined : enter}
        onPointerLeave={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? () => undefined : out}
        onFocus={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? enter : () => undefined}
        onBlur={nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? out : () => undefined}
        onSelect={() => false} onClick={click}>
            {type === "download" ? "Download" : "Cancel"}
        </button>
    )
}