import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {dialogPageType, DialogsDataType, MessageDateType} from '../../redux/state';


type DialogsType = {
    state: dialogPageType
}



export const Dialogs = (props:DialogsType) => {


    let dialogsElements = props.state.dialogs
        .map(el => <DialogItem name={el.name} id={el.name}/>)

    let messageElements = props.state.messages
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

