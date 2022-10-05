import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {addPost, stateType} from './redux/state';
import {App} from './App';


export const rerenderEntireTree = (state:stateType) =>{

    ReactDOM.render(
        <App state = {state} addPost={addPost}/>,
        document.getElementById('root')
    );


}

