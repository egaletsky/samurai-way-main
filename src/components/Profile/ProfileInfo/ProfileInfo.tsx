import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import userAvatar from '../../../assets/user.png';

import ProfileStatus from './ProfileStatus';
import {userProfileType} from 'redux/redux-store';
import {ProfileData} from 'components/Profile/ProfileInfo/ProfileData/ProfileData';
import {FormProfileDataType, ProfileDataForm} from 'components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm';


export type ProfileInfoType = {
    profile: userProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (formData: FormData) => void
    updateProfile: (formData: FormProfileDataType) => Promise<string>
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, updateProfile}: ProfileInfoType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            const formData = new FormData();
            formData.append('image', file);
            savePhoto(formData)
        }
    }

    const saveDataHandler = (formData: FormProfileDataType) => {
        updateProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return !profile
        ? <Preloader/>
        : <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userAvatar} alt="user-photo" className={s.mainPhoto}/>
            {isOwner && <div><input type="file" onChange={(e) => onChangeHandler(e)}/></div>}


            {editMode
                ? <ProfileDataForm initialValues={profile} onSubmit={saveDataHandler}/>
                : <ProfileData isOwner={isOwner} profile={profile} goToEditMode={() => setEditMode(true)}/>}

            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>


}



