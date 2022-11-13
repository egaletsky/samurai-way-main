import store, {stateType} from './redux/state';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {App} from './App';


let rerenderEntireTree = () => {

    ReactDOM.render(
        <App state={store.getState()}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );


}


store.subscribe(rerenderEntireTree)


rerenderEntireTree()