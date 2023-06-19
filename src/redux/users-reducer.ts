import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


type UserPhotosType = {
    small?: string
    large?: string
}

export type UserDataType = {
    name: string
    id: number
    followed: boolean
    status: string
    photos: UserPhotosType

}

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export type  UsersStateType = {
    users: UserDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

//TYPES AC
export type UsersActionsTypes =
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleFollowingProgress>


export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsTypes): UsersStateType => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        case SET_USERS:
            return {...state, users: action.payload.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage}

        case SET_TOTAL_USERS:
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userID]
                    : state.followingInProgress.filter(id => id !== action.payload.userID)
            }
        default:
            return state
    }
}

//AC
export const followSuccess = (userID: number) => {
    return {
        type: FOLLOW,
        payload: {
            userID: userID
        }
    } as const
}

export const unfollowSuccess = (userID: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID: userID
        }
    } as const
}


export const setUsers = (users: UserDataType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: currentPage
        }
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS,
        payload: {
            totalUsersCount: totalUsersCount
        }
    } as const
}

export const setIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching: isFetching
        }
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userID: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFetching: isFetching,
            userID: userID
        }
    } as const
}

//TC
export const requestUsers = (page: number, pageSize: number) => {

    return async (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await usersAPI.requestUsers(page, pageSize)

        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const follow = (userID: number) => {

    return async (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        let data = await usersAPI.follow(userID)

        if (data.resultCode == 0) {
            dispatch(followSuccess(userID))
        }
        dispatch(toggleFollowingProgress(false, userID))

    }
}


export const unfollow = (userID: number) => {

    return async (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        let data = await usersAPI.unfollow(userID)

        if (data.resultCode == 0) {
            dispatch(unfollowSuccess(userID))
        }
        dispatch(toggleFollowingProgress(false, userID))

    }
}
export type userType = {
    id: number
    photoUrl: string
    name: string
    status: string
    location: { city: string, country: string }
    followed: boolean
    photos: {
        small: string
        large: string
    }
}