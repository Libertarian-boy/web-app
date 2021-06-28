import React, {useState, useContext, useEffect} from "react";
import {
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";

import * as Functions from "./globalThings/functions";
import * as Contexts from "./globalThings/context";
import {LoaderContextInterfacePartialed} from "./globalThings/types";

/* import Preloader from "./globalThings/preloader"; */
import DownLoader from "./globalThings/GlobalDownLoader";
import favicon from "./favicons/favicon.png";

import HomePage from "./homepage/homepage";
import AboutUs from "./about_us/about_us";
import Services from "./services/services";
import Contacts from "./contact/contact";
import Blog from "./blog/blog";
import MobileSwitcher from "./blog/MobileSwitcher";

/* const HomePage = React.lazy(() => import("./homepage/homepage"));
const AboutUs = React.lazy(() => import("./about_us/about_us"));
const Services = React.lazy(() => import("./services/services"));
const Contacts = React.lazy(() => import("./contact/contact"));
const Blog = React.lazy(() => import("./blog/blog"));
const MobileSwitcher = React.lazy(() => import("./blog/MobileSwitcher")); */

/* Функция-компонент для пермещения по якорям */
function ScrollToHash() {

    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const {hash} = location;
            if (hash) {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);

                if (element) {
                    window.scrollTo({
                        behavior: "smooth",
                        top: pageYOffset + element.getBoundingClientRect().top
                    });
                }
            }
        }, 100)
    }, [location]);

    return null;
}

export default function App() {

    const [nowWidthWindow, setNowWidthWindow] = useState<"" | "mobileScreen" | "tablet" | "computerNormalScreen" | "computerLargeScreen">("computerLargeScreen");
    const value = {nowWidthWindow, setNowWidthWindow};

    const [data, setData] = useState<null | LoaderContextInterfacePartialed>(null);
    const contextData = {data, setData};

    return(
        <>
            <ScrollToHash/>
            <Contexts.MediaContext.Provider value={value}>
                <GlobalLoad/>
            <Contexts.LoaderContext.Provider value={contextData}>
            <Switch>
                <Route path="/Home">
                    <HomePage/>
                </Route>
                <Route path="/about us">
                    <AboutUs/>
                </Route>
                <Route path="/services">
                    <Services/>
                </Route>
                <Route path="/contact us">
                    <Contacts/>
                </Route>
                <Route path="/blog">
                    <Blog/>
                    {nowWidthWindow === "mobileScreen" ? <MobileSwitcher/> : null}
                </Route>
                <Route path="/">
                    <Redirect from="/" to="/Home"/>
                </Route>
            </Switch>
            <DownLoader />
            </Contexts.LoaderContext.Provider>
            </Contexts.MediaContext.Provider>
        </>
    )
}

function GlobalLoad() {
    const {nowWidthWindow, setNowWidthWindow} = useContext(Contexts.MediaContext);
    const location = useLocation();

    const fullLoadFunction = () => {
        const root = document.getElementById("root");

        if (!/blog/i.test(location.pathname) && !/blog/i.test(location.hash) && root) {
            Functions.changeStyleElem(root, {
                overflowX: "hidden"
            });
        }

        const header = document.querySelector("header"),
              main = document.querySelector("main"),
              footer = document.querySelector("footer");
            
            if (header) {
                Functions.appearElem(header, document.documentElement.scrollTop >= document.documentElement.clientHeight / 2 ? 900 : 100);
            }
            if (main) {
                Functions.appearElem(main, 500);
            }
            if (footer) {
                Functions.appearElem(footer, document.documentElement.scrollTop >= document.documentElement.clientHeight / 2 ? 100 : 900);
            }

            Functions.setValueContextWindow(setNowWidthWindow, 0);
            Functions.downloaderBottomStart();

            const theDreamTeam_down__slider = document.querySelector(".theDreamTeam_down__slider") as HTMLElement;
            const main_conteiner__info = document.querySelector(".main_conteiner__info") as HTMLElement;

            if (theDreamTeam_down__slider) {
                if (nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet") {
                    Functions.changeStyleElem(theDreamTeam_down__slider, {
                        maxWidth: `${Math.round(document.documentElement.clientWidth * 85 / 100)}px`
                    });
                }
            }

            if (!/blog/i.test(location.pathname) && !/blog/i.test(location.hash) && root) {
                Functions.changeStyleElem(root, {
                    overflowX: "auto"
                });
            } else if (main_conteiner__info) {
                Functions.changeStyleElem(main_conteiner__info, {
                    height: document.documentElement.clientHeight - 35 + "px",
                    maxHeight: document.documentElement.clientHeight - 35 + "px"
                });
            }
    };

    useEffect(() => {
        window.addEventListener("load", fullLoadFunction);

        return () => {
            window.removeEventListener("load", fullLoadFunction);
        }
    }, []);

    useEffect(() => {
        const styleTag = document.createElement("style");
        const htmlTag = document.documentElement;

        if (styleTag) {
            styleTag.append(`
                html::-webkit-scrollbar {
                    background-color: #60606e;
                    width: 8px;
                }

                html::-webkit-scrollbar-button, .scrollConteiner::-webkit-scrollbar-button {
                    display: none;
                }

                html::-webkit-scrollbar-thumb {
                    background-color: #7beec7;
                    border-radius: 5px;
                    height: 10px;
                }

                html::-webkit-scrollbar-thumb:hover, .scrollConteiner::-webkit-scrollbar-thumb:hover {
                    background-color: #d2f9ec;
                }

                .scrollConteiner::-webkit-scrollbar {
                    background-color: #60606e;
                    width: 4px;
                }

                .scrollConteiner::-webkit-scrollbar-thumb {
                    background-color: #7beec7;
                    border-radius: 5px;
                    height: 10px;
                }
            `);
        }

        if (styleTag) {
            if (htmlTag) {
                htmlTag.append(styleTag);
            } else {
                document.body.append(styleTag);
            }
        }
    }, []);

    useEffect(() => {
        const Montserrat = "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
        const OpenSans = "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap";
        
        Functions.createTagGoogleFonts(Montserrat);
        Functions.createTagGoogleFonts(OpenSans);
        Functions.createTagLinkInHead("apple-touch-icon", "image/png", favicon);
        Functions.createTagLinkInHead("shortcut icon", "image/png", favicon);
    });

    return null;
}