//import store from './redux/store';
import store from './redux/redux-store';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {App} from './App';


let rerenderEntireTree = () => {

    ReactDOM.render(
        <App store={store}
        />,
        document.getElementById('root')
    );


}


store.subscribe(rerenderEntireTree)


rerenderEntireTree()