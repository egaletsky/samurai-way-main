import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsersTC,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UserDataType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';

import {Users} from './Users';

import {Preloader} from '../common/Preloader/Preloader';


type MapStatePropsType = {
    users: UserDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (p: number) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


export interface UsersCItemState {
}


class UsersContainer extends React.Component<UsersPropsType, UsersCItemState> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}

                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}

            />
        </>

    }

}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}


export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersTC
    })(UsersContainer)

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersFC)

