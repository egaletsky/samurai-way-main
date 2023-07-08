import React, {ReactNode} from 'react';
import './Profile.module.css'
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPostsContainer} from './MyPosts/MyPostsContainer';

import {userProfileType} from 'redux/redux-store';
import {Redirect} from 'react-router-dom';
import {FormProfileDataType} from 'components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm';


type PropsType = {
    profile: userProfileType
    children?: ReactNode
    status: string
    updateStatus: (newStatus: string) => void
    isAuth: boolean
    isOwner: boolean
    savePhoto: (formData: FormData) => void
    updateProfile: (formData: FormProfileDataType) => Promise<string>
}


export function Profile({profile, status, updateStatus, isAuth, isOwner, savePhoto, updateProfile}: PropsType) {
    return !isAuth ? <Redirect to={'/login'}/> : <div>
        <ProfileInfo
            updateProfile={updateProfile}
            savePhoto={savePhoto}
            isOwner={isOwner}
            profile={profile}
            status={status}
            updateStatus={updateStatus}
        />
        <MyPostsContainer/>
    </div>
}

