import type * as TypesOfBlog from "./types";

export const initalPostData: TypesOfBlog.InitalPostDataInterface = {
    srcOfImg: null,
    dateOfCreated: null,
    countOfComments: 0,
    comments: [],
    countOfLikes: 0,
    wasLikedByUser: false,
    title: "",
    description: ""
};

export const initalCommentData: TypesOfBlog.InitalCommentDataInterface = {
    userName: null,
    dateOfWrite: null,
    content: null
};