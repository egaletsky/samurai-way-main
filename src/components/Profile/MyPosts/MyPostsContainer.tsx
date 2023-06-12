import React from 'react';

import {addPostAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {AppStateType, PostsType} from '../../../redux/redux-store';
import {connect} from 'react-redux';

import {Dispatch} from 'redux';


type MapStatePropsType = {
    posts: PostsType[]

}
type MapDispatchPropsType = {


    addPost: (newPost: string) => void
}

export type PostPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts

    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPost) => {
            dispatch(addPostAC(newPost))

        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


