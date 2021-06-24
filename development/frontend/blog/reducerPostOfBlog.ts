import * as TypesOfBlog from "./types";

export function reducerOfPostData(state: TypesOfBlog.InitalPostDataInterface, action: TypesOfBlog.ActionOfPostReduser): TypesOfBlog.InitalPostDataInterface {
    switch(action?.type) {
        case "setStartProp": 
        return {
            srcOfImg: action.srcOfImg,
            dateOfCreated: action.dateOfCreated,
            countOfComments: action.countOfComments,
            comments: [
                ...action.comments
            ],
            countOfLikes: action.countOfLikes,
            wasLikedByUser: action.wasLikedByUser,
            title: action.title,
            description: action.description
        }
        case "setStateOfLike":
            return {
                ...state,
                wasLikedByUser: action.wasLikedByUser,
                countOfLikes: action.countOfLikes
            };
        case "writeComment":
            return {
                ...state,
                countOfComments: state.countOfComments + 1,
                comments: [...state.comments, action.comment]
            };
        case "setSrcOfImg":
            return {
                ...state,
                srcOfImg: action.srcOfImg
            };
        case "setDateOfCreated":
            return {
                ...state,
                dateOfCreated: action.dateOfCreated
            };
        case "setTitle":
            return {
                ...state,
                title: action.title
            };
        case "setDescription":
            return {
                ...state,
                description: action.description
            };
        default:
            throw new Error("Not exist type of action!");
    }
};

export function reducerOfCommentData(state: TypesOfBlog.InitalCommentDataInterface, action: TypesOfBlog.ActionOfCommentReduser): TypesOfBlog.InitalCommentDataInterface {
    switch(action.type) {
        case "CREATE_COMMENT":
            return {
                ...state,
                ...action
            }
        default:
            return state;
    }
} 