import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType} from '../../../index';



type MyPostsType = {
    posts: PostDataType[]
}

export const MyPosts = (props:MyPostsType) => {



let posts = props.posts.map(el => <Post message={el.message} key ={el.id}  likesCount={el.likesCount}/> )



    return (


        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>

                {posts}

            </div>

        </div>

    );
};

