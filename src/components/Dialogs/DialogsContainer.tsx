import React from 'react';


import {AppStateType} from '../../redux/redux-store'

import {changeNewMessageAC, DialogStateType, sendMessageAC} from '../../redux/dialog-reducer';
import {Dialogs} from './Dialogs';

import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type MapStatePropsType = {
    dialogPage: DialogStateType
    isAuth: boolean
}
type MapDispatchPropsType = {

    upDateNewMessagesBody: (body: string) => void
    sendMessage: () => void

}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
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

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
