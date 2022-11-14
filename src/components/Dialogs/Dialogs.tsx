import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import store, {
    ActionsTypes,
    changeNewMessageAC,
    dialogPageType,
    DialogsDataType,
    MessageDateType,
    sendMessageAC
} from '../../redux/state';


type DialogsType = {
    state: dialogPageType
    dispatch: (action: ActionsTypes) => void
}


export const Dialogs = (props: DialogsType) => {


    let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.name}/>)
    let messageElements = props.state.messages.map(el => <Message text={el.message}/>)
    let newMessageBody = props.state.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(changeNewMessageAC(body))

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

