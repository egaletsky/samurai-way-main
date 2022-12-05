import {ActionsTypes} from './store';


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

export type DialogInitialStateType = typeof initialState


export const dialogReducer = (state: DialogInitialStateType = initialState, action: ActionsTypes): DialogInitialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':

            return {
                ...state,
                newMessageBody: action.newMessageBody
            };


        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: state.messages.length + 1, message: body}]
            };
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
    debugger
    return {
        type: 'SEND-MESSAGE'

    } as const
}
