import React, {ChangeEvent} from 'react';

import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {store, AppStateType} from '../../redux/redux-store'

import {changeNewMessageAC, InitialStateType, sendMessageAC} from '../../redux/dialog-reducer';
import {Dialogs} from './Dialogs';
import {dialogPageType} from '../../redux/store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


type DialogsContainerType = {
    store: typeof store
}


type MapStatePropsType = {
    dialogPage: InitialStateType
}
type MapDispatchPropsType = {

    upDateNewMessagesBody: (body: string) => void
    sendMessage: () => void

}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())

        },
        upDateNewMessagesBody: (body: string) => {
            dispatch(changeNewMessageAC(body))
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
