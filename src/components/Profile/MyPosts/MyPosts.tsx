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

let posts = postData.map(el => <Post message={el.message} key ={el.id}  likesCount={el.likesCount}/> )



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

