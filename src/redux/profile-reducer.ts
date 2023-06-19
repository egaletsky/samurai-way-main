import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';
import {PostsType, userProfileType} from './redux-store';

export type profilePageType = {
    posts: PostsType[],
    profile: userProfileType,
    status: string
}

let initialState: profilePageType = {
    posts: [
        {id: '1', date: '111111', message: 'post 1 hi', likeCount: 23},
        {id: '2', date: '111111', message: 'post2 how is your', likeCount: 13},
        {id: '3', date: '111111', message: 'post 3 yo', likeCount: 6},
    ],
    profile: null,
    status: ''
}

//TYPES AC
export type ProfileActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePostAC>

export const profileReducer = (state: profilePageType = initialState, action: ProfileActionsTypes): profilePageType => {


    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: (state.posts.length + 1).toString(), // или просто номер вставлять вручную
                message: action.newPost, //state.profilePage.newPostText,
                likeCount: 0,
                date: 'ffdsfs'
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case 'DELETE-POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            };

        default:
            return state
    }
}

//AC
export const addPostAC = (newPost: string) => {
    return {
        type: 'ADD-POST',
        newPost
    } as const
}

export const deletePostAC = (postId: string) => {
    return {
        type: 'DELETE-POST',
        postId
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status: status
    } as const
}

//TC
export const getProfileTC = (userId: number) => {

    return (dispatch: Dispatch) => {

        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getStatusTC = (userId: number) => {

    return (dispatch: Dispatch) => {

        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatusTC = (status: string) => {

    return (dispatch: Dispatch) => {

        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}
