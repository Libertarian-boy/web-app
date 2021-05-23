import {useEffect, useContext} from "react";
import * as Contexts from "../globalThings/context";
import * as Functions from "../globalThings/functions";

export function BodyAndRootStyles() {
    
    const {nowWidthWindow} = useContext(Contexts.MediaContext);

    useEffect(() => {
        document.title = "Blog";

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

        Functions.downloaderBottomStart();
        
    }, [nowWidthWindow]);

    const orientationChangeFunction = () => {
        setTimeout(() => {
            Functions.setValueContextWindow(setNowWidthWindow, 30);
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
    const {setNowWidthWindow} = useContext(Contexts.MediaContext);

    const resizeFunction = (startWindowWidth: number) => {
        setTimeout(() => {
            if (startWindowWidth !== document.documentElement.clientWidth) {
                Functions.setValueContextWindow(setNowWidthWindow, 0);
                Functions.downloaderBottomStart();
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

    return null;
}