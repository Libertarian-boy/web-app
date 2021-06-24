import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {appearElem} from "./functions";

export default function GlobalChangeLocationOn() {
    const location = useLocation();

    useEffect(() => {
        const header = document.querySelector("header") as HTMLElement,
            main = document.querySelector("main") as HTMLElement,
            footer = document.querySelector("footer") as HTMLElement;
        
        appearElem(header, document.documentElement.scrollTop >= document.documentElement.clientHeight / 2 ? 900 : 100);
        appearElem(main, 500);
        appearElem(footer, document.documentElement.scrollTop >= document.documentElement.clientHeight / 2 ? 100 : 900);
    }, [location.pathname]);

    return null;
}