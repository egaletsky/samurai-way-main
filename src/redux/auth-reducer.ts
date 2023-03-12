import {ActionsTypes} from './store';
import {Dispatch} from 'redux';
import {authAPI, usersAPI} from '../api/api';
import {setIsFetching, setTotalUsersCount, setUsers} from './users-reducer';

const SET_USER_DATA = 'SET_USER_DATA'


export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}

let initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false
}


export type AuthActionsTypes = ReturnType<typeof setAuthUserData>


export const authReducer = (state = initialState, action: AuthActionsTypes): AuthStateType => {


    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state
    }
}


export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
})


export const getAuthTC = () => {

    return (dispatch: Dispatch) => {

        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}