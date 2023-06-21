import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div className={s.item}><NavLink to="/profile" className={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" className={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/users" className={s.activeLink}>Users</NavLink></div>
            <div className={s.item}><NavLink to="/news" className={s.activeLink}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" className={s.activeLink}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" className={s.activeLink}>Settings</NavLink></div>
        </nav>
    );
};

