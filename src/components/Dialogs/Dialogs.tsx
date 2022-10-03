import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.dialog}>hi</div>
                <div className={s.dialog}>how is your</div>
                <div className={s.dialog}>yo</div>
            </div>
        </div>
    );
};

