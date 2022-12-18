const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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


let initialState = {
    users: [] as UserDataType[]
}

export type UsersStateType = typeof initialState

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
            return {...state, users: [...state.users, ...action.payload.users]}

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
