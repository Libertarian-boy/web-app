export function reduserOfPostData(state: {
    date?: any; 
        user?: any; 
        content?: any; 
        srcOfImg?: any; 
        dateOfCreated?: any; 
        title?: any; 
        description?: any; 
        countOfComments?: any;
        countOfLikes?: any;
        wasLikedByUser?: any;
},
    action: { 
        type: any; 
        date?: any; 
        user?: any; 
        content?: any; 
        srcOfImg?: any; 
        dateOfCreated?: any; 
        title?: any; 
        description?: any; 
        countOfComments?: any;
        countOfLikes?: any;
        wasLikedByUser?: any;
    }) {
    switch(action?.type) {
        case "setStartProp": 
        return {
            srcOfImg: action.srcOfImg,
            dateOfCreated: action.dateOfCreated,
            countOfComments: action.countOfComments,
            comment: {
                date: action.date,
                user: action.user,
                content: action.content,
            },
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
                comment: {
                    date: action.date,
                    user: action.user,
                    content: action.content
                }
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