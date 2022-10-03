import React from 'react';
import './Profile.module.css'
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';



export const Profile = () => {
    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPosts/>

        </div>
    );
};

