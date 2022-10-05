import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/state';


type MyPostsType = {
    posts: PostDataType[]
    addPost:(postMessage:string)=>void
}

export const MyPosts = (props: MyPostsType) => {


    let posts = props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {

        if(newPostElement.current){
            props.addPost(newPostElement.current.value)
            newPostElement.current.value =''
        }

    }

    return (


        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref ={newPostElement}></textarea>
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

