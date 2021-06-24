const root = document.getElementById("root");

import React, {useState, useContext, useEffect} from "react";
import ReactDom from "react-dom";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";

import * as Functions from "./globalThings/functions";
import * as Contexts from "./globalThings/context";

import Preloader from "./globalThings/preloader";
import DownLoader from "./globalThings/GlobalDownLoader";
import favicon from "./favicons/favicon.png";

const HomePage = React.lazy(() => import("./homepage/homepage"));
const AboutUs = React.lazy(() => import("./about_us/about_us"));
const Services = React.lazy(() => import("./services/services"));
const Contacts = React.lazy(() => import("./contact/contact"));
const Blog = React.lazy(() => import("./blog/blog"));
const MobileSwitcher = React.lazy(() => import("./blog/MobileSwitcher"));

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

    interface LoaderContextInterface {
        up: boolean;
        name: string;
        type: string;
        ext: string;
        size: string;
        src: string;
    }
    
    type LoaderContextInterfacePartialed = Partial<LoaderContextInterface>;

    const [nowWidthWindow, setNowWidthWindow] = useState<"" | "mobileScreen" | "tablet" | "computerNormalScreen" | "computerLargeScreen">("computerLargeScreen");
    const value = {nowWidthWindow, setNowWidthWindow};

    const [data, setData] = useState<null | LoaderContextInterfacePartialed>(null);
    const contextData = {data, setData};

    return(
        <Router basename="/web-app">
            <ScrollToHash/>
            <Contexts.MediaContext.Provider value={value}>
                <GlobalLoad/>
            <Contexts.LoaderContext.Provider value={contextData}>
            <Switch>
                <Route exact path="/Home">
                    <React.Suspense fallback={<Preloader/>}>
                        <HomePage/>
                    </React.Suspense>
                </Route>
                <Route exact path="/about us">
                    <React.Suspense fallback={<Preloader/>}>
                        <AboutUs/>
                    </React.Suspense>
                </Route>
                <Route exact path="/services">
                    <React.Suspense fallback={<Preloader/>}>
                        <Services/>
                    </React.Suspense>
                </Route>
                <Route exact path="/contact us">
                    <React.Suspense fallback={<Preloader/>}>
                        <Contacts/>
                    </React.Suspense>
                </Route>
                <Route exact path="/blog">
                    <React.Suspense fallback={<Preloader/>}>
                        <Blog/>
                        {nowWidthWindow === "mobileScreen" ? <MobileSwitcher/> : null}
                    </React.Suspense>
                </Route>
                <Route exact path="/">
                    <Redirect from="/" to="/Home"/>
                </Route>
            </Switch>
            <DownLoader />
            </Contexts.LoaderContext.Provider>
            </Contexts.MediaContext.Provider>
        </Router>
    )
}

function GlobalLoad() {
    const {nowWidthWindow, setNowWidthWindow} = useContext(Contexts.MediaContext);
    const location = useLocation();

    const fullLoadFunction = () => {
        const root = document.getElementById("root") as HTMLDivElement;

        if (!/blog/i.test(location.pathname) && !/blog/i.test(location.hash)) {
            Functions.changeStyleElem(root, {
                overflowX: "hidden"
            });
        }

        const header = document.querySelector("header") as HTMLElement,
              main = document.querySelector("main") as HTMLElement,
              footer = document.querySelector("footer") as HTMLElement;
            
            Functions.appearElem(header, document.documentElement.scrollTop >= document.documentElement.clientHeight / 2 ? 900 : 100);
            Functions.appearElem(main, 500);
            Functions.appearElem(footer, document.documentElement.scrollTop >= document.documentElement.clientHeight / 2 ? 100 : 900);

            Functions.setValueContextWindow(setNowWidthWindow, 0);
            Functions.downloaderBottomStart();

            const theDreamTeam_down__slider = (document.querySelector(".theDreamTeam_down__slider") ?? null) as HTMLDivElement;
            const main_conteiner__info = (document.querySelector(".main_conteiner__info") ?? null) as HTMLDivElement;

            if (theDreamTeam_down__slider) {
                if (nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet") {
                    Functions.changeStyleElem(theDreamTeam_down__slider, {
                        maxWidth: `${Math.round(document.documentElement.clientWidth * 85 / 100)}px`
                    });
                }
            }

            if (!/blog/i.test(location.pathname) && !/blog/i.test(location.hash)) {
                Functions.changeStyleElem(root, {
                    overflowX: "auto"
                });
            } else {
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
    });

    useEffect(() => {
        const styleTag = document.createElement("style");

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

        if (document.documentElement) {
            document.documentElement.append(styleTag);
        } else {
            document.body.append(styleTag);
        }
    }, []);

    const Montserrat = "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
    const OpenSans = "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap";
    
    Functions.createTagGoogleFonts(Montserrat);
    Functions.createTagGoogleFonts(OpenSans);
    Functions.createTagLinkInHead("apple-touch-icon", "image/png", favicon);
    Functions.createTagLinkInHead("shortcut icon", "image/png", favicon);

    return null;
}

ReactDom.hydrate(<App/>, root);