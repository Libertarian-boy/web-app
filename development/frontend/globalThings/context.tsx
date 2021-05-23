import React from "react";
interface LoaderContextInterface {
    up: boolean;
    name: string;
    type: string;
    ext: string;
    size: string;
    src: string;
}

type LoaderContextInterfacePartialed = Partial<LoaderContextInterface>;

export const MediaContext = React.createContext({
    nowWidthWindow: "",
    setNowWidthWindow: (_: any) => {}
});

export const HeaderContext = React.createContext({
    down: null,
    setDown: (_: any) => {}
});

export const LoaderContext = React.createContext({
    data: {} as (LoaderContextInterfacePartialed | null),
    setData: (_: any) => {}
});