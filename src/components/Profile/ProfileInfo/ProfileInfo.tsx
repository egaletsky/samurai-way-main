import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://tinypng.com/images/social/website.jpg"/>
            </div>

            <div className={s.descriptionBlock}>
                ava+description
            </div>


        </div>
    )
}



