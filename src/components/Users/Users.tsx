import React from 'react'
import s from './Users.module.css';
import userPhoto from '../../assets/user.png';
import {UserDataType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from '../Users/User/User';

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserDataType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
}

export const Users = (props: UsersType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage} pageSize={props.pageSize}/>

            {props.users.map(el =>
                <User user={el} followingInProgress={props.followingInProgress}
                      followThunk={() => props.follow(el.id)}
                      unfollowThunk={() => props.unfollow(el.id)} key={el.id}/>
            )}


        </div>
    );
}

