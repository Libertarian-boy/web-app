import { CSSProperties } from "react";

export const main = {
    gridArea: "main",
    transform: "translate(-20px, -20px)",
    opacity: 0
};

export const main_conteiner = {
    margin: "150px 6.077% 0 6.154%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
};

export const main_conteiner__info: CSSProperties = {
    top: "25px",
    position: "sticky",
    width: "263px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflow: "hidden scroll"
};

export const inputSearch_conteiner: CSSProperties = {
    position: "relative",
    width: "100%",
    backgroundColor: "#ececec",
    display: "flex",
    alignItems: "center"
};

export const inputSearch: CSSProperties = {
    width: "90%",
    height: "40px",
    backgroundColor: "#ececec",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    lineHeight: "48px",
    fontWeight: 700,
    textTransform: "uppercase",
    border: 0,
    padding: "0 0 0 15px",
    margin: 0,
    outline: "none"
};

export const searchIcon: CSSProperties = {
    display: "flex",
    position: "absolute",
    cursor: "pointer",
    top: "13px",
    right: "19px",
    opacity: .5,
    fontFamily: "Ionicons",
    fontSize: "18px",
    lineHeight: "48px",
    fontWeight: 400,
    textTransform: "uppercase",
    color: "#60606e"
};

export const pushIntoInput: CSSProperties = {
    position: "absolute",
    top: "100%",
    left: "100%",
    opacity: 0,
    width: "100%",
    transition: ".25s ease-out",
    transitionProperty: "top, opacity, left",
    WebkitBoxShadow: "0px 50px 100px 17px rgba(34, 60, 80, 0.2)",
    MozBoxShadow: "0px 50px 100px 17px rgba(34, 60, 80, 0.2)",
    boxShadow: "0px 50px 100px 17px rgba(34, 60, 80, 0.2)",
    zIndex: 20,
    height: "156px",
    maxHeight: "156px",
    overflowY: "scroll"
};

export const pushIntoInput_field: CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    lineHeight: "48px",
    fontWeight: 700,
    textTransform: "uppercase",
    backgroundColor: "#7beec7",
    color: "#ffffff",
    borderTop: "2px solid #b2b2b3",
    borderBottom: "2px solid #b2b2b3",
    cursor: "pointer"
};

export const conteiner_info__posts = {
    margin: "50px 0 0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%"
};

export const postsH2 = {
    margin: 0,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#60606e",
};

export const postsH4 = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#999999",
    transition: "color .25s linear",
    margin: 0,
    cursor: "pointer"
};

export const postsH4Active = {
    color: "#60606e"
}

export const info_posts__titles = {
    display: "flex",
    alignItems: "center",
    justifyConstent: "space-between",
    margin: "29px 0 0 0"
};

export const info_posts__lineConteiner = {
    margin: "20px 0 0 0",
    position: "relative",
    width: "263px",
    height: "2px",
    backgroundColor: "#e6e6e6"
};

export const greenLine = {
    position: "absolute",
    height: "100%",
    width: "33.333%", /* 87.67px */
    backgroundColor: "#7beec7",
    top: 0,
    left: 0
};

export const info_posts__body = {
    maxWidth: "100%",
    width: "100%",
    height: "263px",
    maxHeight: "263px",
    display: "flex",
    scrollSnapType: "x mandatory",
    overflowX: "hidden",
    scrollSnapStop: "always",
    margin: "29px 0 0 0"
} as const;

export const posts_body__column = {
    width: "100%",
    minWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
} as const;

export const column_post = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
};

export const column_post__text = {
    margin: "0 0 0 17px",
    width: "120px"
} as const;

export const column_post__text___h5 = {
    margin: 0,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#60606e"
} as const;

export const column_post__text___p = {
    margin: 0,
    fontFamily: 'Open Sans, sans-serif',
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 400,
    color: "#9a9a9a"
} as const;

export const listOfTypesBlog = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%"
} as const;

export const listOfTypesBlog_h3 = {
    margin: 0,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#60606e"
} as const;

export const listOfTypesBlog_items = {
    margin: "8px 0 0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%"
} as const;

export const listOfTypesBlog_items__item = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #bfbfbf",
    width: "100%",
    transition: "border-bottom .3s ease-in",
    cursor: "pointer"
} as const;

export const listOfTypesBlog_items__item___p = {
    margin: 0,
    fontFamily: 'Open Sans, sans-serif',
    fontSize: "14px",
    lineHeight: "48px",
    fontWeight: 400,
    color: "#60606e",
    transition: "color .3s ease-in"
} as const;

export const tags = {
    margin: "49px 0 0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%"
} as const;

export const tags_h3 = {
    margin: 0,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#60606e"
} as const;

export const tags_conteiner: CSSProperties = {
    width: "100%",
    margin: "31px 0 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "5px"
};

export const tag = {
    height: "30px",
    backgroundColor: "#e5e5e5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#999999",
    cursor: "pointer",
    transition: "color .3s linear, background-color .3s linear"
} as const;

export const breakElem = {
    flexBasis: "10%",
    height: 0
} as const

export const main_conteiner__blogs = {
    width: "750px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
} as const;

export const main_conteiner__blogs___conteiner: CSSProperties = {
    width: "100%",
    position: "relative",
    height: "747px"
};

export const main_conteiner__blogs___blog = {
    width: "100%",
    height: "100%"
} as const;

export const blog_info = {
    margin: "30px 0 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
} as const;

export const blog_info__date: CSSProperties = {
    width: "166px",
    height: "30px",
    backgroundColor: "#7beec7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#ffffff",
};

export const blog_info__comment: CSSProperties = {
    margin: "0 0 0 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    textTransform: "uppercase",
    color: "#cccccc",
    cursor: "pointer"
};

export const iconOfComment: CSSProperties = {
    display: "flex",
    margin: "0 9px 0 0",
    cursor: "pointer",
    fontFamily: "Ionicons",
    fontSize: "18px",
    lineHeight: "48px",
    fontWeight: 400,
    textTransform: "uppercase",
    color: "#cccccc",
    transform: "rotateY(180deg)"
};

export const blog_info__likes: CSSProperties = {
    margin: "0 0 0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    textTransform: "uppercase",
    color: "#cccccc",
    cursor: "pointer"
};

export const heartIcon: CSSProperties = {
    display: "flex",
    transition: ".25s linear",
    transitionProperty: "color",
    margin: "0 8px 0 0",
    cursor: "pointer",
    fontFamily: "Ionicons",
    fontSize: "18px",
    lineHeight: "48px",
    fontWeight: 400,
    textTransform: "uppercase"
};

export const teaxtAreaConteiner: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    transitionDuration: ".25s",
    transitionTimingFunction: "ease-in-out",
    transformOrigin: "left center",
    transitionProperty: "height, width, box-shadow, margin",
    width: 0
};

export const commentOfPost: CSSProperties = {
    transitionDuration: ".25s",
    transitionTimingFunction: "ease-in-out",
    transitionProperty: "padding, margin",
    transformOrigin: "left center",
    padding: 0,
    margin: 0,
    width: "90%",
    height: "100%",
    border: 0,
    color: "#7beec7",
    outline: 0,
    resize: "none",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    lineHeight: "24px",
    fontWeight: 700,
    textTransform: "uppercase"
};

export const arrow_submit: CSSProperties = {
    color: "rgb(123, 238, 199)",
    transition: ".35s linear",
    transitionProperty: "color",
    cursor: "pointer"
};

export const comment: CSSProperties = {
    backgroundColor: "#7beec7",
    margin: "15px 0 0 0"
};

export const comment_head: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "2px solid #c1c1c2"
};

export const h5OfCommentHead: CSSProperties = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    lineHeight: "48px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#ffffff"
};

export const contentOfComment: CSSProperties = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    margin: 0,
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#60606e",
    padding: "25px",
    maxWidth: "calc(100% - 50px)",
    wordBreak: "break-all"
};

export const showMoreComments: CSSProperties = {
    margin: "15px 0 0 0",
    width: "160px",
    height: "40px",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e5e5",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    lineHeight: "48px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#999999",
    transition: "0.25s ease-in",
    cursor: "pointer",
    transitionProperty: "color, background-color, box-shadow",
    outline: "none"
};

export const title: CSSProperties = {
    margin: "20px 0 0 0",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#60606e"
};

export const descriptionOfPost: CSSProperties = {
    margin: "21px 0 0 0",
    fontFamily: 'Open Sans, sans-serif',
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: 400,
    color: "#999999",
    overflowY: "hidden",
};

export const toReadDescription: CSSProperties = {
    margin: "30px 0 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#60606e",
    cursor: "pointer"
};

export const arrowIcon: CSSProperties = {
    margin: "0 0 0 9px",
    cursor: "pointer",
    fontFamily: "Ionicons",
    fontWeight: 400,
    display: "flex"
};

/* Стили для мобильных устройств */

export const main_conteinerMobile: CSSProperties = {
    margin: "50px 10px 0 10px",
    overflow: "hidden"
};

export const main_conteiner__infoMobile: CSSProperties = {
    transition: "transform .35s ease-in",
    top: 0,
    position: "relative",
    width: "100%",
    minWidth: "100%",
    maxHeight: "none",
    height: "auto",
    overflow: "visible"
};

export const main_conteiner__blogsMobile: CSSProperties = {
    width: "100%",
    minWidth: "100%",
    transition: "transform .35s ease-in"
};

export const main_conteiner__blogs___blogMobile: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
};

export const blog_infoMobile: CSSProperties = {
    justifyContent: "space-evenly",
    margin: "15px 0 0 0"
};

export const commentsMobile: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%"
};

export const commentMobile: CSSProperties = {
    width: "100%"
};

export const comment_headMobile: CSSProperties = {
    flexWrap: "wrap",
    justifyContent: "space-evenly"
};

export const titleMobile: CSSProperties = {
    textAlign: "center"
};

export const descriptionOfPostMobile: CSSProperties = {
    textAlign: "center"
};

export const switcherToBlogs: CSSProperties = {
    position: "fixed",
    left: 0,
    bottom: "calc(50% - 25px)",
    width: "50px",
    height: "50px",
    backgroundColor: "#7beec7",
    zIndex: 500
};

export const switcherToBlogsAndInfo_circle: CSSProperties = {
    position: "relative",
    top: "25%",
    left: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    height: "50%",
    width: "50%",
};

export const switcherToBlogsAndInfoIcon: CSSProperties = {
    display: "flex",
    color: "#7beec7"
};

export const switcherToInfo: CSSProperties = {
    position: "fixed",
    right: 0,
    bottom: "calc(50% - 25px)",
    width: "50px",
    height: "50px",
    backgroundColor: "#7beec7",
    zIndex: 500
};

export const conteiner_info__postsMobile: CSSProperties = {
    alignItems: "center"
};

export const info_posts__titlesMobile: CSSProperties = {
    width: "100%",
    justifyContent: "space-around"
};

export const info_posts__lineConteinerMobile: CSSProperties = {
    width: "100%",
    minWidth: "100%"
};

export const column_postMobile: CSSProperties = {
    justifyContent: "space-evenly"
};

export const breakElemMobile: CSSProperties = {
    display: "none"
};

/* Стили для планшета */

export const main_conteinerTablet: CSSProperties = {
    margin: "70px 1% 0 1%"
};

export const main_conteiner__blogsTablet: CSSProperties = {
    width: "60%"
};

export const main_conteiner__infoTablet: CSSProperties = {
    width: "38%"
};

export const info_posts__titlesTablet: CSSProperties = {
    width: "100%",
    overflowX: "scroll"
};

export const info_posts__lineConteinerTablet: CSSProperties = {
    width: "100%"
};

export const searchIconMobileAndTablet: CSSProperties = {
    right: "calc(10% - 19px)"
};

/* Стили для средних экранов */

export const main_conteinerNormal: CSSProperties = {
    margin: "0px 2% 0px 2%"
};

export const main_conteiner__blogsNormal: CSSProperties = {
    width: "calc(96% - 263px)"
};