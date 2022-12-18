import React from 'react';

import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/user.png'
import {UserDataType, UsersStateType} from '../../redux/users-reducer';

export interface UsersCItemState {
}


class Users extends React.Component<UsersPropsType, UsersCItemState> {

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


        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                            if (this.props.currentPage === p) {
                                style = s.selectedPage
                            }

                            return <span className={style}

                                         onClick={() => this.onPageChanged(p)}
                            >
                                {p}
                            </span>
                        })
                    }

                </div>
                {this.props.usersPage.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos?.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => (this.props.unfollow(u.id))}>unfollow</button>
                                    : <button onClick={() => (this.props.follow(u.id))}>follow</button>
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

}

export default Users