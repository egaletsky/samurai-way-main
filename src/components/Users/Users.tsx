import React from 'react'
import s from './Users.module.css';
import userPhoto from '../../assets/user.png';
import {UserDataType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserDataType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {
                    pages.map(p => {

                        let style = ''
                        if (props.currentPage === p) {
                            style = s.selectedPage
                        }

                        return <span className={style}

                                     onClick={() => props.onPageChanged(p)}
                        >
                                {p}
                            </span>
                    })
                }

            </div>

            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos?.small != null ? u.photos.small : userPhoto}
                                     className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {'API-KEY': 'fa6b4959-95f5-43c2-8c1d-fec84dae46dd'}
                                        })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })

                                    }}>unfollow</button>

                                    : <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {'API-KEY': 'fa6b4959-95f5-43c2-8c1d-fec84dae46dd'}
                                        })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(u.id)
                                                }
                                            })
                                    }}>follow</button>
                            }

                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>

                    </span>

                </div>
            )}
        </div>
    );
}

