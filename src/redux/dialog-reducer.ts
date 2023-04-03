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


}

export type DialogStateType = typeof initialState


export const dialogReducer = (state: DialogStateType = initialState, action: ActionsTypes): DialogStateType => {

    switch (action.type) {

        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: body}]
            };
        default:
            return state
    }

}
export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody
    } as const
}
