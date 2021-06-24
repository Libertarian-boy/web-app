import {useEffect, useContext} from "react";
import * as Functions from "../globalThings/functions";
import * as Contexts from "../globalThings/context";

export function BodyAndRootStyles() {

    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        document.title = "Homepage";

        const body = document.querySelector("body") as HTMLElement, root = document.getElementById("root") as HTMLElement;

        Functions.changeStyleElem(body, {
            position: "relative",
            height: "100%",
            width: "100%",
            margin: 0,
            padding: 0,
            boxSizing: "content-box",
            scrollBehavior: "smooth"
        });

        Functions.changeStyleElem(root, {
            display: "grid",
            gridTemplateAreas: " 'header' 'main' 'footer' ",
            gridTemplateRows: nowWidthWindow === "mobileScreen" ? "auto auto auto" :
            nowWidthWindow === "tablet" ? "auto auto auto" : "850px auto 155px",
            gridTemplateColumns: "100%",
            position: "relative",
            height: "100%",
            width: "100%",
            boxSizing: "content-box",
            scrollBehavior: "smooth"
        });

    }, [nowWidthWindow]);

    return null;
}

export function OrientationChange() {
    const {nowWidthWindow, setNowWidthWindow} = useContext(Contexts.MediaContext);

    const orientationchangeFunction = () => {
        setTimeout(() => {
            const header = document.querySelector("header") ?? null, headerForward = (document.querySelector(".header_forward") ?? null) as HTMLElement;
            Functions.setValueContextWindow(setNowWidthWindow, 0);

            if (nowWidthWindow === "tablet" && header && headerForward) {
                header.style.height = "auto"
                headerForward.style.height = "auto";
            }
        }, 10);
    };

    useEffect(() => {
        window.addEventListener("orientationchange", orientationchangeFunction);

        return () => {
            window.removeEventListener("orientationchange", orientationchangeFunction)
        }
    });

    return null;
}

export function Resize() {
    const {nowWidthWindow, setNowWidthWindow} = useContext(Contexts.MediaContext);

    const resizeFunction = (startWindowWidth: number) => {
        setTimeout(() => {
            if (startWindowWidth !== document.documentElement.clientWidth) {
                const header = document.querySelector("header"), headerForward = document.querySelector(".header_forward") as HTMLElement;
                Functions.setValueContextWindow(setNowWidthWindow, 0);
                if (nowWidthWindow === "tablet" && header && headerForward) {
                    header.style.height = "auto";
                    headerForward.style.height = "auto";
                }
            }
        }, 50);
    };

    const callResizeFunction = () => {
        const startWindowWidth = document.documentElement.clientWidth;
        resizeFunction.call(null, startWindowWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", callResizeFunction);

        return () => {
            window.removeEventListener("resize", callResizeFunction);
        }
    });

    return null;
}