export interface InitalPostDataInterface {
    srcOfImg: null | string;
    dateOfCreated: null | string;
    countOfComments: number;
    comments: {
        date: null | string;
        user: null | string;
        content: null | string;
    }[];
    countOfLikes: number;
    wasLikedByUser: boolean;
    title: string;
    description: string;
};

export interface ActionOfPostReduser extends InitalPostDataInterface {
    type: string;
    comment: {
        date: null | string;
        user: null | string;
        content: null | string;
    };
}

export interface InitalCommentDataInterface {
    userName: string | null;
    dateOfWrite: string | Date | null;
    content: string | null;
}

export interface ActionOfCommentReduser extends InitalCommentDataInterface {
    type: string;
}