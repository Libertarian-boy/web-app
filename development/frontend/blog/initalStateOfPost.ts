import type {InitalPostDataInterface} from "./types";

export const initalPostData: InitalPostDataInterface = {
    srcOfImg: null,
    dateOfCreated: null,
    countOfComments: 0,
    comment: {
        date: null,
        user: null,
        content: null,
    },
    countOfLikes: 0,
    wasLikedByUser: false,
    title: "",
    description: ""
};