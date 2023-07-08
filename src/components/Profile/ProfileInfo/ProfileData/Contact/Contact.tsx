import React from 'react';
import s from 'components/Profile/ProfileInfo/ProfileData/Contact/Contact.module.css';

type PropsType = {
    title: string,
    value: string
}
export const Contact = ({value, title}: PropsType) => {
    return <div className={s.contact}><b>{title}: </b>{value || '---'}</div>
}