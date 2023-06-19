import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';

import ProfileStatus from './ProfileStatus';
import {userProfileType} from '../../../redux/redux-store';


export type ProfileInfoType = {
    profile: userProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoType) => {

    if (!profile) {
        return <Preloader/>
    }

    return (

        <div className={s.descriptionBlock}>
            <img src={profile.photos.large} alt="user-photo"/>
            <div>{profile.fullName}</div>
            <div>{profile.contacts.facebook}</div>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>

    )
}



