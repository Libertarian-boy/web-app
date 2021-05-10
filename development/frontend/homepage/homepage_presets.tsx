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
    const {setNowWidthWindow} = useContext(Contexts.MediaContext);

    const orientationchangeFunction = () => {
        setTimeout(() => {
            const windowWidth = document.documentElement.clientWidth;
            const header = document.querySelector("header") ?? null, headerForward = (document.querySelector(".header_forward") ?? null) as HTMLElement,
            categories = (document.querySelector(".main_ourPortfolio__main") ?? null) as HTMLElement;

            Functions.setValueContextWindow(setNowWidthWindow, 30);

            if (windowWidth <= 800 && header && headerForward) {
                header.style.height = "auto"
                headerForward.style.height = "auto";
            }

            if (windowWidth <= 500 && categories) {
                categories.style.display = "none";
            } else if (categories) {
                categories.style.display = "flex";
            }

            /* Установка глобальных значений при изменении размера экрана */

            globalThis.wasPush = false;

            /* Для установки значения слайдера мобильной версии портфолио */

            globalThis.mobilePortfolioSlider = document.documentElement.clientWidth;

            /* Для установки значений width и height для мобильной версии портфолио */

            globalThis.mobilePortfolioSliderWidth = globalThis.mobilePortfolioSlider;
        }, 15);
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
    const {setNowWidthWindow} = useContext(Contexts.MediaContext);

    const resizeFunction = (startWindowWidth) => {
        setTimeout(() => {
            if (startWindowWidth !== document.documentElement.clientWidth) {
                const header = document.querySelector("header"), headerForward = document.querySelector(".header_forward") as HTMLElement,
                categories = document.querySelector(".main_ourPortfolio__main") as HTMLElement;
                
                Functions.setValueContextWindow(setNowWidthWindow, 0);
                /* Что нужно делать при изменении размера экрана */
        
                const windowWidth = document.documentElement.clientWidth;
    
                if (windowWidth <= 800 && header && headerForward) {
                    header.style.height = "auto";
                    headerForward.style.height = "auto";
                }
    
                if (windowWidth <= 500) {
                    categories.style.display = "none";
                } else {
                    categories.style.display = "flex";
                }
    
                /* Установка глобальных значений при изменении размера экрана */
    
                globalThis.wasPush = false;
    
                /* Для установки значения слайдера мобильной версии портфолио */
    
                globalThis.mobilePortfolioSlider = document.documentElement.clientWidth;
    
                /* Для установки значений width и height для мобильной версии портфолио */
    
                globalThis.mobilePortfolioSliderWidth = globalThis.mobilePortfolioSlider;
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

export function LetGlobalThis() {

    useEffect(() => {
        /* Для востановления прежних размеров при функции showElem */
        globalThis.elemHeight = [], globalThis.elemWidth = [], globalThis.wasWrited = false;

        /* Для установки data-order элементов Category */
        globalThis.order = 1, globalThis.wasFirstLine = false;

        /* Для фиксирования размеров отдельных блоков */
        globalThis.onceElemHeight = [], globalThis.onceElemWidth = [], globalThis.onceElemMargin = [], globalThis.wasPush = false;
    }, []);

    return null;
}