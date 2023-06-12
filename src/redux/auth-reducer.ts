import {Dispatch} from 'redux';
import {authAPI, formRegDataType} from '../api/api';
import {AppThunkType} from './redux-store';


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

//TYPES AC
export type AuthActionsTypes = ReturnType<typeof setAuthUserData>


export const authReducer = (state = initialState, action: AuthActionsTypes): AuthStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

//AC
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
})

//TC
export const getAuthTC = () => {

    return (dispatch: Dispatch) => {

        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}
export const login = (formData: formRegDataType): AppThunkType => (dispatch) => {
    authAPI.login(formData).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthTC())
        }
    })
}
export const logout = (): AppThunkType => (dispatch) => {
    authAPI.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}