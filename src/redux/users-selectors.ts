import {AppStateType} from './redux-store';
import {createSelector} from 'reselect';

export const getUsers = (state: AppStateType) => state.usersPage.users
export const getPageSize = (state: AppStateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching
export const getFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress

// абстрактный пример сложного селектора, для которого мы применяем библиотеку reSelect
export const getUsersSelector = createSelector(getUsers, getIsFetching, (users, isFetching) => {
    return users.filter(u => u.followed === isFetching)
})
