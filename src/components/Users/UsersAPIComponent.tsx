import React from 'react';

import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/user.png'
import {UserDataType, UsersStateType} from '../../redux/users-reducer';
import {Users} from './Users';


export default UsersAPIComponent