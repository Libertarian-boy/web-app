import React, {useRef, useEffect} from "react";

import * as GlobalStyles from "./GlobalStyles";

export default function Preloader() {

    const preloaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const preloaderElem = preloaderRef.current;
        if (preloaderElem) {
            const preloaderChildren = preloaderElem.children as HTMLCollectionOf<HTMLElement>;
            Array.from(preloaderChildren).forEach( (item, index) => {
                setTimeout(() => {
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
                        delay: 500,
                        direction: "alternate",
                        iterations: Infinity
                    });
                }, index * 200);
            });
        }
    });

    return(
        <div id="preloader" style={
            GlobalStyles.preloader
        }>
            <div className="preloader_conteiner" style={
                GlobalStyles.preloaderConteiner
            } ref={preloaderRef}>
                <div className="preloader_conteiner__circles" style={GlobalStyles.preloaderConteinerCircles}></div>
                <div className="preloader_conteiner__circles" style={GlobalStyles.preloaderConteinerCircles}></div>
                <div className="preloader_conteiner__circles" style={GlobalStyles.preloaderConteinerCircles}></div>
                <div className="preloader_conteiner__circles" style={GlobalStyles.preloaderConteinerCircles}></div>
                <div className="preloader_conteiner__circles" style={GlobalStyles.preloaderConteinerCircles}></div>
            </div>
        </div>
    )
}