import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type PostDataType = {
    message: string
    id: number
    likesCount:number
}

let posts: PostDataType[] = [
    {id: 1, message: 'post 1 hi', likesCount:23},
    {id: 2, message: 'post2 how is your', likesCount:13},
    {id: 3, message: 'post 3 yo', likesCount:6},
]

export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDateType = {
    message: string
    id: number
}



let dialogs: DialogsDataType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Olga'},
    {id: 6, name: 'Roman'},
    {id: 7, name: 'Taras'},
]


let messages: MessageDateType[] = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'how is your'},
    {id: 3, message: 'yo'},

]



ReactDOM.render(
    <App posts = {posts} dialogs ={dialogs} messages ={messages}  />,
  document.getElementById('root')
);