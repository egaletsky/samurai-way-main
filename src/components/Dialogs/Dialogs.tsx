import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsDataType, MessageDateType, PostDataType} from '../../index';

type DialogsType = {
    dialogs: DialogsDataType[]
    messages: MessageDateType[]
}



export const Dialogs = (props:DialogsType) => {


    let dialogsElements = props.dialogs
        .map(el => <DialogItem name={el.name} id={el.name}/>)

    let messageElements = props.messages
        .map(el => <Message text={el.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

