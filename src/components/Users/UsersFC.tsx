import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/user.png'

export const UsersFC = (props: UsersPropsType) => {
    if (props.users.length === 1) {

        // const instance = axios.create({
        //     withCredentials: true,
        //     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        //     headers: {
        //         'API-KEY': 'fa6b4959-95f5-43c2-8c1d-fec84dae46dd'
        //     }
        // });
        //     props.setUsers([
        //         {
        //             id: 1,
        //             followed: false,
        //             fullName: 'Dmitry',
        //             status: 'I am a boss',
        //             location: {city: 'Minsk', country: 'Belarus'},
        //             photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/360'
        //         },
        //         {
        //             id: 2,
        //             followed: true,
        //             fullName: 'Sasha',
        //             status: 'I am a boss too',
        //             location: {city: 'Moscow', country: 'Russia'},
        //             photoUrl: 'https://news.store.rambler.ru/img/7e4f7ce278adca42ce21cde87101e05d?img-format=auto&img-1-resize=height:355,fit:max&img-2-filter=sharpen'
        //         },
        //         {
        //             id: 3,
        //             followed: false,
        //             fullName: 'Andrew',
        //             status: 'I am a boss too',
        //             location: {city: 'Kiev', country: 'Ukraine'},
        //             photoUrl: 'https://teleprogramma.pro/sites/default/files/styles/post_850x666/public/text-images/2022-12/dmitriy_nagiev._foto_global_look_press_1670033221_1670033269.jpg?itok=UH8SC3Jp'
        //         },])
        // })

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                debugger
                props.setUsers(response.data.items)
            })
    }

    return (
        <div>
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
};

