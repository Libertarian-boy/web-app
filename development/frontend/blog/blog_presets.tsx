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
        if (nowWidthWindow !== "mobileScreen") {
            const main_conteiner__blogs = document.querySelector(".main_conteiner__blogs") as HTMLDivElement;
            const main_conteiner__info = document.querySelector(".main_conteiner__info") as HTMLDivElement;
            main_conteiner__blogs.style.transform = "translateX(0)";
            main_conteiner__info.style.transform = "translateX(0)"
        }
    }, [nowWidthWindow]);

    const orientationChangeFunction = () => {
        setTimeout(() => {
            Functions.setValueContextWindow(setNowWidthWindow, 0);
            const main_conteiner__info = document.querySelector(".main_conteiner__info") as HTMLDivElement;
            Functions.changeStyleElem(main_conteiner__info, {
                height: document.documentElement.clientHeight - 35 + "px",
                maxHeight: document.documentElement.clientHeight - 35 + "px"
            });
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

    useEffect(() => {
        if (nowWidthWindow !== "mobileScreen") {
            const main_conteiner__blogs = document.querySelector(".main_conteiner__blogs") as HTMLDivElement;
            const main_conteiner__info = document.querySelector(".main_conteiner__info") as HTMLDivElement;
            main_conteiner__blogs.style.transform = "translateX(0)";
            main_conteiner__info.style.transform = "translateX(0)";
        }
    }, [nowWidthWindow]);

    const resizeFunction = (startWindowWidth: number, startWindowHeight: number) => {
        setTimeout(() => {
            if (startWindowWidth !== document.documentElement.clientWidth) {
                Functions.setValueContextWindow(setNowWidthWindow, 0);
            }
            if (startWindowHeight !== document.documentElement.clientHeight) {
                const main_conteiner__info = document.querySelector(".main_conteiner__info") as HTMLDivElement;
                Functions.changeStyleElem(main_conteiner__info, {
                    height: document.documentElement.clientHeight - 35 + "px",
                    maxHeight: document.documentElement.clientHeight - 35 + "px"
                });
            }
            Functions.downloaderBottomStart();
        }, 15);
    };

    const callResizeFunction = () => {
        const startWindowWidth = document.documentElement.clientWidth, startWindowHeight = document.documentElement.clientHeight;
        resizeFunction.call(null, startWindowWidth, startWindowHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", callResizeFunction);

        return () => {
            window.removeEventListener("resize", callResizeFunction);
        };
    });


    return null;
}