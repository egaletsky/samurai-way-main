import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType, updateNewPostText} from '../../../redux/state';


type MyPostsType = {
    posts: PostDataType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void

}

export const MyPosts = (props: MyPostsType) => {


    let posts = props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
            props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        if(text) {
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
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>

                {posts}

            </div>

        </div>

    );
};

