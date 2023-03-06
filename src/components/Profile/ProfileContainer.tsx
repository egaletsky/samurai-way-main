import React from 'react'
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';

type MapStatePropsType = {
    //  profile: string
}

type MapDispatchPropsType = {
    // setUserProfile: (profile: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType


export interface ProfileCItemState {
}


class ProfileContainer extends React.Component<ProfilePropsType, ProfileCItemState> {

    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    //         .then(response => {
    //             // this.props.setUserProfile(response.data)
    //         })
    // }
    //
    render() {
        return <>

        </>
        //
    }


}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    //  profile: state.profilePage.profile
})
export default connect(mapStateToProps,
    {})(ProfileContainer)
//setUserProfile
