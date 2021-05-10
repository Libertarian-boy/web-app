import React from "react";

export const MediaContext = React.createContext({
    value: null,
    setValue: () => {}
});

export const HeaderContext = React.createContext({
    down: null,
    setDown: () => {}
});

export const LoaderContext = React.createContext({
    data: null,
    setData: () => {}
});