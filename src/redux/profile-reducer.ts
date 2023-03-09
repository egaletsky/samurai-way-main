import {v1} from 'uuid';
import {ActionsTypes, PostDataType, PostsType, profilePageType} from './store';


let initialState: profilePageType = {
    posts: [
        {id: v1(), date: '111111', message: 'post 1 hi', likeCount: 23},
        {id: v1(), date: '111111', message: 'post2 how is your', likeCount: 13},
        {id: v1(), date: '111111', message: 'post 3 yo', likeCount: 6},
    ],
    newPostText: 'it-kamasutra',
    profile: null
}


export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes): profilePageType => {


    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: (state.posts.length + 1).toString(), // или просто номер вставлять вручную
                message: state.newPostText, //state.profilePage.newPostText,
                likeCount: 0,
                date: 'ffdsfs'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state
    }
}


export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changeNewTextAC = (newText1: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText1
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}

