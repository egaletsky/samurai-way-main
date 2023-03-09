import {addPostAC, changeNewTextAC, setUserProfile} from './profile-reducer';
import {changeNewMessageAC, sendMessageAC} from './dialog-reducer';


export type PostDataType = {
    message: string
    id: string
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDateType = {
    message: string
    id: number
}
export type stateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
    sidebar: {}
}


export type profilePageType = {
    posts: PostsType[],
    newPostText: string,
    profile: userProfileType
}

export type PostsType = {
    id: string, date: string, message: string, likeCount: number
}
export type userProfileType = null | {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}


export type dialogPageType = {
    messages: MessageDateType[]
    dialogs: DialogsDataType[]
    newMessageBody: string
}


export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof changeNewMessageAC>
    | ReturnType<typeof setUserProfile>


