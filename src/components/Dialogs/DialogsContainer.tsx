import React from 'react';


import {AppStateType} from '../../redux/redux-store'

import {DialogStateType, sendMessageAC} from '../../redux/dialog-reducer';
import {Dialogs} from './Dialogs';

import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type MapStatePropsType = {
    dialogPage: DialogStateType

}
type MapDispatchPropsType = {

    sendMessage: (message: string) => void

}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage

    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody))

        }
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
