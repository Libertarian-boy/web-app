import React from "react";
import {hydrate} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./app";

let root: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

hydrate(
    <Router basename="/web-app">
        <App/>
    </Router>, root
);