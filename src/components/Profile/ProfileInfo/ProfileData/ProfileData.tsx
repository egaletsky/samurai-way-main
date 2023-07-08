import React from 'react'
import {Contact} from 'components/Profile/ProfileInfo/ProfileData/Contact/Contact';
import {userProfileType} from 'redux/redux-store';


type PropsType = {
    profile: userProfileType
    isOwner: boolean
    goToEditMode: () => void
}
export const ProfileData = ({profile, isOwner, goToEditMode}: PropsType) => {
    return profile && <>
        {isOwner && <div>
          <button onClick={goToEditMode}>edit data</button>
        </div>}
      <h2>{profile.fullName}</h2>
      <div><b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'not'}</div>
      <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>
      <div><b>About me: </b>{profile.aboutMe}</div>
      <div><b>My contacts: </b>
        <div>
            {(Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>)
                .map((key, i) => <Contact key={i} title={key} value={profile.contacts[key]}/>)}</div>
      </div>
    </>
}

