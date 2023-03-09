import React, {ReactNode} from 'react';
import './Profile.module.css'
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {store} from '../../redux/redux-store';
import {userProfileType} from '../../redux/store';


type PropsType = {
    setUserProfile: (profile: userProfileType) => void
    profile: userProfileType
    children?: ReactNode
}


export const Profile = (props: PropsType) => {


    return (
        <div className={s.content}>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>

        </div>
    );
};

