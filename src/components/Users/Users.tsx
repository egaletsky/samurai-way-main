import React from 'react'
import s from './Users.module.css';
import userPhoto from '../../assets/user.png';
import {UserDataType} from '../../redux/users-reducer';

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
                            <img src={u.photos?.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => (props.unfollow(u.id))}>unfollow</button>
                                    : <button onClick={() => (props.follow(u.id))}>follow</button>
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

