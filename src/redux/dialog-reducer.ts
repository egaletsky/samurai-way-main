import {ActionsTypes, dialogPageType, PostDataType} from './state';
import {v1} from 'uuid';

export const dialogReducer = (state: dialogPageType, action: ActionsTypes) => {

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
