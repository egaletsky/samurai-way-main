import React from 'react';
import './Profile.module.css'
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://tinypng.com/images/social/website.jpg"/>
            </div>

            <div>
                ava+description
            </div>

            <MyPosts/>

        </div>
    );
};

