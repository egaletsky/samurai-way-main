import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {userProfileType} from '../../../redux/store';


export type ProfileInfoType = {
    profile: userProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://tinypng.com/images/social/website.jpg"/>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="user-photo"/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.contacts.facebook}</div>
            </div>


        </div>
    )
}



