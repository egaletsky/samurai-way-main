import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type MessageType = {
    text: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.text}</div>
    )
}
