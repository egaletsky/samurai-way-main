import React from 'react';
import './Profile.module.css'
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {profilePageType} from '../../redux/state';


type ProfileType = {
    profilePage: profilePageType
    addPost:()=>void
    updateNewPostText:(newPostText:string)=>void
}


export const Profile = (props:ProfileType) => {




    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />

        </div>
    );
};

