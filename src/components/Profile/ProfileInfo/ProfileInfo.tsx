import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {userProfileType} from '../../../redux/store';
import ProfileStatus from './ProfileStatus';


export type ProfileInfoType = {
    profile: userProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://whatifgaming.com/wp-content/uploads/2022/03/Rick-and-Morty-jumping-out-of-portal.gif"/>*/}
            {/*</div>*/}

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="user-photo"/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.contacts.facebook}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>


        </div>
    )
}



