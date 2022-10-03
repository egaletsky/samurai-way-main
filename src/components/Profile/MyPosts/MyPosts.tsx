import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

type PostDataType = {
    message: string
    id: number
    likesCount:number
}


export const MyPosts = () => {

    let postData: PostDataType[] = [
        {id: 1, message: 'post 1 hi', likesCount:23},
        {id: 2, message: 'post2 how is your', likesCount:13},
        {id: 3, message: 'post 3 yo', likesCount:6},
    ]


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

                <Post message="Hi, how are you?"/>
                <Post message="It is my first post"/>
                <Post/>
                <Post/>

            </div>

        </div>

    );
};

