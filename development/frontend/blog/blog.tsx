import React, {useEffect, useRef, useState, useContext, KeyboardEvent, CSSProperties, useReducer, PointerEvent, Reducer, Dispatch, SetStateAction, MouseEventHandler, PointerEventHandler, FocusEventHandler} from "react";
import IonIcon from "@reacticons/ionicons";

import * as BlogPresets from "./blog_presets";
import * as Styles from "./style";
import * as Functions from "../globalThings/functions";

import GlobalChangeLocation from "../globalThings/GlobalChangeLocationOn";
import GlobalHeader from "../globalThings/GlobalHeader";
import GlobalPreFooter from "../globalThings/GlobalPrefooter";
import GlobalFooter from "../globalThings/GlobalFooter";
import SourcePreloader from "../globalThings/SourcePreloader";

import {MediaContext} from "../globalThings/context";

import * as InitalStates from "./initalStateOfPost";
import * as Reducers from "./reducerPostOfBlog";
import type * as TypesOfBlog from "./types";

export default function Blog() {
    return(
        <React.Fragment>
            {/* Для установки стилей для body и root */}
            <BlogPresets.BodyAndRootStyles/>
            {/* Проверка и изменения при изменении ориентации экрана*/}
            <BlogPresets.OrientationChange/>
            {/* Проверка и изменения при изменении размера экрана */}
            <BlogPresets.Resize/>
            {/* Для анимации появления header, main, footer */}
            <GlobalHeader h1="akad." h2="BLOG POSTS" p="HOME / BLOG"/>
            <Main/>
            <GlobalFooter/>
            <GlobalChangeLocation/>
        </React.Fragment>
    )
}

function Main() {
    return(
        <main style={
            Functions.cloneObject(
                Styles.main
            )
        }>
            <MainConteiner/>
            <GlobalPreFooter/>
        </main>
    )
}

function MainConteiner() {
    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <div className="main_conteiner" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_conteiner
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_conteinerMobile :
                nowWidthWindow === "tablet" ? Styles.main_conteinerTablet : {}
            )
        }>
            <MainConteinerBlogs/>
            <MainConteinerInfo/>
        </div>
    )
}

function MainConteinerInfo() {
    const {nowWidthWindow} = useContext(MediaContext);

    useEffect(() => {
        const style = document.querySelector("style");
        style!.append(`
            .main_conteiner__info::-webkit-scrollbar, .main_conteiner__info::-webkit-scrollbar-button,
            .main_conteiner__info::-webkit-scrollbar-thumb {
                display: none;
            }
        `);
    }, []);

    return(
        <div className="main_conteiner__info" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_conteiner__info
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_conteiner__infoMobile :
                nowWidthWindow === "tablet" ? Styles.main_conteiner__infoTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_conteinerNormal : {}
            )
        }>
            <SearchInput/>
            <Posts/>
            <ListOfTypesBlog title="categories" style={{
                margin: "52px 0 0 0"
            }}/>
            <Tags/>
            <ListOfTypesBlog title="archives" style={{
                margin: "50px 0 0 0"
            }}/>
        </div>
    )
}

function SearchInput() {
    const {nowWidthWindow} = useContext(MediaContext);
    const divRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const style = document.querySelector("style");
        if (style) {
            style.append(`
                input[type=search]::placeholder {
                    opacity: 0.5;
                    font-family: Montserrat, sans-serif;
                    font-size: 12px;
                    line-height: 48px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #60606e;
                }

                input::-webkit-calendar-picker-indicator {
                    display: none
                }

                input[type="search"]::-webkit-search-decoration,
                input[type="search"]::-webkit-search-cancel-button,
                input[type="search"]::-webkit-search-results-button,
                input[type="search"]::-webkit-search-results-decoration {
                    display: none; 
                }

                input[type=search]::-ms-clear,
                input[type=search]::-ms-reveal {
                    display: none;
                    width: 0;
                    height: 0; 
                }

                .pushIntoInput::-webkit-scrollbar, .pushIntoInput::-webkit-scrollbar-button,
                .pushIntoInput::-webkit-scrollbar-thumb {
                    display: none;
                }
            `);
        }
    }, []);

    useEffect(() => {
        const request = new Functions.CreateUrlRequest("/blog/server/search");
        request.toFetch()
        .then(response => {
            if (response.ok) {
                return response.toMethod("json");
            } else {
                throw new Error("Error: Something went wrong!");
            }
        })
        .then(result => {
            const div = divRef.current as HTMLDivElement;
            let res = result.searches as any[] | undefined;
            if (typeof res === "undefined") {
                return;
            }
            res.forEach(item => {
                const pushIntoInput_field = document.createElement("div");
                pushIntoInput_field.className = "pushIntoInput_field";
                pushIntoInput_field.textContent = item.search;
                Functions.changeStyleElem(pushIntoInput_field, Styles.pushIntoInput_field);
                div.insertAdjacentElement("beforeend", pushIntoInput_field);
            });
        });
    }, []);

    async function keyDown(e: KeyboardEvent<HTMLInputElement> | PointerEvent<HTMLElement>, otherArg?: string) {
        
        const input = inputRef.current as HTMLInputElement;
        let event = e as React.KeyboardEvent<HTMLInputElement>;
        if (event.key === "Enter" || otherArg) {
            try {
                const request = new Functions.CreateUrlRequest("/blog/server/search", {
                    body: input.value,
                    method: "POST",
                    keepalive: true
                });
                input.value = "";
                const response = await request.toFetch();
                
                if (response.ok) {
                    const result = await response.toMethod("text");
                    const div = divRef.current as HTMLDivElement;
                    const pushIntoInput_field = document.createElement("div");
                    pushIntoInput_field.className = "pushIntoInput_field";
                    pushIntoInput_field.textContent = result;
                    Functions.changeStyleElem(pushIntoInput_field, Styles.pushIntoInput_field);
                    div.insertAdjacentElement("beforeend", pushIntoInput_field);
                } else {
                    const error = await response.toMethod("json");
                    throw new Error(error);
                }
            } catch (error) {
                let errorMessage = error as Error;
                console.log(`
                    message: ${errorMessage.message},
                    status: ${errorMessage}
                `);
            }
        }
    }

    const focus = () => {
        const div = divRef.current as HTMLDivElement;
        Functions.changeStyleElem(div, {
            top: "calc(100% + 10px)",
            left: 0,
            opacity: 1
        });
    };

    const blur = () => {
        const div = divRef.current as HTMLDivElement;
        Functions.changeStyleElem(div, {
            top: "100%",
            left: "100%",
            opacity: 0
        });
    };

    const setValueOfInput: MouseEventHandler<HTMLDivElement> = (e) => {
        const input = inputRef.current as HTMLInputElement;
        let target = e.target as HTMLDivElement;
        target = target.closest(".pushIntoInput_field") as HTMLDivElement;
        input.value = target.textContent as string;
    };

    return(
        <>
            <div className="inputSearch" style={
                Functions.cloneObject(
                    Styles.inputSearch_conteiner
                )
            }>
                <input type="search" name="search" placeholder="search..." autoComplete="off" autoCorrect="on" onFocus={focus} onBlur={blur} style={
                    Functions.cloneObject(
                        Styles.inputSearch
                    )
                } onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => keyDown(e)} ref={inputRef}/>
                <IonIcon name="search" style={
                    Object.assign(
                        Functions.cloneObject(
                            Styles.searchIcon
                        ),
                        nowWidthWindow === "tablet" || nowWidthWindow === "mobileScreen" ? Styles.searchIconMobileAndTablet : {}
                    )
                } onPointerDown={
                    (e: PointerEvent<HTMLElement>) => keyDown(e, "click")
                } />
                <div className="pushIntoInput" style={Styles.pushIntoInput} ref={divRef} onClick={setValueOfInput} >
                    <div className="pushIntoInput_field" style={Styles.pushIntoInput_field}>HTML</div>
                    <div className="pushIntoInput_field" style={Styles.pushIntoInput_field}>JavaScript</div>
                    <div className="pushIntoInput_field" style={Styles.pushIntoInput_field}>CSS</div>
                </div>
            </div>
        </>
    )
}

function Posts() {
    const {nowWidthWindow} = useContext(MediaContext);

    const [step, setStep] = useState(1);

    return(
        <div className="conteiner_info__posts" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.conteiner_info__posts
                ),
                nowWidthWindow === "mobileScreen" ? Styles.conteiner_info__postsMobile : {}
            )
        }>
            <h2 style={
                Functions.cloneObject(
                    Styles.postsH2
                )
            }>
                posts
            </h2>
            <div className="info_posts__titles" style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.info_posts__titles
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.info_posts__titlesMobile :
                    nowWidthWindow === "tablet" ? Styles.info_posts__titlesTablet : {}
                )
            }>
                <PostsTitle title="latest" dataStep={1} step={step} setStep={setStep} style={
                    { margin: "0 0 0 19px" }
                }/>
                <PostsTitle title="popular" dataStep={2} step={step} setStep={setStep} style={
                    { margin: "0 0 0 38px" }
                }/>
                <PostsTitle title="comments" dataStep={3} step={step} setStep={setStep} style={
                    { margin: "0 5px 0 23px" }
                }/>
            </div>
            <PostsLine step={step}/>
            <ConteinerOfPosts step={step}/>
        </div>
    )
}

function PostsTitle({
    title = "",
    dataStep = 0,
    step,
    setStep,
    style
}: {
    title: string,
    dataStep: number,
    step: number,
    setStep: (arg: number) => any,
    style?: {}
}) {

    const mainStyle = Object.assign(
        Functions.cloneObject(
            Styles.postsH4
        ),
        step === dataStep ? Styles.postsH4Active : {}
    );

    return(
        <h4 data-step={dataStep} onClick={() => setStep(dataStep)} style={
            Object.assign(
                mainStyle,
                style ? style : undefined
            )
        }>{title}</h4>
    )
}

function PostsLine({
    step
}: {
    step: number
}) {
    const {nowWidthWindow} = useContext(MediaContext);
    const greenLineRef = useRef(null);

    useEffect(() => {
        const styleTag = document.querySelector("style");
        styleTag?.append(`
            .info_posts__lineConteiner::-webkit-scrollbar, .info_posts__lineConteiner::-webkit-scrollbar-button, .info_posts__lineConteiner::-webkit-scrollbar-thumb {
                display: none;
            }
        `);
    });

    useEffect(() => {
        const greenLine = greenLineRef.current as unknown as HTMLDivElement;
        const greenLineParent = greenLine.offsetParent as HTMLDivElement;
        const info_posts__lineConteiner = greenLine.parentElement as HTMLElement;

        greenLine.animate([
            {
                left: greenLine.offsetParent === info_posts__lineConteiner ?
                greenLine.offsetLeft + "px" : getComputedStyle(greenLine).left + "px"
            },
            {
                left: (Math.round(info_posts__lineConteiner.clientWidth / 3) * (step - 1)) * 100 / greenLineParent.clientWidth + "%"
            }
        ], {
            duration: 200,
            easing: "linear",
            fill: "forwards",
            direction: "normal"
        });
    }, [step]);

    return(
        <div className="info_posts__lineConteiner" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.info_posts__lineConteiner
                ),
                nowWidthWindow === "mobileScreen" ? Styles.info_posts__lineConteinerMobile :
                nowWidthWindow === "tablet" ? Styles.info_posts__lineConteinerTablet : {}
            )
        }>
            <div className="greenLine" ref={greenLineRef} style={
                Functions.cloneObject(
                    Styles.greenLine
                )
            }></div>
        </div>
    )
}

function ConteinerOfPosts({step}: {step: number}) {

    const info_posts__bodyRef = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState<number>(0);

    useEffect(() => {
        const info_posts__body = info_posts__bodyRef.current, info_posts__bodyWidth = info_posts__body!.clientWidth;
        info_posts__body!.scroll({
            left: info_posts__bodyWidth * (step - 1),
            behavior: "smooth"
        });
    }, [step]);

    function scrollFunc(e: React.UIEvent<HTMLDivElement, UIEvent>) {
        const element = e.currentTarget as HTMLDivElement,
              scrollTopElement = element.scrollTop;

        setScroll(scrollTopElement);
    }

    return(
        <div className="info_posts__body scrollConteiner" ref={info_posts__bodyRef} onScroll={(e) => scrollFunc(e)} style={
            Functions.cloneObject(
                Styles.info_posts__body
            )
        }>
            <PostsColumn idOfPostColumn={"1"} scroll={scroll}/>
            <PostsColumn idOfPostColumn={"2"} scroll={scroll}/>
            <PostsColumn idOfPostColumn={"3"} scroll={scroll}/>
        </div>
    )
}

function PostsColumn({idOfPostColumn, scroll}: {idOfPostColumn: string; scroll: number}) {
    const [countPosts, setCountPosts] = useState<{length: number}>({
        length: 6
    });

    const postBobyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const postBoby = postBobyRef.current;
        if (postBoby) {
            if (Math.ceil(postBoby.scrollHeight - scroll) < Math.round(postBoby.clientHeight * 1.5)) {
                setCountPosts({
                    length: countPosts.length + 6
                });
            }
        }
    }, [scroll]);

    return(
        <div className="posts_body__column scrollConteiner" id={idOfPostColumn} ref={postBobyRef} style={
            Functions.cloneObject(
                Styles.posts_body__column
            )
        }>
            {
                Array.from(countPosts).map((_, index) => {
                    return(
                        <Post key={index}
                        style={
                            index === 0 ? 
                            {
                                margin: 0
                            } :
                            {
                                margin: "10px 0 0 0"
                            }
                        }
                        idOfPost={`${index + 1}`} /> 
                    );
                })
            }
        </div>
    )
}

function Post({style, idOfPost}: {
    style?: CSSProperties;
    idOfPost: string;
}) {
    const {nowWidthWindow} = useContext(MediaContext);
    const [dataOfPost, setdataOfPost] = useState<null | {
        src: string;
        title: string;
        date: string | Date;
    }>(null);

    useEffect(() => {
        const request = new Functions.CreateUrlRequest(`/blog/server/posts?idOfPost=${idOfPost}`);
        request.toFetch()
        .then((result) => {
            if (result.ok) {
                return result.toMethod("json");
            } else {
                throw new Error("Error: request to server is failed!");
            }
        })
        .then(compleateResult => {
            setdataOfPost(compleateResult);
        },
        err => {
            console.log(err);
        });
    }, []);

    const styleMain = Object.assign(
        Functions.cloneObject(
            Styles.column_post
        ),
        style ? style : {}
    )

    return (
        <div className="column_post" style={
            Object.assign(
                styleMain,
                nowWidthWindow === "mobileScreen" ? Styles.column_postMobile : {}
            )
        }>
            {
                dataOfPost ? 
                <>
                    <Functions.Img src={dataOfPost!.src}/>
                    <div className="column_post__text" style={
                        Functions.cloneObject(
                            Styles.column_post__text
                        )
                    }>
                        <h5 style={
                            Styles.column_post__text___h5
                        }>{dataOfPost.title}</h5>
                        <p style={
                            Styles.column_post__text___p
                        }>{dataOfPost.date}</p>
                    </div>
                </>
                :
                <p style={
                    {
                        color: "#7beec7"
                    }
                }>
                    Loading...
                </p>
            }
        </div>
    )
}

function ListOfTypesBlog({title, style}: {title: string; style?: CSSProperties}) {

    const styles = Object.assign(
        Functions.cloneObject(
            Styles.listOfTypesBlog
        ),
        style ? style : {}
    );

    return(
        <div className="listOfTypesBlog" style={
            styles
        }>
            <h3 style={Styles.listOfTypesBlog_h3}>{title}</h3>
            <div className="listOfTypesBlog_items" style={
                Functions.cloneObject(
                    Styles.listOfTypesBlog_items
                )
            }>
                <Category name="Business" count={15}/>
                <Category name="Photography" count={17}/>
                <Category name="Journal" count={22}/>
                <Category name="Web devlopment" count={30}/>
            </div>
        </div>
    )
}

function Category({name, count}: {name: string; count: number}) {

    function enter(e: {currentTarget: HTMLDivElement}) {
        const target = e.currentTarget;
        Functions.changeStyleElem(target, {
            borderBottom: "1px solid #7beec7"
        });

        const targetChildrenParag = target.children as HTMLCollectionOf<HTMLParagraphElement>;
        Array.from(targetChildrenParag).forEach(item => {
            Functions.changeStyleElem(item, {
                color: "#7beec7"
            });
        });
    }

    function leave(e: {currentTarget: HTMLDivElement}) {
        const target = e.currentTarget;
        Functions.changeStyleElem(target, {
            borderBottom: "1px solid #bfbfbf"
        });

        const targetChildrenParag = target.children as HTMLCollectionOf<HTMLParagraphElement>;
        Array.from(targetChildrenParag).forEach(item => {
            Functions.changeStyleElem(item, {
                color: "#60606e"
            });
        });
    }

    return(
        <div className="listOfTypesBlog_items__item" style={
            Functions.cloneObject(
                Styles.listOfTypesBlog_items__item
            )
        } onPointerEnter={enter} onPointerLeave={leave}>
            <p className={name} style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.listOfTypesBlog_items__item___p
                    ),
                    {
                        margin: "0 0 0 16px"
                    } as const
                )
            }>{name}</p>
            <p className={`${count}`} style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.listOfTypesBlog_items__item___p
                    ),
                    {
                        margin: "0 16px 0 0"
                    } as const
                )
            }>{count}</p>
        </div>
    )
}

function Tags() {
    const {nowWidthWindow} = useContext(MediaContext);
    return(
        <div className="tags" style={
            Functions.cloneObject(
                Styles.tags
            )
        }>
            <h3 style={Styles.tags_h3}>tags</h3>
            <div className="tags_conteiner" style={
                Functions.cloneObject(
                    Styles.tags_conteiner
                )
            }>
                <Tag title="css" style={{
                    width: "67px"
                }}/>
                <Tag title="javascript" style={{
                    width: "99px"
                }}/>
                <Tag title="jquery" style={{
                    width: "86px"
                }}/>
                <Tag title="html5" style={{
                    width: "77px"
                }}/>
                <Tag title="bootstrap" style={{
                    width: "103px"
                }}/>
                <div className="break" style={
                    Object.assign(
                        Functions.cloneObject(
                            Styles.breakElem
                        ),
                        nowWidthWindow === "mobileScreen" ? Styles.breakElemMobile : {}
                    )
                }></div>
                <Tag title="css" style={{
                    width: "67px"
                }}/>
                <Tag title="javascript" style={{
                    width: "99px"
                }}/>
                <Tag title="jquery" style={{
                    width: "86px"
                }}/>
            </div>
        </div>
    )
}

function Tag({title, style}: {title: string; style: CSSProperties}) {

    const styles = Object.assign(
        Functions.cloneObject(
            Styles.tag
        ),
        style ? style : {}
    );

    function enter(e: {currentTarget: HTMLDivElement}) {
        const target = e.currentTarget;
        Functions.changeStyleElem(target, {
            color: "#ffffff",
            backgroundColor: "#7beec7"
        });
    }

    function leave(e: {currentTarget: HTMLDivElement}) {
        const target = e.currentTarget;
        Functions.changeStyleElem(target, {
            color: "#999999",
            backgroundColor: "#e5e5e5"
        });
    }

    return(
        <div className="tag" style={styles} onPointerEnter={enter} onPointerLeave={leave}>
            {title}
        </div>
    )
}

function MainConteinerBlogs() {
    const {nowWidthWindow} = useContext(MediaContext);

    const [countPostsObj, setCountPostsObj] = useState<{length: number}>({
        length: 3
    });
    const [scrollState, setScrollState] = useState(0);
    const [areAllPostsLoaded, setAreAllPostsLoaded] = useState<boolean>(false);
    const main_conteiner__blogsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            setScrollState(pageYOffset);
        });

        return () => {
            document.removeEventListener("scroll", () => {
                setScrollState(pageYOffset);
            });
        }
    }, []);

    useEffect(() => {
        const main_conteiner__blogs = main_conteiner__blogsRef.current;
        if (main_conteiner__blogs) {
            if (main_conteiner__blogs.clientHeight - scrollState < main_conteiner__blogs.clientHeight / 5 && areAllPostsLoaded) {
                setCountPostsObj((prevState) => {
                    return {
                        length: prevState.length + 3
                    }
                });
            }
        }
    }, [scrollState, areAllPostsLoaded]);

    return(
        <div className="main_conteiner__blogs" ref={main_conteiner__blogsRef} style={
            Object.assign(
                Functions.cloneObject(
                    Styles.main_conteiner__blogs
                ),
                nowWidthWindow === "mobileScreen" ? Styles.main_conteiner__blogsMobile :
                nowWidthWindow === "tablet" ? Styles.main_conteiner__blogsTablet :
                nowWidthWindow === "computerNormalScreen" ? Styles.main_conteiner__blogsNormal : {}
            )
        }>
        {
            Array.from(countPostsObj).map((_, index) => {
                return(
                    <PostOfBlog key={index} idOfPost={`${index}`} setAreAllPostsLoaded={setAreAllPostsLoaded} style={
                        index === 0 ?
                        {} : {
                            margin: nowWidthWindow === "mobileScreen" ? "50px 0 0 0" : "102px 0 0 0"
                        }
                    }/>
                )
            })
        }
        </div>
    )
}

function PostOfBlog({idOfPost, style, setAreAllPostsLoaded}: {idOfPost: number | string; style?: CSSProperties; setAreAllPostsLoaded: Dispatch<SetStateAction<boolean>>}) {
    const {nowWidthWindow} = useContext(MediaContext);
    const [descriptionIsOpen, setDescriptionIsOpen] = useState<boolean | null>(null);
    const [commentIsOpen, setCommentIsOpen] = useState<null | boolean>(null);
    const [postData, dispatchOfPostData] = useReducer<Reducer<TypesOfBlog.InitalPostDataInterface, TypesOfBlog.ActionOfPostReduser>>(
        Reducers.reducerOfPostData, InitalStates.initalPostData
    );

    const SourcePreloaderRef = useRef<HTMLDivElement>(null);
    const ImgRef = useRef<HTMLImageElement>(null);
    const main_conteiner__blogs___conteinerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setAreAllPostsLoaded(false);
        const request = new Functions.CreateUrlRequest(`/blog/server/postsOfBlog?idOfPost=${idOfPost}&action=getPost`, {
            method: "GET",
            keepalive: false
        });
        request.toFetch()
        .then(response => {
            return response.toMethod("json");
        })
        .then(res => {
            let result = res as Omit<TypesOfBlog.ActionOfPostReduser, "type">;
            dispatchOfPostData({
                type: "setStartProp",
                ...result
            });
            setAreAllPostsLoaded(true);
        });
    }, []);

    useEffect(() => {
        const sourcePreloader = SourcePreloaderRef.current as HTMLDivElement;
        const img = ImgRef.current as HTMLImageElement;
        const main_conteiner__blogs___conteiner = main_conteiner__blogs___conteinerRef.current as HTMLDivElement;
        
        img.addEventListener("load", () => {
            sourcePreloader.remove();
            Functions.changeStyleElem(main_conteiner__blogs___conteiner, {
                height: "auto",
                maxHeight: "auto"
            });
        });

        return () => {
            img.removeEventListener("load", () => {
                sourcePreloader.remove();
                Functions.changeStyleElem(main_conteiner__blogs___conteiner, {
                    height: "auto",
                    maxHeight: "auto"
                });
            });
        }
    }, []);

    const styles = Object.assign(
        Functions.cloneObject(
            Styles.main_conteiner__blogs___conteiner
        ),
        style ? style : {}
    );

    return(
        <div className="main_conteiner__blogs___conteiner" style={styles} ref={main_conteiner__blogs___conteinerRef}>
            <SourcePreloader ref={SourcePreloaderRef} />
            <div className="main_conteiner__blogs___blog" style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.main_conteiner__blogs___blog
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.main_conteiner__blogs___blogMobile : {}
                )
            }>
                <Functions.Img isCanBeDownload={true} ref={ImgRef} src={postData.srcOfImg ?? ""} style={{
                    width: "100%"
                }}/>
                <BlogInfo postData={postData} id={idOfPost} dispatchOfPostData={dispatchOfPostData} commentIsOpen={commentIsOpen} setCommentIsOpen={setCommentIsOpen} />
                <CommentEnterOfPost commentIsOpen={commentIsOpen} dispatchOfPostData={dispatchOfPostData} idOfPost={idOfPost} postData={postData}/>
                <Comments idOfPost={idOfPost} countOfComments={postData.countOfComments} />
                <TitleOfPost postData={postData} />
                <Description descriptionIsOpen={descriptionIsOpen} postData={postData} />
                <ReadDescription descriptionIsOpen={descriptionIsOpen} setDescriptionIsOpen={setDescriptionIsOpen} />
            </div>
        </div>
    )
}

function BlogInfo(
    {postData, id, dispatchOfPostData, setCommentIsOpen, commentIsOpen}:
    {
        postData: TypesOfBlog.InitalPostDataInterface,
        id: string | number,
        setCommentIsOpen: Dispatch<SetStateAction<null | boolean>>,
        commentIsOpen: null | boolean,
        dispatchOfPostData: Dispatch<TypesOfBlog.ActionOfPostReduser>
    }
) {
    const {nowWidthWindow} = useContext(MediaContext);

    async function setStateOfLike(idOfPost: number | string): Promise<any> {
        const request = new Functions.CreateUrlRequest(`/blog/server/postsOfBlog?idOfPost=${idOfPost}`, {
            method: "PUT",
            keepalive: false,
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                type: "setStateOfLike",
                countOfLikes: postData.wasLikedByUser ? postData.countOfLikes - 1 : postData.countOfLikes + 1,
                wasLikedByUser: !postData.wasLikedByUser
            })
        });
        const response = await request.toFetch();
        if (response.ok) {
            const result = await response.toMethod("json");
            dispatchOfPostData({
                type: "setStateOfLike",
                ...result
            });
        } else {
            console.log(response.toMethod("json"));
        }
    }

    return(
        <div className="blog_info" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.blog_info
                ),
                nowWidthWindow === "mobileScreen" ? Styles.blog_infoMobile : {}
            )
        }>
            <div className="blog_info__date" style={
                Functions.cloneObject(
                    Styles.blog_info__date
                )
            }>
                {postData.dateOfCreated}
            </div>
            <div className="blog_info__comment"
            onClick={() => setCommentIsOpen(commentIsOpen === null ? true : !commentIsOpen)}
            style={
                Functions.cloneObject(
                    Styles.blog_info__comment
                )
            }>
                <IonIcon name="chatbox-ellipses" style={Styles.iconOfComment} />
                {postData.countOfComments}
            </div>
            <div className="blog_info__likes" onClick={() => setStateOfLike(id)} style={
                Functions.cloneObject(
                    Styles.blog_info__likes
                )
            }>
                <IonIcon name="heart" style={
                    Object.assign(
                        {},
                        Styles.heartIcon,
                        postData.wasLikedByUser ? {
                            color: "red"
                        } : {}
                    )
                } />
                {postData.countOfLikes}
            </div>
        </div>
    )
}

function CommentEnterOfPost(
    {commentIsOpen, dispatchOfPostData, idOfPost, postData}:
    {
        commentIsOpen: boolean | null;
        dispatchOfPostData: Dispatch<TypesOfBlog.ActionOfPostReduser>;
        idOfPost: string | number;
        postData: TypesOfBlog.InitalPostDataInterface
    }
) {
    const {nowWidthWindow} = useContext(MediaContext);
    const commentRef = useRef<null | HTMLTextAreaElement>(null);
    const textAreaConteinerRef = useRef<HTMLDivElement>(null);
    const [heightOfTextArea, setHeightOfTextArea] = useState<null | number | string>(null);

    const submit = async () => {
        const commentElement = commentRef.current as HTMLTextAreaElement;
        let value = commentElement.value;
        if (value.length > 0) {
            const dateObj = new Date();
            let hours = dateObj.getHours(), minutes = dateObj.getMinutes(), seconds = dateObj.getSeconds();
            const action = {
                type: "writeComment",
                countOfComments: postData.countOfComments + 1,
                comment: {
                    dateOfWrite: `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`,
                    userName: undefined,
                    content: value
                }
            };
            const request = new Functions.CreateUrlRequest(`/blog/server/postsOfBlog?action=writeComment&idOfPost=${idOfPost}`, {
                method: "PUT",
                keepalive: false,
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(action)
            });
            commentElement.value = "";
            const response = await request.toFetch();
            if (response.ok) {
                const result = await response.toMethod("json");
                dispatchOfPostData({
                    type: "writeComment",
                    ...result
                });
            } else {
                console.error("Something wrong, try again!");
            }
        } else {
            const styleTag = document.querySelector("style");
            styleTag?.append(`
               .enterComment::placeholder {
                   color: #de2323
               } 
            `);
            commentElement.placeholder = "Please, enter a comment containing letters...";
            commentElement.blur();
        }
    };

    const focus: FocusEventHandler<HTMLTextAreaElement> = (e) => {
        const commentElem = e.currentTarget as HTMLTextAreaElement;
        commentElem.placeholder = "Enter your comment...";
        const styleTag = document.querySelector("style");
        styleTag?.append(`
            .enterComment::placeholder {
                color: #999999
            } 
        `);
    };

    useEffect(() => {
        const textAreaConteiner = textAreaConteinerRef.current as HTMLDivElement, styleTag = document.querySelector("style") as HTMLStyleElement;

        styleTag.append(`
            .enterComment::-webkit-scrollbar, .enterComment::-webkit-scrollbar-button, .enterComment::-webkit-scrollbar-thumb {
                display: none;
            }
            .enterComment::placeholder {
                color: #999999;
            }
        `);

        if (!heightOfTextArea) {
            setHeightOfTextArea(textAreaConteiner.clientHeight);
        }
        Functions.changeStyleElem(textAreaConteiner, {
            height: 0
        });
    }, []);

    useEffect(() => {
        const textAreaConteiner = textAreaConteinerRef.current as HTMLDivElement;
        if (commentIsOpen) {
            Functions.changeStyleElem(textAreaConteiner, {
                height: `${heightOfTextArea}px`,
                width: nowWidthWindow === "mobileScreen" ? "calc(90% - 6px)" : "50%",
                margin: "15px 0 0 0",
                boxShadow: "0 0 0 3px #7beec7",
            });
        } else if (commentIsOpen === false) {
            Functions.changeStyleElem(textAreaConteiner, {
                width: 0,
                margin: 0,
                boxShadow: "0 0 0 0 #7beec7",
                height: 0
            });
        }
    }, [commentIsOpen]);

    return(
        <div className="textAreaConteiner" style={Styles.teaxtAreaConteiner} ref={textAreaConteinerRef}>
            <textarea ref={commentRef} className="enterComment" name="comment" autoComplete="off" placeholder="Enter your comment..."
            onFocus={focus}
            style={Styles.commentOfPost} />
            <IonIcon name="arrow-forward-circle" className="arrow_submit" style={Styles.arrow_submit} onPointerDown={submit} />
        </div>
    )
}

function Comments({idOfPost, countOfComments}: {idOfPost: string | number, countOfComments: number}) {
    const {nowWidthWindow} = useContext(MediaContext);
    const [wasButtonOfCommentClicked, setWasButtonOfCommentClicked] = useState(false);
    const [nowComments, setNowComments] = useState(0);
    const [isButtonExist, setIsButtonExist] = useState(false);

    useEffect(() => {
        if (countOfComments > 3) {
            setIsButtonExist(true);
        }
    }, [countOfComments]);
    
    useEffect(() => {
        if (!wasButtonOfCommentClicked) {
            setNowComments(
                countOfComments <= 3 ? countOfComments : 3
            );
        } else if (nowComments < countOfComments && !isButtonExist) {
            setNowComments(countOfComments);
        }
    }, [countOfComments, wasButtonOfCommentClicked, isButtonExist]);

    return(
        <div className="comments" style={nowWidthWindow === "mobileScreen" ? Styles.commentsMobile : {}}>
            {
                Array.from({length: nowComments}).map((_, index) => {
                  return(
                      <CommentElement idOfPost={`${idOfPost}`} key={index} idOfComment={`${index}`} />
                  )  
                })
            }
            {countOfComments <= 3 || !isButtonExist ? null : <ShowMoreCommentsButton
            setNowComments={setNowComments}
            nowComments={nowComments}
            setIsButtonExist={setIsButtonExist}
            setWasButtonOfCommentClicked={setWasButtonOfCommentClicked}
            countOfComments={countOfComments} />}
        </div>
    )
}

function CommentElement({idOfPost, idOfComment}: {idOfPost: string; idOfComment: string}) {
    const {nowWidthWindow} = useContext(MediaContext);
    const [dataOfComment, dispathDataOfComment] = useReducer<Reducer<TypesOfBlog.InitalCommentDataInterface, TypesOfBlog.ActionOfCommentReduser>>(
        Reducers.reducerOfCommentData, InitalStates.initalCommentData
    );

    useEffect(() => {
        const request = new Functions.CreateUrlRequest(`/blog/server/postsOfBlog?action=commentsOfPost&idOfPost=${idOfPost}&idOfComment=${idOfComment}`);
        request.toFetch()
        .then(response => {
            if (response.ok) {
                return response.toMethod("json");
            } else {
                throw new Error("Error from server!");
            }
        })
        .then(result => {
            dispathDataOfComment({
                type: "CREATE_COMMENT",
                ...result
            });
        });
    }, []);

    return(
        <div className="comment" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.comment
                ),
                nowWidthWindow === "mobileScreen" ? Styles.commentMobile : {}
            )
        }>
            <div className="comment_head" style={
                Object.assign(
                    Functions.cloneObject(
                        Styles.comment_head
                    ),
                    nowWidthWindow === "mobileScreen" ? Styles.comment_headMobile : {}
                )
            }>
                <h5 className="h5OfCommentHead" style={
                    Object.assign(
                        Functions.cloneObject(
                            Styles.h5OfCommentHead
                        ),
                        nowWidthWindow === "mobileScreen" ? { margin: 0 } : { margin: "0 0 0 25px" }
                    )
                }>
                    User: {dataOfComment.userName ?? "Anonymous"}
                </h5>
                <h5 className="h5OfCommentHead" style={
                    Object.assign(
                        Functions.cloneObject(
                            Styles.h5OfCommentHead
                        ),
                        nowWidthWindow === "mobileScreen" ? { margin: 0 } : { margin: "0 25px 0 0" }
                    )
                }>
                    Data of write: {dataOfComment.dateOfWrite}
                </h5>
            </div>
            <p className="contentOfComment" style={Styles.contentOfComment}>
                {dataOfComment.content}
            </p>
        </div>
    )
}

function ShowMoreCommentsButton({setNowComments, countOfComments, nowComments, setWasButtonOfCommentClicked, setIsButtonExist}:
    {setNowComments: Dispatch<SetStateAction<number>>, countOfComments: number, nowComments: number, setWasButtonOfCommentClicked: Dispatch<SetStateAction<boolean>>,
    setIsButtonExist: Dispatch<SetStateAction<boolean>>}) {

    useEffect(() => {
        const nowCountOfComments = countOfComments - nowComments;
        if (nowCountOfComments <= 0) {
            setIsButtonExist(false);
        }
    }, [nowComments]);

    const pointerEventOnButton: PointerEventHandler<HTMLButtonElement> = (e) => {
        const button = e.currentTarget as HTMLButtonElement;
        const type = e.type;
        if (type === "pointerenter") {
            Functions.changeStyleElem(button, {
                color: "#ffffff",
                backgroundColor: "#7beec7",
                WebkitBoxShadow: "0px 0px 16px 8px #7beec7",
                MozBoxShadow: "0px 0px 16px 8px #7beec7",
                boxShadow: "0px 0px 16px 8px #7beec7"
            });
        }
        if (type === "pointerleave") {
            Functions.changeStyleElem(button, {
                color: "#999999",
                backgroundColor: "#e5e5e5",
                WebkitBoxShadow: "0px 0px 0 0 #7beec7",
                MozBoxShadow: "0px 0px 0 0 #7beec7",
                boxShadow: "0px 0px 0 0 #7beec7"
            });
        }
    };

    return(
        <button onClick={() => {
            setWasButtonOfCommentClicked(true);
            setNowComments((state) => {
                let stayCountOfComments = countOfComments - state;
                if (stayCountOfComments >= 3) {
                    return state + 3;
                } else if (stayCountOfComments > 0) {
                    return state + stayCountOfComments;
                } else {
                    return state;
                }
            });
        }} className="showMoreComments" onPointerEnter={pointerEventOnButton} onPointerLeave={pointerEventOnButton} style={Styles.showMoreComments}>
            Show more...
        </button>
    )
}

function TitleOfPost({postData}) {
    const {nowWidthWindow} = useContext(MediaContext);

    return(
        <h4 className="title" style={
            Object.assign(
                Functions.cloneObject(
                    Styles.title
                ),
                nowWidthWindow === "mobileScreen" ? Styles.titleMobile : {}
            )
        }>
            {postData.title}
        </h4>
    )
}

function Description({postData, descriptionIsOpen}) {
    const {nowWidthWindow} = useContext(MediaContext);
    const descriptionOfPostRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        const descriptionOfPost = descriptionOfPostRef.current as HTMLParagraphElement;
        Functions.changeStyleElem(descriptionOfPost, {
            height: descriptionOfPost.scrollHeight / 2 + "px",
            maxHeight: descriptionOfPost.scrollHeight / 2 + "px"
        });
    }, [postData?.description]);

    useEffect(() => {
        const descriptionOfPost = descriptionOfPostRef.current as HTMLParagraphElement;
        if (descriptionIsOpen) {
            descriptionOfPost.animate([
                {
                    maxHeight: descriptionOfPost.scrollHeight / 2 + "px",
                    height: descriptionOfPost.scrollHeight / 2 + "px"
                },
                {
                    maxHeight: descriptionOfPost.scrollHeight + "px",
                    height: descriptionOfPost.scrollHeight + "px"
                }
            ], {
                duration: 250,
                easing: "linear",
                fill: "forwards"
            });
        } else if (descriptionIsOpen === false) {
            descriptionOfPost.animate([
                {
                    maxHeight: descriptionOfPost.scrollHeight + "px",
                    height: descriptionOfPost.scrollHeight + "px"
                },
                {
                    maxHeight: descriptionOfPost.scrollHeight / 2 + "px",
                    height: descriptionOfPost.scrollHeight / 2 + "px"
                }
            ], {
                duration: 250,
                easing: "linear",
                fill: "forwards"
            });
        }
    }, [descriptionIsOpen]);

    return(
        <p className="descriptionOfPost" ref={descriptionOfPostRef} style={
            Object.assign(
                Functions.cloneObject(
                    Styles.descriptionOfPost
                ),
                nowWidthWindow === "mobileScreen" ? Styles.descriptionOfPostMobile : {}
            )
        }>
            {postData?.description}
            <br/>
            {postData?.description}
        </p>
    )
}

function ReadDescription({descriptionIsOpen, setDescriptionIsOpen}) {
    const {nowWidthWindow} = useContext(MediaContext);

    const pointerEnter: PointerEventHandler<HTMLDivElement> & MouseEventHandler<HTMLDivElement> = (e: PointerEvent<HTMLDivElement>) => {
        let current = e.currentTarget as HTMLElement;
        let iconElement = current.querySelector(".icon-element") as HTMLImageElement;

        Functions.changeStyleElem(current, {
            backgroundColor: "#7beec7",
            color: "#ffffff",
            transition: "color ease-in .25s, background-color ease-out .25s"
        });
        Functions.changeStyleElem(iconElement, {
            transition: ".25s linear",
            transitionProperty: "transform",
            transform: descriptionIsOpen ? "rotateZ(-90deg)" : "rotateZ(90deg)"
        });
    };

    const pointerDown: PointerEventHandler<HTMLDivElement> = (e) => {
        let current = e.currentTarget as HTMLElement;
        let iconElement = current.querySelector(".icon-element") as HTMLImageElement;

        Functions.changeStyleElem(current, {
            backgroundColor: "#ffffff",
            color: "#60606e",
            transition: "color ease-in .25s, background-color ease-out .25s"
        });
        Functions.changeStyleElem(iconElement, {
            transform: "rotate(0)"
        });
    };

    return(
        <div className="toReadDescription" style={
            Functions.cloneObject(
                Styles.toReadDescription
            )
        }
        onPointerEnter={ nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? () => undefined : pointerEnter}
        onClick={
            (e: PointerEvent<HTMLDivElement>) => {
                setDescriptionIsOpen(descriptionIsOpen === null ? true : !descriptionIsOpen);
                nowWidthWindow === "mobileScreen" || nowWidthWindow === "tablet" ? pointerEnter(e) : pointerDown(e);
            }
        }
        >
            {
                descriptionIsOpen ? "hide text" : "continue reading"
            }
            <IonIcon name="arrow-forward" className="icon-element" style={Styles.arrowIcon} />
        </div>
    )
}