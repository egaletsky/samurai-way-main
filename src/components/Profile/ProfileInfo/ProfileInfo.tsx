import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import userAvatar from '../../../assets/user.png';

import ProfileStatus from './ProfileStatus';
import {userProfileType} from 'redux/redux-store';


export type ProfileInfoType = {
    profile: userProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (formData: FormData) => void
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoType) => {
    
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            const formData = new FormData();
            formData.append('image', file);
            savePhoto(formData)
        }
    }

    return !profile
        ? <Preloader/>
        : <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userAvatar} alt="user-photo" className={s.mainPhoto}/>
            {isOwner && <div><input type="file" onChange={(e) => onChangeHandler(e)}/></div>}
            <div>{profile.fullName}</div>
            <div>{profile.contacts.facebook}</div>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>


}



