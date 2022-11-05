import {state, subscribe} from './redux/state';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {addPost, stateType, updateNewPostText} from './redux/state';
import {App} from './App';




let rerenderEntireTree = () =>{

    ReactDOM.render(
        <App state = {state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );


}

subscribe(rerenderEntireTree)



rerenderEntireTree()