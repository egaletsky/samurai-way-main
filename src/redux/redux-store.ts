import {applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from 'redux';
import {PhotosType, ProfileActionsTypes, profileReducer} from './profile-reducer';
import {DialogActionsTypes, dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {UsersActionsTypes, usersReducer} from './users-reducer';
import {AuthActionsTypes, authReducer} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {FormAction} from 'redux-form/lib/actions'
import {appReducer} from './app-reducer';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type ActionsType =
    AuthActionsTypes
    | DialogActionsTypes
    | ProfileActionsTypes
    | UsersActionsTypes


export type AppStateType = ReturnType<typeof rootReducer>


// for Profiler ext
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType | FormAction>


export type PostsType = {
    id: string, date: string, message: string, likeCount: number
}
export type userProfileType = null | {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: PhotosType
}

// @ts-ignore
window.store = store