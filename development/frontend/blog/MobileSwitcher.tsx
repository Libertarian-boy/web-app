import React, {Dispatch, SetStateAction, useState, useEffect} from "react";
import {changeStyleElem} from "../globalThings/functions";
import IonIcon from "@reacticons/ionicons";
import * as Styles from "./style";

type MobileSwitcherType = "blogs" | "info"

export default function MobileSwitcher() {
    const [nowVisualBlock, setNowVisualBlock] = useState<MobileSwitcherType>("blogs");

    useEffect(() => {
        const blogs = document.querySelector(".main_conteiner__blogs") as HTMLElement;
        const info = document.querySelector(".main_conteiner__info") as HTMLElement;
        const main_conteiner = document.querySelector(".main_conteiner") as HTMLDivElement;

        if (nowVisualBlock === "info") {
            changeStyleElem(blogs, {
                transform: "translateX(-110%)",
            });
            changeStyleElem(info, {
                transform: "translateX(-100%)"
            });
            changeStyleElem(main_conteiner, {
                maxHeight: `${info.offsetHeight}px`,
                height: `${info.offsetHeight}px`
            });
        } else {
            changeStyleElem(blogs, {
                transform: "translateX(0)",
            });
            changeStyleElem(info, {
                transform: "translateX(0)"
            });
            changeStyleElem(main_conteiner, {
                maxHeight: "none",
                height: "auto"
            });
        }

        return () => {
            changeStyleElem(main_conteiner, {
                maxHeight: "none",
                height: "auto"
            });
        }
    }, [nowVisualBlock]);

    return(
        <>
            <MobileSwitcherToBlogs nowVisualBlock={nowVisualBlock} setNowVisualBlock={setNowVisualBlock} />
            <MobileSwitcherToInfo nowVisualBlock={nowVisualBlock} setNowVisualBlock={setNowVisualBlock} />
        </>
    )
}

function MobileSwitcherToBlogs({setNowVisualBlock, nowVisualBlock}: {setNowVisualBlock: Dispatch<SetStateAction<MobileSwitcherType>>, nowVisualBlock: MobileSwitcherType}) {
    return(
        <div className="switcherToBlogs" style={Styles.switcherToBlogs} >
            <div className="switcherToBlogs_circle" style={Styles.switcherToBlogsAndInfo_circle}>
                <IonIcon name={nowVisualBlock === "blogs" ? "list" : "arrow-back"} style={Styles.switcherToBlogsAndInfoIcon} className="switcherToBlogsIcon"
                onClick={() => setNowVisualBlock("blogs")} />
            </div>
        </div>
    )
}

function MobileSwitcherToInfo({setNowVisualBlock, nowVisualBlock}: {setNowVisualBlock: Dispatch<SetStateAction<MobileSwitcherType>>, nowVisualBlock: MobileSwitcherType}) {
    return(
        <div className="switcherToInfo" style={Styles.switcherToInfo}>
            <div className="switcherToInfo_circle" style={Styles.switcherToBlogsAndInfo_circle}>
                <IonIcon name={nowVisualBlock === "info" ? "information" : "arrow-forward"} style={Styles.switcherToBlogsAndInfoIcon} className="switcherToInfoIcon"
                onClick={() => setNowVisualBlock("info")}/>
            </div>
        </div>
    )
}