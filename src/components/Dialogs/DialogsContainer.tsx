import React, {ChangeEvent} from 'react';

import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import store from '../../redux/redux-store'

import {changeNewMessageAC, sendMessageAC} from '../../redux/dialog-reducer';
import {Dialogs} from './Dialogs';
import {dialogPageType} from '../../redux/store';


type DialogsContainerType = {
    store: typeof store
}


export const DialogsContainer = (props: DialogsContainerType) => {

    let state = props.store.getState().dialogPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(changeNewMessageAC(body))
    }


    return (
        <Dialogs dialogPage={props.store.getState().dialogPage}
                 upDateNewMessagesBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}

        />
    );
};

