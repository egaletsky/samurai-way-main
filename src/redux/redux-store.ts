import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

