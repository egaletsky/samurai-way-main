import React from 'react';
import './Profile.module.css'
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../index';

type ProfileType = {
    posts: PostDataType[]
}


export const Profile = (props:ProfileType) => {




    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPosts posts = {props.posts}/>

        </div>
    );
};

