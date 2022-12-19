import React from 'react';
import {connect} from 'react-redux';
import {UsersFC} from './UsersFC';
import {
    currentPageAC,
    followAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserDataType,
    UsersStateType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import UsersAPIComponent from './UsersAPIComponent';
import axios from 'axios/index';
import {Users} from './Users';


type MapStatePropsType = {
    usersPage: UsersStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserDataType[]) => void
    setCurrentPage: (p: number) => void
    setTotalUserCount: (totalUsersCount: number) => void

}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


export interface UsersCItemState {
}


class UsersContainer extends React.Component<UsersPropsType, UsersCItemState> {

    /*constructor(props: UsersPropsType) {
        super(props)
    }*/

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {

                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {

                this.props.setUsers(response.data.items)
            })
    }


    render() {


        return <Users/>
    }

}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (p: number) => {
            dispatch(currentPageAC(p))
        },
        setTotalUserCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersFC)

