import React, {useRef, useEffect, useContext} from "react";

import * as GlobalStyles from "./GlobalStyles";
import {cloneObject} from "./functions";
import {MediaContext} from "./context";

export default function Preloader() {

    const preloaderRef = useRef(null);

    const {nowWidthWindow} = useContext(MediaContext);

    useEffect(() => {
        const preloaderChildren = preloaderRef.current.children as HTMLCollectionOf<HTMLElement>;

        let loadingProcess = setTimeout(function process() {
            let time = 0;

            Array.from(preloaderChildren).forEach( item => {

                item.animate([
                    {
                        transform: "translateY(0)"
                    },
                    {
                        transform: "translateY(25px)"
                    },
                    {
                        transform: "translateY(0)"
                    },
                    {
                        transform: "translateY(-25px)"
                    },
                    {
                        transform: "translateY(0)"
                    }
                ], {
                    duration: 1000,
                    easing: "linear",
                    fill: "forwards",
                    delay: time * 250
                })

                time++;
            });

            if (document.readyState === "complete") {
                clearTimeout(loadingProcess);
            } else {
                loadingProcess = setTimeout(process, 3500);
            }
        }, 0);
    });

    return(
        <div id="preloader" style={
            GlobalStyles.preloader
        }>
            <div className="preloader_conteiner" style={
                GlobalStyles.preloaderConteiner
            } ref={preloaderRef}>
                <div className="preloader_conteiner__circles" style={
                    Object.assign(
                        cloneObject(GlobalStyles.preloaderConteinerCircles),
                        nowWidthWindow === "mobileScreen" ? GlobalStyles.preloaderConteinerCirclesMobile : {}
                    )
                }></div>
                <div className="preloader_conteiner__circles" style={
                    Object.assign(
                        cloneObject(GlobalStyles.preloaderConteinerCircles),
                        nowWidthWindow === "mobileScreen" ? GlobalStyles.preloaderConteinerCirclesMobile : {}
                    )
                }></div>
                <div className="preloader_conteiner__circles" style={
                    Object.assign(
                        cloneObject(GlobalStyles.preloaderConteinerCircles),
                        nowWidthWindow === "mobileScreen" ? GlobalStyles.preloaderConteinerCirclesMobile : {}
                    )
                }></div>
                <div className="preloader_conteiner__circles" style={
                    Object.assign(
                        cloneObject(GlobalStyles.preloaderConteinerCircles),
                        nowWidthWindow === "mobileScreen" ? GlobalStyles.preloaderConteinerCirclesMobile : {}
                    )
                }></div>
                <div className="preloader_conteiner__circles" style={
                    Object.assign(
                        cloneObject(GlobalStyles.preloaderConteinerCircles),
                        nowWidthWindow === "mobileScreen" ? GlobalStyles.preloaderConteinerCirclesMobile : {}
                    )
                }></div>
            </div>
        </div>
    )
}