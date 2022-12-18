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
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <div>
                    <span>1</span>
                    <span>2</span>
                    <span className={s.selectedPage}>3</span>
                    <span>4</span>
                    <span>5</span>
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