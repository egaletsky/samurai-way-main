import {Dispatch} from 'redux';
import {authAPI, formRegDataType} from '../api/api';
import {AppThunkType} from './redux-store';
import {stopSubmit} from 'redux-form';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'


export type AppStateType = {
    initialized: boolean
}

let initialState: AppStateType = {
    initialized: false
}

//TYPES AC
export type AppActionsTypes = ReturnType<typeof initializedSuccess>


export const appReducer = (state = initialState, action: AppActionsTypes): AppStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state
    }
}

//AC
export const initializedSuccess = (initialized: boolean) => ({
    type: INITIALIZED_SUCCESS,
    payload: {initialized}
})

//TC
export const initializeApp = (): AppThunkType => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(initializedSuccess(true))
    })
}
