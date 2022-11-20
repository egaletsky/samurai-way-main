import {v1} from 'uuid';
import {ActionsTypes, PostDataType, profilePageType} from './store';

let initialState = {
    posts: [
        {id: v1(), message: 'post 1 hi', likesCount: 23},
        {id: v1(), message: 'post2 how is your', likesCount: 13},
        {id: v1(), message: 'post 3 yo', likesCount: 6},
    ],
    newPostText: 'it-kamasutra'
}


export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes) => {


    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostDataType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 9999,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            if (action.newText != null) {
                state.newPostText = action.newText
            }
            return state
        default:
            return state
    }
}


export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}

export const changeNewTextAC = (newText1: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText1
    } as const
}
