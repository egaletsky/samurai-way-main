import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';



export const MyPosts = () => {
    return (


        <div>
            My posts
            <Post message = 'Hi, how are you?'/>
            <Post message ='It is my first post'/>
            <Post/>
            <Post/>


        </div>

    );
};

