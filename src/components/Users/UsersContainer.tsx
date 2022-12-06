import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setUsersAC, unfollowAC, UserDataType, UsersStateType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    usersPage: UsersStateType
}

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserDataType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },

        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

