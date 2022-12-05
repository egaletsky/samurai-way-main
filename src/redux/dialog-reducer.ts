import {ActionsTypes, dialogPageType, PostDataType} from './store';
import {v1} from 'uuid';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}


const initialState = {
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how is your'},
        {id: 3, message: 'yo'},

    ] as MessageType[],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Olga'},
        {id: 6, name: 'Roman'},
        {id: 7, name: 'Taras'},
    ] as DialogType[],

    newMessageBody: ''
}

export type InitialStateType = typeof initialState


export const dialogReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            if (action.newMessageBody != null) {
                state.newMessageBody = action.newMessageBody
            }
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }

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
