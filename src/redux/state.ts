import {v1} from 'uuid';


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

        }

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
        if (action.type === 'ADD-POST') {

            const newPost: PostDataType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            console.log(this._state);
            this._onCallSubscriber()

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            if (action.newText != null) {
                this._state.profilePage.newPostText = action.newText
            }
            this._onCallSubscriber()

        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {

            if (action.newMessageBody != null) {
                this._state.dialogPage.newMessageBody = action.newMessageBody
            }
            this._onCallSubscriber()
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogPage.newMessageBody

            this._state.dialogPage.newMessageBody = ''
            this._state.dialogPage.messages.push({id: 6, message: body})
            this._onCallSubscriber()
        }

    }

}


//window.store = store
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof changeNewMessageAC>

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

export const changeNewMessageAC = (newMessageBody: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageBody: newMessageBody
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'

    } as const
}


export default store