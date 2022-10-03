import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div className={s.item}><NavLink to ="/profile" className={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to ="/dialogs" className={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}><a href="/news">News</a></div>
            <div className={s.item}><a href="/music">Music</a></div>
            <div className={s.item}><a href="/settings">Settings</a></div>

        </nav>
    );
};

