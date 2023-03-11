import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow,
    UserDataType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';

import {Users} from './Users';
import axios from 'axios';
import {Preloader} from '../common/Preloader/Preloader';
import {getUsers} from '../../api/api';


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
    setUsers: (users: UserDataType[]) => void
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


export interface UsersCItemState {
}


class UsersContainer extends React.Component<UsersPropsType, UsersCItemState> {

    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)

        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
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
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setIsFetching,
        toggleFollowingProgress
    })(UsersContainer)

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersFC)

