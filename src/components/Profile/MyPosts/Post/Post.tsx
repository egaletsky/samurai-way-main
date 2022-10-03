import React from 'react';
import s from './Post.module.css';
type PostType={
    message?:string
    likesCount:number
}
export const Post = (props: PostType) => {


    return (

        <div className={s.item}>
            lorem ipsum
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt="ava"/>
            {props.message}
            {props.likesCount}
        </div>

    );
};

