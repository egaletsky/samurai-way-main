import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


type MessageType = {
    text: string
}

export const Message = (props:MessageType) =>{
    return(
        <div className={s.dialog}>{props.text}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>


                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Olga" id="5"/>
                <DialogItem name="Roman" id="6"/>



            </div>
            <div className={s.messages}>
                <Message text = "hi"/>
                <Message text = "how is your"/>
                <Message text = "yo"/>

            </div>
        </div>
    );
};

