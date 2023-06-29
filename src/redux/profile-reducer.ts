import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileAPI} from 'api/api';
import {PostsType, userProfileType} from './redux-store';

export type profilePageType = {
    posts: PostsType[],
    profile: userProfileType | any,
    status: string
}

export type PhotosType = {
    small: string
    large: string
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
    | ReturnType<typeof savePhotoSuccess>


export const profileReducer = (state: profilePageType = initialState, action: ProfileActionsTypes): profilePageType => {


    switch (action.type) {
        case 'profile/ADD-POST':
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
        case 'profile/DELETE-POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        case 'profile/SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'profile/SET-STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'profile/SAVE-PHOTO-SUCCESS':
            //return {...state}
            return {...state, profile: {...state.profile, photos: action.photos}}

        default:
            return state
    }
}

//AC
export const addPostAC = (newPost: string) => {
    return {
        type: 'profile/ADD-POST',
        newPost
    } as const
}

export const deletePostAC = (postId: string) => {
    return {
        type: 'profile/DELETE-POST',
        postId
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: 'profile/SET-USER-PROFILE',
        profile: profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'profile/SET-STATUS',
        status: status
    } as const
}
export const savePhotoSuccess = (photos: PhotosType) => ({type: 'profile/SAVE-PHOTO-SUCCESS', photos} as const)


//TC
export const getProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (formData: FormData) => async (dispatch: Dispatch) => {
    const data = await profileAPI.savePhoto(formData)
    if (data.resultCode === 0)
        dispatch(savePhotoSuccess(data.data.photos))
}