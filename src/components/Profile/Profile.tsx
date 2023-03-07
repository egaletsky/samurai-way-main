import React from 'react';
import './Profile.module.css'
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {store} from '../../redux/redux-store';

export type ProfileType = {
    // store: typeof store

    profile: any
}


export const Profile = (props: ProfileType) => {


    return (
        <div className={s.content}>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>

        </div>
    );
};

