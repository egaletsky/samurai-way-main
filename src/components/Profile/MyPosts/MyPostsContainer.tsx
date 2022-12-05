import React from 'react';

import {addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {AppStateType, store} from '../../../redux/redux-store';
import {connect} from 'react-redux';

import {Dispatch} from 'redux';
import {PostDataType} from '../../../redux/store';


type MapStatePropsType = {
    posts: PostDataType[]
    newPostText: string
}
type MapDispatchPropsType = {

    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type PostPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())

        },

        updateNewPostText: (text: string) => {
            dispatch(changeNewTextAC(text))
        }

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


// export const MyPostsContainer = (props: MyPostsContainerType) => {
//     let state = props.store.getState()
//
//     let addPost = () => {
//         store.dispatch(addPostAC('!!!!!!!'))
//     }
//
//     let onPostChange = (text: string) => {
//         if (text) {
//             store.dispatch(changeNewTextAC(text))
//         }
//     }
//
//     return (
//
//
//         <MyPosts updateNewPostText={onPostChange}
//                  addPost={addPost}
//                  posts={state.profilePage.posts}
//                  newPostText={state.profilePage.newPostText}
//         />
//
//     );
// };

