import React, {useEffect, useRef, useState, KeyboardEvent, CSSProperties, useReducer, PointerEvent, Reducer} from "react";

import * as BlogPresets from "./blog_presets";
import * as Styles from "./style";
import * as Functions from "../globalThings/functions";

import GlobalChangeLocation from "../globalThings/GlobalChangeLocationOn";
import GlobalHeader from "../globalThings/GlobalHeader";
import GlobalPreFooter from "../globalThings/GlobalPrefooter";
import GlobalFooter from "../globalThings/GlobalFooter";

import Search from "./images/search.png";
import Comment from "./images/comment.png";
import Heart from "./images/heart.png";
import Arrow from "./images/arrow.png";

import * as InitalStates from "./initalStateOfPost";
import * as Reducers from "./reduserPostOfBlog";
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
            {/* Для установки глобальных значений */}
            <BlogPresets.LetGlobalThis/>
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
    return(
        <div className="main_conteiner" style={
            Functions.cloneObject(
                Styles.main_conteiner
            )
        }>
            <MainConteinerBlogs/>
            <MainConteinerInfo/>
        </div>
    )
}

function MainConteinerInfo() {
    return(
        <div className="main_conteiner__info" style={
            Functions.cloneObject(
                Styles.main_conteiner__info
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

    const optgroupRef = useRef<HTMLOptGroupElement>(null);
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
            `);
        }
    }, []);

    async function keyDown(e: React.KeyboardEvent<HTMLInputElement>, otherArg?: string) {
        
        const input = inputRef.current as HTMLInputElement;
        if (e.key === "Enter" || otherArg) {
            try {
                const request = new Functions.CreateUrlRequest("blog/server/search", {
                    body: input.value,
                    method: "POST",
                    keepalive: true
                });
                input.value = "";
                const response = await request.toFetch();
                
                if (response.ok) {
                    const result = await response.toMethod("json");
                    /* console.log(result); */

                    const optgroup = optgroupRef.current as HTMLOptGroupElement;
                    if (optgroup) {
                        optgroup.insertAdjacentHTML("afterbegin", `
                            <option value=${result?.search}></option>
                        `);
                    }
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

    return(
        <>
            <div className="inputSearch" style={
                Functions.cloneObject(
                    Styles.inputSearch_conteiner
                )
            }>
                <input type="search" name="search" list="inputSearchList" placeholder="search..." style={
                    Functions.cloneObject(
                        Styles.inputSearch
                    )
                } onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => keyDown(e)} ref={inputRef}/>
                <Functions.Img src={Search} alt="search" style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "13px",
                    right: "19px"
                }} clickFunc={(e: KeyboardEvent<HTMLInputElement>) => keyDown(e, "click")}/>
            </div>
            <datalist id="inputSearchList">
                <optgroup label="Cannon searchs">
                    <option value="HTML"></option>
                    <option value="JavaScript"></option>
                    <option value="CSS"></option>
                </optgroup>
                <optgroup ref={optgroupRef} label="Other your search"></optgroup>
            </datalist>
        </>
    )
}

function Posts() {

    const [step, setStep] = useState(1);

    return(
        <div className="conteiner_info__posts" style={
            Functions.cloneObject(
                Styles.conteiner_info__posts
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
                Functions.cloneObject(
                    Styles.info_posts__titles
                )
            }>
                <PostsTitle title="latest" dataStep={1} step={step} setStep={setStep} style={{
                    margin: "0 0 0 19px"
                }}/>
                <PostsTitle title="popular" dataStep={2} step={step} setStep={setStep} style={{
                    margin: "0 0 0 38px"
                }}/>
                <PostsTitle title="comments" dataStep={3} step={step} setStep={setStep} style={{
                    margin: "0 5px 0 23px"
                }}/>
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

    const greenLineRef = useRef(null);

    useEffect(() => {
        const greenLine = greenLineRef.current as unknown as HTMLDivElement;
        const info_posts__lineConteiner = greenLine.parentElement as HTMLElement;

        greenLine.animate([
            {
                left: greenLine.offsetParent === info_posts__lineConteiner ?
                greenLine.offsetLeft + "px" : getComputedStyle(greenLine).left + "px"
            },
            {
                left: Math.round(info_posts__lineConteiner.clientWidth / 3) * (step - 1) + "px"
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
            Functions.cloneObject(
                Styles.info_posts__lineConteiner
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
            <PostsColumn id={"1"} scroll={scroll}/>
            <PostsColumn id={"2"} scroll={scroll}/>
            <PostsColumn id={"3"} scroll={scroll}/>
        </div>
    )
}

function PostsColumn({id, scroll}: {id: string; scroll: number}) {
    const [isSuccess, setIsSuccess] = useState<null | boolean | {
        src: string[];
        title: string;
        date: string | Date;
    }>(null);
    const [countPosts, setCountPosts] = useState<{length: number}>({
        length: 6
    });
    const [nowImage, setNowImage] = useState<number>(1);

    const postBobyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (nowImage <= 3) {
            const request = new Functions.CreateUrlRequest(`blog/server/posts/${nowImage}`);
            request.toFetch()
            .then((result) => {
                return result.toMethod("json");
            })
            .then(compleateResult => {
                setNowImage(nowImage + 1);
                setIsSuccess(compleateResult);
            },
            err => {
                console.log(err);
                setIsSuccess(false);
            });
        }
    }, [nowImage]);

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
        <div className="posts_body__column scrollConteiner" id={id} ref={postBobyRef} style={
            Functions.cloneObject(
                Styles.posts_body__column
            )
        }>
            {
                typeof isSuccess === "object" && isSuccess !== null ? 
                Array.from(countPosts).map((_, index) => {
                    return(
                        <Post key={index}
                        src={(index + 1) % 3 === 0 ? isSuccess.src[6] :
                            (index + 1) % 2 === 0 ? isSuccess.src[3] : isSuccess.src[0] }
                        title={isSuccess.title as string}
                        date={isSuccess.date as string | Date}
                        style={
                            index === 0 ? 
                            {
                                margin: 0
                            } :
                            {
                                margin: "10px 0 0 0"
                            }
                        }/> 
                    );
                })
                :
                <p>
                    {
                        isSuccess === false ?
                        "Error! Please reload the page" as string :
                        "Loading..." as string
                    }
                </p>
            }
        </div>
    )
}

function Post({src, title, date, style}: {
    src: string;
    title: string;
    date: string | Date;
    style?: CSSProperties
}) {

    const styleMain = Object.assign(
        Functions.cloneObject(
            Styles.column_post
        ),
        style ? style : {}
    )

    return (
        <div className="column_post" style={
            styleMain
        }>
            <Functions.Img src={src}/>
            <div className="column_post__text" style={
                Functions.cloneObject(
                    Styles.column_post__text
                )
            }>
                <h5 style={
                    Styles.column_post__text___h5
                }>{title}</h5>
                <p style={
                    Styles.column_post__text___p
                }>{date}</p>
            </div>
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
                    width: "99px",
                    margin: "0 0 0 5px"
                }}/>
                <Tag title="jquery" style={{
                    width: "88px",
                    margin: "0 0 0 4px"
                }}/>
                <Tag title="html5" style={{
                    width: "77px",
                    margin: "5px 0 0 0"
                }}/>
                <Tag title="bootstrap" style={{
                    width: "103px",
                    margin: "5px 0 0 4px"
                }}/>
                <div className="break" style={
                    Functions.cloneObject(
                        Styles.breakElem
                    )
                }></div>
                <Tag title="css" style={{
                    width: "67px",
                    margin: "5px 0 0 0px"
                }}/>
                <Tag title="javascript" style={{
                    width: "99px",
                    margin: "5px 0 0 5px"
                }}/>
                <Tag title="jquery" style={{
                    width: "88px",
                    margin: "5px 0 0 4px"
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

    const [countPostsObj, setCountPostsObj] = useState<{length: number}>({
        length: 3
    });
    const [scrollState, setScrollState] = useState(0);
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
            if (main_conteiner__blogs.clientHeight - scrollState < main_conteiner__blogs.clientHeight / 5) {
                setCountPostsObj((prevState) => {
                    return {
                        length: prevState.length + 3
                    }
                });
            }
        }
    }, [scrollState]);

    return(
        <div className="main_conteiner__blogs" ref={main_conteiner__blogsRef} style={
            Functions.cloneObject(
                Styles.main_conteiner__blogs
            )
        }>
        {
            Array.from(countPostsObj).map((_, index) => {
                return(
                    <PostOfBlog key={index} id={`${index}`} style={
                        index === 0 ?
                        {} : {
                            margin: "102px 0 0 0"
                        }
                    }/>
                )
            })
        }
        </div>
    )
}

function PostOfBlog({id, style}: {id: number | string, style?: CSSProperties}) {
    const [descriptionIsOpen, setDescriptionIsOpen] = useState<boolean | null>(null);

    const [postData, dispatchOfPostData] = useReducer<Reducer<TypesOfBlog.InitalPostDataInterface, TypesOfBlog.ActionOfPostReduser>>(
        Reducers.reducerOfPostData, InitalStates.initalPostData
    );

    useEffect(() => {
        const request = new Functions.CreateUrlRequest(`/blog/server/postOfBlog/${id}`, {
            method: "GET",
            keepalive: false
        });
        request.toFetch()
        .then(response => {
            return response.toMethod("json");
        })
        .then(res => {
            let result = res as Omit<TypesOfBlog.ActionOfPostReduser, "type">;
            /* console.log(result); */
            dispatchOfPostData({
                type: "setStartProp",
                ...result
            });
        });
    }, []);

    const styles = Object.assign(
        Functions.cloneObject(
            Styles.main_conteiner__blogs___blog
        ),
        style ? style : {}
    );

    async function setStateOfLike(id: number | string): Promise<any> {
        const request = new Functions.CreateUrlRequest(`/blog/server/postOfBlog/${id}`, {
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
            /* console.log(result); */
            dispatchOfPostData({
                type: "setStateOfLike",
                ...result
            });
        } else {
            console.log(response.toMethod("json"));
        }
    }

    return(
        <div className="main_conteiner__blogs___blog" style={styles}>
            <Functions.Img src={postData.srcOfImg} style={{
                width: "100%"
            }}/>
            <BlogInfo postData={postData} id={id} setStateOfLike={setStateOfLike} setSubmited={dispatchOfPostData} />
            <Comments idOfPost={id} />
            <TitleOfPost postData={postData} />
            <Description descriptionIsOpen={descriptionIsOpen} postData={postData}/>
            <ReadDescription descriptionIsOpen={descriptionIsOpen} setDescriptionIsOpen={setDescriptionIsOpen}/>
        </div>
    )
}

function BlogInfo({postData, id, setStateOfLike, setSubmited}) {
    const [commentIsOpen, setCommentIsOpen] = useState<null | boolean>(null);

    return(
        <div className="blog_info" style={
            Functions.cloneObject(
                Styles.blog_info
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
                <Functions.Img src={Comment} style={{
                    margin: "0 9px 0 0",
                    cursor: "pointer"
                }}/>
                {postData.countOfComments}
            </div>
            <CommentEnterOfPost commentIsOpen={commentIsOpen} setSubmited={setSubmited} id={id} postData={postData}/>
            <div className="blog_info__likes" onClick={() => setStateOfLike(id)} style={
                Functions.cloneObject(
                    Styles.blog_info__likes
                )
            }>
                <Functions.Img src={Heart} style={{
                    margin: "0 8px 0 0",
                    cursor: "pointer"
                }}/>
                {postData.countOfLikes}
            </div>
        </div>
    )
}

function CommentEnterOfPost({commentIsOpen, setSubmited, id, postData}) {
    const commentRef = useRef<null | HTMLInputElement>(null);
    const [commentEnterWidth, setCommentEnterWidth] = useState<null | number>(null);

    const submit = async (e: KeyboardEvent) => {
        const inputElement = e.currentTarget as HTMLInputElement;
        let value = inputElement.value, dateObj = new Date();
        const action = {
            type: "writeComment",
            countOfComments: postData.countOfComments + 1,
            comment: {
                date: `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`,
                user: undefined,
                content: value
            }
        };
        if (e.key.toLowerCase() === "enter") {
            const request = new Functions.CreateUrlRequest(`/blog/server/postOfBlog/${id}`, {
                method: "PUT",
                keepalive: false,
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(action)
            });
            const response = await request.toFetch();
            if (response.ok) {
                const result = await response.toMethod("json");
                console.log(result);
                setSubmited({
                    type: "writeComment",
                    ...result
                });
                value = "";
            } else {
                throw new Error("Something wrong, try again!");
            }
        }
    };

    useEffect(() => {
        const commentEnter = commentRef.current as HTMLInputElement;
        if (!commentEnterWidth) {
            setCommentEnterWidth(commentEnter.clientWidth);
        }
        Functions.changeStyleElem(commentEnter, {
            width: 0
        });
    }, []);

    useEffect(() => {
        const comment = commentRef.current as HTMLInputElement;
        if (commentIsOpen) {
            Functions.changeStyleElem(comment, {
                width: `${commentEnterWidth}px`,
                margin: "0 0 0 10px",
                boxShadow: "0 0 0 3px #7beec7"
            });
        } else if (commentIsOpen === false) {
            Functions.changeStyleElem(comment, {
                width: 0,
                margin: 0,
                boxShadow: "0 0 0 0 #7beec7"
            });
        }
    }, [commentIsOpen]);

    return(
        <input ref={commentRef} type="text" name="comment" placeholder="Enter your comment..."
        onKeyPress={submit}
        style={Styles.commentOfPost} />
    )
}

function Comments({idOfPost}) {
    const [countOfComment, setCountOfComment] = useState(0);

    useEffect(() => {
        const request = new Functions.CreateUrlRequest(`/blog/server/postOfBlog/${idOfPost}/comments`);
        request.toFetch()
            .then((response) => {
              if (response.ok) {
                  return response.toMethod("text");
              } else {
                  throw new Error("Error from server");
              }
            })
            .then((result) => {
                setCountOfComment(+result);
            });
    }, []);

    return(
        <div className="comments">
            {
                Array.from({length: countOfComment}).map((_, index) => {
                  return(
                      <CommentElement idOfPost={idOfPost} index={index} />
                  )  
                })
            }
        </div>
    )
}

function CommentElement({idOfPost, index}) {
    const [dataOfComment, dispathDataOfComment] = useReducer<Reducer<TypesOfBlog.InitalCommentDataInterface, TypesOfBlog.ActionOfCommentReduser>>(
        Reducers.reducerOfCommentData, InitalStates.initalCommentData
    );

    useEffect(() => {
        const request = new Functions.CreateUrlRequest(`/blog/server/postOfBlog/${idOfPost}/comments/${index}`);
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
            })
        });
    });

    return(
        <div className="comment">
            <div className="comment_head">
                <h5>{
                        `Data of write: ${dataOfComment.dateOfWrite}`
                    }</h5>
            </div>
        </div>
    )
}

function TitleOfPost({postData}) {
    return(
        <h4 className="title" style={
            Styles.title
        }>
            {postData.title}
        </h4>
    )
}

function Description({postData, descriptionIsOpen}) {
    const descriptionOfPostRef = useRef<HTMLParagraphElement | null>(null);
    useEffect(() => {
        const descriptionOfPost = descriptionOfPostRef.current as HTMLParagraphElement;
        const nowHeightDescriptionOfPost = descriptionOfPost.clientHeight;
        if (descriptionIsOpen) {
            descriptionOfPost.animate([
                {
                    maxHeight: nowHeightDescriptionOfPost + "px",
                    height: nowHeightDescriptionOfPost + "px"
                },
                {
                    maxHeight: nowHeightDescriptionOfPost * 2 + 4 + "px",
                    height: nowHeightDescriptionOfPost * 2 + 4 + "px"
                }
            ], {
                duration: 250,
                easing: "linear",
                fill: "forwards"
            });
        } else if (descriptionIsOpen === false) {
            descriptionOfPost.animate([
                {
                    maxHeight: nowHeightDescriptionOfPost + "px",
                    height: nowHeightDescriptionOfPost + "px"
                },
                {
                    maxHeight: (nowHeightDescriptionOfPost) - 4 / 2 + "px",
                    height: (nowHeightDescriptionOfPost - 4) / 2 + "px"
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
            Styles.descriptionOfPost
        }>
            {postData?.description}
            <br/>
            {postData?.description}
        </p>
    )
}

function ReadDescription({descriptionIsOpen, setDescriptionIsOpen}) {

    const pointerEnter = (e: PointerEvent<HTMLDivElement>) => {
        let current = e.currentTarget as HTMLElement;
        let imgElement = current.querySelector("img") as HTMLImageElement;

        Functions.changeStyleElem(current, {
            backgroundColor: "#7beec7",
            color: "#ffffff",
            transition: "color ease-in .25s, background-color ease-out .25s"
        });
        Functions.changeStyleElem(imgElement, {
            margin: `${descriptionIsOpen ? "-2px" : "2px"} 0 0 9px`,
            transition: ".25s linear",
            transitionProperty: "transform",
            transform: descriptionIsOpen ? "rotateZ(-90deg)" : "rotateZ(90deg)"
        });
    };

    const pointerDown = (e: { currentTarget: HTMLElement; }) => {
        let current = e.currentTarget as HTMLElement;
        let imgElement = current.querySelector("img") as HTMLImageElement;

        Functions.changeStyleElem(current, {
            backgroundColor: "#ffffff",
            color: "#60606e",
            transition: "color ease-in .25s, background-color ease-out .25s"
        });
        Functions.changeStyleElem(imgElement, {
            margin: "2px 0 0 9px",
            transform: "rotate(0)"
        });
    };

    return(
        <div className="toReadDescription" style={
            Functions.cloneObject(
                Styles.toReadDescription
            )
        } onPointerEnter={pointerEnter} onPointerDown={pointerDown} onClick={() => setDescriptionIsOpen(
            descriptionIsOpen === null ? true : !descriptionIsOpen
        )}>
            {
                descriptionIsOpen ? "hide text" : "continue reading"
            }
            <Functions.Img src={Arrow} style={{
                margin: "2px 0 0 9px",
                cursor: "pointer"
            }}/>
        </div>
    )
}