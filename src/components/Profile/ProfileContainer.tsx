import React from 'react'
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {withRouter} from 'react-router-dom';

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}


type PropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            // <Profile {...this.props}/>
            <Profile profile={this.props.profile}/>

        )
    }


}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    {setUserProfile})(ProfileContainer)(WithUrlDataContainerComponent)
//setUserProfile
