import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export const MyPosts = (props: PostPropsType) => {

    let posts = props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likeCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values: AddNewPostFormType) => {
        props.addPost(values.newPostElement)
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>

            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>

    );
};

type AddNewPostFormType = {
    newPostElement: string
}


const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newPostElement" placeholder="Enter your post"/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}


const AddNewPostReduxForm = reduxForm<AddNewPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)