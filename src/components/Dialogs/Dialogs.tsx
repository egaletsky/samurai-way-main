import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'

import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';


export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogPage

    let dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.name}/>)
    let messageElements = state.messages.map(el => <Message text={el.message} key={el.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.upDateNewMessagesBody(body)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

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

