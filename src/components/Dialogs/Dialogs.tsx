import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';


type DialogsDataType = {
    id: number
    name: string
}

type MessageDateType = {
    message: string
    id: number
}


export const Dialogs = () => {

    let dialogsData: DialogsDataType[] = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Olga'},
        {id: 6, name: 'Roman'},
        {id: 7, name: 'Taras'},
    ]


    let messageData: MessageDateType[] = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how is your'},
        {id: 3, message: 'yo'},

    ]

    let dialogsElements = dialogsData
        .map(el => <DialogItem name={el.name} id={el.name}/>)

    let messageElements = messageData
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

