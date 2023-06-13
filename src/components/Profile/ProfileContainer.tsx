import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getProfileTC, getStatusTC, updateStatusTC} from '../../redux/profile-reducer';
import {AppStateType, userProfileType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {isNumber} from 'util';


type PathParamsType = {
    userId: string
}
type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || '26891' //'26891'
// || this.props.meId.toString()
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)

    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatusTC} isAuth={this.props.isAuth}/>
        </div>
    }
}

type mapStateToPropsType = {
    profile: userProfileType
    status: string
    meId: number | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (newStatus: string) => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    meId: state.auth.id,
    isAuth: state.auth.isAuth
})


export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC})
)(ProfileContainer)