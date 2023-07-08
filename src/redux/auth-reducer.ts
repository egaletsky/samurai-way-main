import {Dispatch} from 'redux';
import {authAPI, formRegDataType, securityAPI} from 'api/api';
import {AppThunkType} from './redux-store';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
    captchaUrl: string | null
}

let initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null
}

//TYPES AC
export type AuthActionsTypes = ReturnType<typeof setAuthUserData>


export const authReducer = (state = initialState, action: AuthActionsTypes): AuthStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

//TC

/*export const getAuthUserData = () => {

    return (dispatch: Dispatch) => {

        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}*/

export const getAuthUserData = (): AppThunkType<Promise<any>> => (dispatch) => {
    return authAPI.getAuth().then((data) => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    })
}
export const login = (formData: formRegDataType): AppThunkType => (dispatch) => {
    debugger
    authAPI.login(formData).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {

            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }

            let message = data.messages.length > 0 ? data.messages[0] : 'some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}


export const getCaptchaUrl = (): AppThunkType => async (dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    const captchaUrl = res.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export const logout = (): AppThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}