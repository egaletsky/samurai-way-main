import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostPropsType} from './MyPostsContainer';


export const MyPosts = (props: PostPropsType) => {

    let posts = props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likeCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        debugger
        let text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text)
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {posts}
            </div>
        </div>

    );
};

