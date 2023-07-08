import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getProfileTC, getStatusTC, savePhoto, updateProfile, updateStatusTC} from 'redux/profile-reducer';
import {AppStateType, userProfileType} from 'redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from 'hoc/withAuthRedirect';
import {compose} from 'redux';
import {isNumber} from 'util';
import {FormProfileDataType} from 'components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm';


type PathParamsType = {
    userId: string
}
type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfilePropsType> {


    refreshProfile() {
        let userId = +this.props.match.params.userId || this.props.meId //'26891'
        if (userId) {
            this.props.getProfileTC(userId)
            this.props.getStatusTC(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
    }

    render() {
        return <div>
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusTC}
                     isAuth={this.props.isAuth}
                     savePhoto={this.props.savePhoto}
                     updateProfile={this.props.updateProfile}
            />
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
    getProfileTC: (userId: number) => void
    getStatusTC: (userId: number) => void
    updateStatusTC: (newStatus: string) => void
    savePhoto: (formData: FormData) => void
    updateProfile: (formData: FormProfileDataType) => Promise<string>
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
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC, savePhoto, updateProfile})
)(ProfileContainer)