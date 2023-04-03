import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'

import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogPage

    let dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.name}/>)
    let messageElements = state.messages.map(el => <Message text={el.message} key={el.id}/>)


    let addNewMessage = (values: AddMessageFormType) => {
        //alert(values.newMessageBody)
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                </div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
};


type AddMessageFormType = {
    newMessageBody: string
}


const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
        </div>

        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)