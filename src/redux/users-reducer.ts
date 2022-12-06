const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type LocationType = {
    city: string
    country: string
}

export type UserDataType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
    photoUrl: string
}

type UsersActionsTypes =
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>


let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'},
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/360'
        },
        {
            id: 2,
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'},
            photoUrl: 'https://news.store.rambler.ru/img/7e4f7ce278adca42ce21cde87101e05d?img-format=auto&img-1-resize=height:355,fit:max&img-2-filter=sharpen'
        },
        {
            id: 3,
            followed: false,
            fullName: 'Andrew',
            status: 'I am a boss too',
            location: {city: 'Kiev', country: 'Ukraine'},
            photoUrl: 'https://teleprogramma.pro/sites/default/files/styles/post_850x666/public/text-images/2022-12/dmitriy_nagiev._foto_global_look_press_1670033221_1670033269.jpg?itok=UH8SC3Jp'
        },
    ] as UserDataType[]
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
