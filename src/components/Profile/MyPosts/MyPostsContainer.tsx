import React from 'react';
import {Post} from './Post/Post';
import {ActionsTypes, PostDataType} from '../../../redux/store';
import {addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import store from '../../../redux/redux-store';


type MyPostsContainerType = {
    store: typeof store

}

export const MyPostsContainer = (props: MyPostsContainerType) => {
    let state = props.store.getState()

    let addPost = () => {
        store.dispatch(addPostAC('!!!!!!!'))
    }

    let onPostChange = (text: string) => {
        if (text) {
            store.dispatch(changeNewTextAC(text))
        }
    }

    return (


        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />

    );
};

