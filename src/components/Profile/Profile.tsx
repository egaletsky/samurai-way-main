import React from 'react';
import './Profile.module.css'
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import store from '../../redux/redux-store';

type ProfileType = {
    store: typeof store
}


export const Profile = (props: ProfileType) => {


    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>

        </div>
    );
};

