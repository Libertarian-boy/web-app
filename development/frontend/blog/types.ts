export interface InitalPostDataInterface {
    srcOfImg: null | string;
    dateOfCreated: null | string;
    countOfComments: number;
    comment: {
        date: null | string;
        user: null | string;
        content: null | string;
    };
    countOfLikes: number;
    wasLikedByUser: boolean;
    title: string;
    description: string
};