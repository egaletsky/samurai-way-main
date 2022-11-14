import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ActionsTypes, PostDataType} from '../../../redux/state';
import {addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';


type MyPostsType = {
    posts: PostDataType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void

}

export const MyPosts = (props: MyPostsType) => {


    let posts = props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    let onPostChange = () => {

        let text = newPostElement.current?.value
        if (text) {
            props.dispatch(changeNewTextAC(text))
        }
    }

    return (


        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>

                {posts}

            </div>

        </div>

    );
};

