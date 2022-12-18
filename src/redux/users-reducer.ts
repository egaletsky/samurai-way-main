const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'


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

type UsersActionsTypes =
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof currentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
}


export type  UsersStateType = {
    users: UserDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

//export type UsersStateType = typeof initialState

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

        default:
            return state
    }
}


export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        payload: {
            userID: userID
        }
    } as const
}

export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID: userID
        }
    } as const
}


export const setUsersAC = (users: UserDataType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}

export const currentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: currentPage
        }
    } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS,
        payload: {
            totalUsersCount: totalUsersCount
        }
    } as const
}