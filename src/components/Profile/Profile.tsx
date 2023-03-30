import React, {ReactNode} from 'react';
import './Profile.module.css'
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {store} from '../../redux/redux-store';
import {userProfileType} from '../../redux/store';


type PropsType = {
    profile: userProfileType
    children?: ReactNode
    status: string
    updateStatus: (newStatus: string) => void
}


export const Profile = (props: PropsType) => {


    return (
        <div className={s.content}>

            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>

        </div>
    );
};

