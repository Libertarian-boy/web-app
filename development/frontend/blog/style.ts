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

export const main_conteiner__info = {
    top: "25px",
    position: "sticky",
    width: "263px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
};

export const inputSearch_conteiner = {
    position: "relative",
    width: "100%"
};

export const inputSearch = {
    width: "100%",
    height: "40px",
    backgroundColor: "#ececec",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    lineHeight: "48px",
    fontWeight: "700",
    textTransform: "uppercase",
    border: 0,
    padding: "0 0 0 15px",
    margin: 0
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

export const tags_conteiner = {
    width: "100%",
    margin: "31px 0 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap"
} as const;

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
    flexBasis: "100%",
    height: 0
} as const

export const main_conteiner__blogs = {
    width: "750px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
} as const;

export const main_conteiner__blogs___blog = {
    width: "100%",
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

export const commentOfPost: CSSProperties = {
    transition: ".25s ease-out",
    transitionProperty: "width, margin, box-shadow",
    transformOrigin: "left center",
    padding: "0 0 0 10px",
    border: 0,
    color: "#7beec7",
    outline: 0
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
    maxHeight: "72px",
    height: "72px"
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