import {v1} from 'uuid';
import {ActionsTypes, PostDataType, profilePageType} from './store';


let initialState = {
    posts: [
        {id: v1(), message: 'post 1 hi', likesCount: 23},
        {id: v1(), message: 'post2 how is your', likesCount: 13},
        {id: v1(), message: 'post 3 yo', likesCount: 6},
    ] as PostDataType[],
    newPostText: 'it-kamasutra'
}

export type ProfileInitialStateType = typeof initialState

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionsTypes): ProfileInitialStateType => {


    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostDataType = {
                id: (state.posts.length + 1).toString(), // или просто номер вставлять вручную
                message: state.newPostText, //state.profilePage.newPostText,
                likesCount: 0
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
