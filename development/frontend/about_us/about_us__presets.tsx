import {useEffect, useContext} from "react";
import * as Contexts from "../globalThings/context";
import * as Functions from "../globalThings/functions";

export function BodyAndRootStyles() {
    
    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        document.title = "About us";

        const body = document.querySelector("body") as HTMLElement, root = document.getElementById("root") as HTMLElement;

        Functions.changeStyleElem(body, {
            position: "relative",
            height: "100%",
            width: "100%",
            margin: 0,
            padding: 0,
            boxSizing: "content-box"
        });

        Functions.changeStyleElem(root, {
            display: "grid",
            gridTemplateAreas: " 'header' 'main' 'footer' ",
            gridTemplateRows: nowWidthWindow === "mobileScreen" ? "auto auto auto" :
            nowWidthWindow === "tablet" ? "auto auto auto" : "500px auto 155px",
            gridTemplateColumns: "100%",
            position: "relative",
            height: "100%",
            width: "100%",
            boxSizing: "content-box"
        });

    }, [nowWidthWindow]);

    return null;
}

export function OrientationChange() {
    const {nowWidthWindow, setNowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        const theDreamTeam_down__slider = (document.querySelector(".theDreamTeam_down__slider") ?? null) as HTMLElement;
        if (theDreamTeam_down__slider) {
            if (nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet") {
                Functions.changeStyleElem(theDreamTeam_down__slider, {
                    maxWidth: `${Math.round(document.documentElement.clientWidth * 85 / 100)}px`
                });
            } else {
                Functions.changeStyleElem(theDreamTeam_down__slider, {
                    maxWidth: "551px"
                });
            }
        };

        Functions.downloaderBottomStart();
    }, [nowWidthWindow]);

    const orientationChangeFunction = () => {
        setTimeout(() => {
            Functions.setValueContextWindow(setNowWidthWindow, 30);

            if (globalThis.animation1) {
                globalThis.animation1.cancel();
            };

            if (globalThis.animation2) {
                globalThis.animation2.cancel();
            };
        }, 15);
    };

    useEffect(() => {
        window.addEventListener("orientationchange", orientationChangeFunction);

        return () => {
            window.removeEventListener("orientationchange", orientationChangeFunction);
        };
    });

    return null;
};

export function Resize() {
    const {nowWidthWindow, setNowWidthWindow} = useContext(Contexts.MediaContext);

    const resizeFunction = (startWindowWidth) => {
        setTimeout(() => {
            if (startWindowWidth !== document.documentElement.clientWidth) {
                Functions.setValueContextWindow(setNowWidthWindow, 0);
                Functions.downloaderBottomStart();

                const theDreamTeam_down__slider = (document.querySelector(".theDreamTeam_down__slider") ?? null) as HTMLElement;
                if (theDreamTeam_down__slider) {
                    if (nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet") {
                        Functions.changeStyleElem(theDreamTeam_down__slider, {
                            maxWidth: `${Math.round(document.documentElement.clientWidth * 85 / 100)}px`
                        });
                    } else {
                        Functions.changeStyleElem(theDreamTeam_down__slider, {
                            maxWidth: "551px"
                        });
                    }
                };

                if (globalThis.animation1) {
                    globalThis.animation1.cancel();
                };
    
                if (globalThis.animation2) {
                    globalThis.animation2.cancel();
                };
            }
        }, 15);
    };

    const callResizeFunction = () => {
        const startWindowWidth = document.documentElement.clientWidth;
        resizeFunction.call(null, startWindowWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", callResizeFunction);

        return () => {
            window.removeEventListener("resize", callResizeFunction);
        };
    });


    return null;
}

export function LetGlobalThis() {

    useEffect(() => {
        /* Для установления глобальных анимациий, с целью их отмены */

        globalThis.animation1 = null, globalThis.animation2 = null;
    });

    return null;
}