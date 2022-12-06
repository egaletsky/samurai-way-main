import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {props.usersPage.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>

                    </span>

                </div>
            )}
        </div>
    );
};

