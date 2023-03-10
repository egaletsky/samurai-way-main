import React, {ReactNode} from 'react';
import s from './Header.module.css'
import {Navbar} from '../Navbar/Navbar';
import {NavLink} from 'react-router-dom';
import {userProfileType} from '../../redux/store';

type PropsType = {
    children?: ReactNode
    isAuth: boolean
    login: string | null
}


export const Header = (props: PropsType) => {
    return (<header className={s.header}>
            <img
                src="https://cdn-icons-png.flaticon.com/128/9985/9985425.png"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>login</NavLink>}

            </div>
        </header>
    );
};

