import React from 'react';
import "./Profile.module.css"
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://tinypng.com/images/social/website.jpg"/>
            Main content

            <div>POSTS
                <div className={s.item}>11111</div>
                <div className={s.item}>22222</div>
                <div className={s.item}>22222</div>

            </div>
        </div>
    );
};

