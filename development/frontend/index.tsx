import "regenerator-runtime/runtime";
import React from "react";
import {preloadReady} from "react-loadable";
import {hydrate} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./app";

let root: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

preloadReady()
    .then(
        () => {
            hydrate(
                <Router basename="/web-app">
                    <App/>
                </Router>, root
            );
        }
    )