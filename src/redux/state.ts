import {v1} from 'uuid';
import {addPostAC, changeNewTextAC, profileReducer} from './profile-reducer';
import {changeNewMessageAC, dialogReducer, sendMessageAC} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';


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
    posts: PostDataType[]
    newPostText: string

}
export type dialogPageType = {
    messages: MessageDateType[]
    dialogs: DialogsDataType[]
    newMessageBody: string
}


export type StoreType = {
    _state: stateType
    getState: () => stateType
    _onCallSubscriber: () => void

    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void

}


// type AddPostActionType = {
//     type: 'ADD-POST'
//     postText: string
// }
//
// type ChangeNewTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }
//
// type ChangeNewMessageActionType = {
//     type: 'UPDATE-NEW-MESSAGE-BODY'
//     newMessageBody: string
// }
//
// type SendMessageActionType = {
//     type: 'SEND-MESSAGE'
//
// }

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'post 1 hi', likesCount: 23},
                {id: v1(), message: 'post2 how is your', likesCount: 13},
                {id: v1(), message: 'post 3 yo', likesCount: 6},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how is your'},
                {id: 3, message: 'yo'},

            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Olga'},
                {id: 6, name: 'Roman'},
                {id: 7, name: 'Taras'},
            ],

            newMessageBody: ''

        },
        sidebar: {}

    },
    _onCallSubscriber() {
        console.log('state is change')
    },

    getState() {
        return this._state
    },
    subscribe(callback: () => void) {
        this._onCallSubscriber = callback
    },


    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._onCallSubscriber()

    }

}


//window.store = store
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof changeNewMessageAC>


export default store