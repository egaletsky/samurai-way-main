import React from 'react';
import './Profile.module.css'
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType, profilePageType} from '../../redux/state';


type ProfileType = {
    state: profilePageType
    addPost:(postMessage:string)=>void
}


export const Profile = (props:ProfileType) => {




    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPosts posts = {props.state.posts} addPost={props.addPost}/>

        </div>
    );
};

