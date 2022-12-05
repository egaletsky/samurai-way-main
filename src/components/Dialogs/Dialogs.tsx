import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {
    ActionsTypes,

    dialogPageType,
    DialogsDataType,
    MessageDateType,

} from '../../redux/store';
import {changeNewMessageAC, sendMessageAC} from '../../redux/dialog-reducer';
import {DialogsPropsType} from './DialogsContainer';


export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogPage

    let dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.name}/>)
    let messageElements = state.messages.map(el => <Message text={el.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.upDateNewMessagesBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}>

                    </textarea></div>


                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

